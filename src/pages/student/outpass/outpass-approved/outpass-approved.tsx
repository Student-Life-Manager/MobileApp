import MD5 from 'crypto-js/md5'
import { format } from 'date-fns'
import { useState } from 'react'
import { View, Alert, Vibration } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import { YStack } from 'tamagui'

import { useFetchUserOutpasses } from '@app/api/hooks/useFetchUserOutpasses'
import CalendarIcon from '@app/assets/icons/calendar.svg'
import LocationIcon from '@app/assets/icons/location.svg'
import { Button } from '@app/components/ui/button'
import { InfoList } from '@app/components/ui/info-list'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { OutpassStatus } from '@app/constants/enums'
import { Outpass } from '@app/types/outpass'

import { StatusLabel } from './@components/status-label'
import { Timer } from './@components/timer'
import { styles } from './styles'

export const OutpassApproved = ({ navigation, route }) => {
	const { data: outpassList } = useFetchUserOutpasses()
	const uuid = route.params?.uuid
	const outpass = outpassList.find((item) => item.uuid === uuid)

	const generateQrValue = (outpass?: Outpass) => {
		let currentTime = new Date().getTime()
		const outpassHash = {
			timeStamp: currentTime,
			hashValue: outpass?.uuid ? MD5(outpass.uuid + currentTime).toString() : '',
		}
		return JSON.stringify(outpassHash)
	}

	const [qrCodeValue, setQrCodeValue] = useState(generateQrValue(outpass))

	const qrCodeRefresh = () => {
		// Vibration.vibrate([500])
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
				<StatusLabel status={outpass?.status || OutpassStatus.Pending} />
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
						value: outpass?.location ?? '',
						icon: LocationIcon,
						isListIconVisible: true,
					},
					{
						title: 'Out date',
						value: outpass?.outDate ? format(new Date(outpass?.outDate), 'do MMMM') : '',
						icon: CalendarIcon,
						isListIconVisible: true,
					},
					{
						title: 'Return date',
						value: outpass?.expectedReturnAt
							? format(new Date(outpass?.expectedReturnAt), 'do MMMM')
							: '',
						icon: CalendarIcon,
						isListIconVisible: true,
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
