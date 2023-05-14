import { Text, TouchableOpacity, View } from 'react-native'
import { H3 } from 'tamagui'

import CalendarIcon from '@app/assets/icons/calendar.svg'
import LocationIcon from '@app/assets/icons/location.svg'
import MapIcon from '@app/assets/icons/map.svg'
import UserIcon from '@app/assets/icons/user.svg'
import { Button } from '@app/components/ui/button'
import { InfoList, InfoListItemProps } from '@app/components/ui/info-list'
import { PageWrapper } from '@app/components/ui/page-wrapper'

import { styles } from './styles'

export const WardenOutpassDetails = ({ navigation }) => {
	const personalDetailsData: InfoListItemProps[] = [
		{
			title: 'Location',
			value: 'Hyderabad',
			icon: LocationIcon,
			isListIconVisible: true,
		},
		{
			title: 'Out date',
			value: '12th March, 2023',
			icon: CalendarIcon,
			isListIconVisible: true,
		},
		{
			title: 'Return date',
			value: '15th March, 2023',
			icon: CalendarIcon,
			isListIconVisible: true,
		},
		{
			title: 'Purpose',
			value: 'Home',
			icon: MapIcon,
			isListIconVisible: true,
		},
		{
			title: 'Guardian',
			value: 'Father',
			icon: UserIcon,
			isListIconVisible: true,
			customAdornment: (
				<TouchableOpacity style={styles.callGuardianButton}>
					<Text>Call guardian</Text>
				</TouchableOpacity>
			),
		},
	]

	return (
		<PageWrapper>
			<View>
				<H3>Outpass details</H3>
				<InfoList
					heading='Pulkit Jasti'
					subHeading='AP19110010491'
					listData={personalDetailsData}
					listIconDirection='left'
					emptyStateText='No data, please contact the admin'
				/>
				<Button
					variant='primary'
					style={styles.approveButton}
				>
					Approve
				</Button>
				<Button variant='secondary'>Reject</Button>
			</View>
		</PageWrapper>
	)
}
