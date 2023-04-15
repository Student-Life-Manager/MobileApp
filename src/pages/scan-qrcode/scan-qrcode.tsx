import { PageWrapper } from '@app/components/ui/page-wrapper'
import { Text, View } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { useState, useEffect } from 'react'
import { outpassList } from '@app/constants/outpass'
import { outpassType } from '@app/@types'
import { MD5 } from 'crypto-js'
import { outpassScanMessages } from '@app/constants/messages'
import { styles } from './styles'
import { OutpassStatus } from '@app/constants/enums'

export const ScanQRCode = ({ navigation }) => {
	const [hasPermission, setHasPermission] = useState<boolean>(false)
	const [scanned, setScanned] = useState<boolean>(false)
	const [outpassApprovalStatus, setOutpassApprovalStatus] = useState<OutpassStatus>(
		OutpassStatus.Pending,
	)
	const [outpassMessage, setOutpassMessage] = useState<string | null>(null)

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
			const finalOutpass = outpassList.filter((outpass: outpassType) => {
				const newHash = MD5(outpass.outpassId + scannedOutpass.timeStamp).toString()
				return newHash === scannedOutpass.hashValue
			})
			console.log('final outpass', finalOutpass)

			setOutpassApprovalStatus(OutpassStatus.Approved)

			setTimeout(() => {
				setOutpassApprovalStatus(OutpassStatus.Pending)
				setOutpassMessage(null)
				setScanned(false)
			}, 3000)
		} else {
			setOutpassApprovalStatus(OutpassStatus.Rejected)
			setOutpassMessage(outpassScanMessages.invalidQRCode)

			setTimeout(() => {
				setOutpassApprovalStatus(OutpassStatus.Pending)
				setOutpassMessage(null)
				setScanned(false)
			}, 3000)
			// alert(outpassScanMessages.invalidQRCode)
		}
	}

	useEffect(() => {
		console.log('Please allow camera access to scan QR code')
	}, [hasPermission])

	useEffect(() => {
		getBarCodeScannerPermissions()
	}, [])

	return (
		<PageWrapper
			noPadding
			bounces={false}
		>
			<View style={styles.pageContainer}>
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
								outpassApprovalStatus === OutpassStatus.Pending
									? styles.approvalStatusTagBlue
									: outpassApprovalStatus === OutpassStatus.Approved
									? styles.approvalStatusTagGreen
									: outpassApprovalStatus === OutpassStatus.Rejected
									? styles.approvalStatusTagRed
									: null,
							]}
						>
							<Text style={styles.statusText}>
								{outpassApprovalStatus === OutpassStatus.Pending
									? 'Waiting to scan QR code'
									: outpassApprovalStatus === OutpassStatus.Approved
									? 'Exit approved'
									: outpassApprovalStatus === OutpassStatus.Rejected
									? 'Exit rejected'
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
		</PageWrapper>
	)
}
