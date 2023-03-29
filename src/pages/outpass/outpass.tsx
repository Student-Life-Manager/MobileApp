import { YStack } from 'tamagui'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import QRCode from 'react-native-qrcode-svg'
import { outpass } from './constants'
import MD5 from 'crypto-js/md5'
import { GLOBAL_STYLES } from '@app/constants/styles'
import { View, Alert, Vibration } from 'react-native'
import { InfoList } from '@app/components/ui/info-list'
import LocationIcon from '@app/assets/icons/location.svg'
import CalendarIcon from '@app/assets/icons/calendar.svg'
import { Timer } from './@components'
import { useState } from 'react'
import { StatusLabel } from './@components/status-label'

export const Outpass = ({ navigation }) => {
	const generateQrValue = (outpass) => {
		let currentTime = new Date().getTime()
		const outpassHash = {
			timeStamp: currentTime,
			hashValue: MD5(outpass.outpassId + currentTime).toString(),
		}
		return JSON.stringify(outpassHash)
	}

	const [qrCodeValue, setQrCodeValue] = useState(generateQrValue(outpass))

	const qrCodeRefresh = () => {
		// console.log(hashValue)
		Vibration.vibrate([500])
		const hashValue = generateQrValue(outpass)
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
				<View
					style={{
						backgroundColor: GLOBAL_STYLES.COLOR.SECONDARY,
						borderWidth: 2,
						borderColor: GLOBAL_STYLES.COLOR.PRIMARY,
						borderStyle: 'dashed',
						borderRadius: 20,
						height: 270,
						width: 270,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<QRCode
						value={qrCodeValue}
						size={220}
						backgroundColor='transparent'
					/>
				</View>
				<Timer onRefresh={qrCodeRefresh} />
			</YStack>
			<InfoList
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
