import { MD5 } from 'crypto-js'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { useState, useEffect } from 'react'
import { Text, View, Alert } from 'react-native'

import { useFetchAllOutpass } from '@app/api/hooks/useFetchAllOutpass'
import { useUpdateOutpassStatus } from '@app/api/hooks/useUpdateOutpassStatus'
import { useAuthentication } from '@app/components/hooks/authentication'
import { Button } from '@app/components/ui/button'
import { Loader } from '@app/components/ui/loader'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { OutpassStatus } from '@app/constants/enums'
import { OutpassScanMessages } from '@app/constants/messages'
// import { outpassList } from '@app/constants/outpass'

import { styles } from './styles'

enum ScanStatus {
	ExitApproved = 'ExitApproved',
	ReturnApproved = 'ReturnApproved',
	Rejected = 'Rejected',
	Waiting = 'Waiting',
}

export const ScanQRCode = ({ navigation }) => {
	const { logout } = useAuthentication()
	const {
		updateOutpassStatus,
		isLoading: isUpdateStatusLoading,
		isSuccess,
		isError,
	} = useUpdateOutpassStatus()
	const { data: outpassList, isLoading: isOutpassListLoading, refetch } = useFetchAllOutpass()
	const [hasPermission, setHasPermission] = useState<boolean>(false)
	const [scanned, setScanned] = useState<boolean>(false)
	const [outpassApprovalStatus, setOutpassApprovalStatus] = useState<ScanStatus>(ScanStatus.Waiting)
	const [outpassMessage, setOutpassMessage] = useState<OutpassScanMessages | null>(null)

	console.log('update_status ----', isSuccess, isError)

	useEffect(() => {
		if (isSuccess) {
			refetch()
		}
	}, [isSuccess])

	const getBarCodeScannerPermissions = async () => {
		const { status } = await BarCodeScanner.requestPermissionsAsync()
		setHasPermission(status === 'granted')
	}

	const handleBarCodeScanned = ({ data }) => {
		setScanned(true)
		const genenratedOutpassRegex = /{"timeStamp":\d+,"hashValue":"[a-z0-9]+"}/
		const isOutpassValid = genenratedOutpassRegex.test(data)

		if (isOutpassValid) {
			const scannedOutpass = JSON.parse(data)
			const finalOutpass = outpassList.filter((outpass) => {
				const newHash = MD5(outpass.uuid + scannedOutpass.timeStamp).toString()
				return newHash === scannedOutpass.hashValue
			})

			if (finalOutpass.length === 0) {
				handleBadQr(OutpassScanMessages.OutpassExpired)
			} else if (finalOutpass[0].status === OutpassStatus.Returned) {
				handleBadQr(OutpassScanMessages.AlreadyReturned)
			} else if (finalOutpass[0].status === OutpassStatus.Approved) {
				handleApproveExit(finalOutpass[0].uuid)
			} else if (finalOutpass[0].status === OutpassStatus.Exited) {
				handleApproveReturn(finalOutpass[0].uuid)
			}

			// handleResetQr()
		} else {
			handleBadQr(OutpassScanMessages.InvalidQRCode)
		}
	}

	const handleBadQr = (message: OutpassScanMessages) => {
		setOutpassApprovalStatus(ScanStatus.Rejected)
		setOutpassMessage(message)
		// handleResetQr()
	}

	const handleResetQr = () => {
		setOutpassApprovalStatus(ScanStatus.Waiting)
		setOutpassMessage(null)
		setScanned(false)
	}

	const handleApproveExit = (uuid: string) => {
		setOutpassApprovalStatus(ScanStatus.ExitApproved)
		updateOutpassStatus({
			outpassUuid: uuid,
			status: OutpassStatus.Exited,
		})
	}

	const handleApproveReturn = (uuid: string) => {
		setOutpassApprovalStatus(ScanStatus.ReturnApproved)
		updateOutpassStatus({
			outpassUuid: uuid,
			status: OutpassStatus.Returned,
		})
	}

	useEffect(() => {
		if (!hasPermission) {
			// Alert.alert('No camera access', 'Please allow camera access to scan QR code')
		}
	}, [hasPermission])

	useEffect(() => {
		getBarCodeScannerPermissions()
	}, [])

	return (
		<PageWrapper
			noPadding
			bounces={false}
		>
			{isOutpassListLoading ? (
				<Loader />
			) : (
				<View style={styles.pageContainer}>
					<View>
						<View style={{ position: 'relative' }}>
							<BarCodeScanner
								onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
								style={styles.cameraComponent}
								type='back'
							/>
							<View style={styles.cameraOverlay}>
								<View style={styles.cameraQRBorder}></View>
							</View>
						</View>

						<View style={styles.infoContainer}>
							{outpassApprovalStatus && (
								<View
									style={[
										styles.approvalStatusTag,
										outpassApprovalStatus === ScanStatus.Waiting
											? styles.approvalStatusTagBlue
											: (outpassApprovalStatus === ScanStatus.ExitApproved ||
													outpassApprovalStatus === ScanStatus.ReturnApproved) &&
											  isSuccess
											? styles.approvalStatusTagGreen
											: outpassApprovalStatus === ScanStatus.Rejected || isError
											? styles.approvalStatusTagRed
											: null,
									]}
								>
									<Text style={styles.statusText}>
										{outpassApprovalStatus === ScanStatus.Waiting
											? 'Waiting to scan QR code'
											: outpassApprovalStatus === ScanStatus.ExitApproved
											? 'Exit approved'
											: outpassApprovalStatus === ScanStatus.ReturnApproved
											? 'Return approved'
											: outpassApprovalStatus === ScanStatus.Rejected
											? 'Exit rejected'
											: isError
											? 'Error'
											: null}
									</Text>
								</View>
							)}

							{outpassMessage && (
								<View style={styles.messageWrapper}>
									<Text style={styles.messageText}>{outpassMessage}</Text>
								</View>
							)}
						</View>
					</View>

					<View style={styles.buttonContainer}>
						<Button
							variant='secondary'
							style={styles.button}
							onPress={() => {
								logout()
							}}
						>
							Logout
						</Button>
						<Button
							variant='primary'
							style={styles.button}
							onPress={handleResetQr}
							// disabled={!scanned}
						>
							{scanned ? 'Scan again' : 'Scanning...'}
						</Button>
					</View>
				</View>
			)}
		</PageWrapper>
	)
}
