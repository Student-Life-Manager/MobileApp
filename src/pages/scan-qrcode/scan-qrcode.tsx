import { PageWrapper } from '@app/components/ui/page-wrapper'
import { Text, StyleSheet, View } from 'react-native'
import { GLOBAL_STYLES } from '@app/constants/styles'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { useState, useEffect } from 'react'
import { outpassList } from '@app/constants/outpass'
import { generatedOutpassType, outpassType } from '@app/@types'
import { MD5 } from 'crypto-js'
import { outpassScanMessages } from '@app/constants/messages'

export const ScanQRCode = ({ navigation }) => {
	const [hasPermission, setHasPermission] = useState<boolean>(false)
	const [scanned, setScanned] = useState<boolean>(false)
	const [outpassApprovalStatus, setOutpassApprovalStatus] = useState<
		'approved' | 'rejected' | 'waiting'
	>('waiting')
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

			setOutpassApprovalStatus('approved')

			setTimeout(() => {
				setOutpassApprovalStatus('waiting')
				setOutpassMessage(null)
				setScanned(false)
			}, 3000)
		} else {
			setOutpassApprovalStatus('rejected')
			setOutpassMessage(outpassScanMessages.invalidQRCode)

			setTimeout(() => {
				setOutpassApprovalStatus('waiting')
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
							style={
								outpassApprovalStatus === 'waiting'
									? styles.approvalStatusTagBlue
									: outpassApprovalStatus === 'approved'
									? styles.approvalStatusTagGreen
									: outpassApprovalStatus === 'rejected'
									? styles.approvalStatusTagRed
									: null
							}
						>
							<Text style={styles.statusText}>
								{outpassApprovalStatus === 'waiting'
									? 'Waiting to scan QR code'
									: outpassApprovalStatus === 'approved'
									? 'Exit approved'
									: outpassApprovalStatus === 'rejected'
									? 'Exit rejected'
									: null}
							</Text>
						</View>
					)}

					{outpassMessage && (
						<View style={styles.messageWrapper}>
							<Text style={{ color: GLOBAL_STYLES.COLOR.DARK_TEXT }}>{outpassMessage}</Text>
						</View>
					)}
				</View>
			</View>
		</PageWrapper>
	)
}

const styles = StyleSheet.create({
	pageContainer: {
		flex: 1,
	},
	cameraOverlay: {
		height: '100%',
		width: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	cameraQRBorder: {
		height: '65%',
		width: '65%',
		borderColor: GLOBAL_STYLES.COLOR.PRIMARY,
		borderWidth: 4,
		borderStyle: 'dashed',
		borderRadius: 20,
	},
	cameraComponent: {
		height: 400,
	},
	infoContainer: {
		marginTop: 40,
		display: 'flex',
		alignItems: 'center',
	},
	errorText: {
		color: GLOBAL_STYLES.COLOR.RED,
	},
	approvalStatusTagBlue: {
		backgroundColor: GLOBAL_STYLES.COLOR.PRIMARY,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 100,
	},
	approvalStatusTagGreen: {
		backgroundColor: GLOBAL_STYLES.COLOR.GREEN,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 100,
	},
	approvalStatusTagRed: {
		backgroundColor: GLOBAL_STYLES.COLOR.RED,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 100,
	},
	statusText: { color: '#fff', fontWeight: '600', textAlign: 'center' },
	messageWrapper: {
		marginTop: 20,
		borderColor: GLOBAL_STYLES.COLOR.BORDER_COLOR,
		borderWidth: 1,
		borderRadius: 10,
		paddingVertical: 12,
		paddingHorizontal: 20,
	},
	buttonWrapper: {
		paddingHorizontal: 20,
	},
})
