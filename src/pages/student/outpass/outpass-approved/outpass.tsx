import MD5 from 'crypto-js/md5'
import { useState } from 'react'
import { View, Alert, Vibration } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import { YStack } from 'tamagui'

import CalendarIcon from '@app/assets/icons/calendar.svg'
import LocationIcon from '@app/assets/icons/location.svg'
import { Button } from '@app/components/ui/button'
import { InfoList } from '@app/components/ui/info-list'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { outpassList } from '@app/constants/outpass'

import { StatusLabel } from './@components/status-label'
import { Timer } from './@components/timer'
import { styles } from './styles'

export const Outpass = ({ navigation }) => {
	const generateQrValue = (outpass) => {
		let currentTime = new Date().getTime()
		const outpassHash = {
			timeStamp: currentTime,
			hashValue: MD5(outpass.outpassId + currentTime).toString(),
		}
		return JSON.stringify(outpassHash)
	}

	const [qrCodeValue, setQrCodeValue] = useState(generateQrValue(outpassList[0]))

	const qrCodeRefresh = () => {
		Vibration.vibrate([500])
		const hashValue = generateQrValue(outpassList[0])
		setQrCodeValue(hashValue)
	}

	const cancelOutpass = () => {
		Alert.alert('Cancel outpass', 'Are you sure you want to cancel this outpass', [
			{
				text: 'No',
				onPress: () => console.log('no pressed'),
			},
			{ text: 'Yes', onPress: () => console.log('yes pressed') },
		])
	}

	return (
		<PageWrapper>
			<YStack
				alignItems='center'
				space='$5'
				paddingTop='$8'
			>
				<StatusLabel status='returnedCampus' />
				<View style={styles.QRWrapper}>
					<QRCode
						value={qrCodeValue}
						size={220}
						backgroundColor='transparent'
					/>
				</View>
				<Timer onRefresh={qrCodeRefresh} />
			</YStack>
			<InfoList
				listIconDirection='left'
				listData={[
					{
						title: 'Location',
						value: 'Hyderabad',
						icon: LocationIcon,
					},
					{
						title: 'Out date',
						value: '15th March',
						icon: CalendarIcon,
					},
					{
						title: 'In date',
						value: '17th March',
						icon: CalendarIcon,
					},
				]}
			/>
			<Button
				variant='primary'
				onPress={cancelOutpass}
			>
				Cancel outpass
			</Button>
		</PageWrapper>
	)
}
