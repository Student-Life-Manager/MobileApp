import { format } from 'date-fns'
import { Text, TouchableOpacity, View } from 'react-native'
import { H3 } from 'tamagui'

import CalendarIcon from '@app/assets/icons/calendar.svg'
import LocationIcon from '@app/assets/icons/location.svg'
import MapIcon from '@app/assets/icons/map.svg'
import UserIcon from '@app/assets/icons/user.svg'
import { useGlobalModal } from '@app/components/hooks/global-modal'
import { Button } from '@app/components/ui/button'
import { InfoList, InfoListItemProps } from '@app/components/ui/info-list'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { OutpassStatus } from '@app/constants/enums'
import { Outpass } from '@app/types/outpass'

import { RejectOutpassModal } from './@components/reject-outpass-modal'
import { styles } from './styles'

export const WardenOutpassDetails = ({ navigation, route }) => {
	const outpass: Outpass = route.params.outpass
	const { renderModal } = useGlobalModal()

	const personalDetailsData: InfoListItemProps[] = [
		{
			title: 'Location',
			value: outpass.location,
			icon: LocationIcon,
			isListIconVisible: true,
		},
		{
			title: 'Out date',
			value: format(new Date(outpass.outDate), 'dd MMM, yyyy'),
			icon: CalendarIcon,
			isListIconVisible: true,
		},
		{
			title: 'Return date',
			value: format(new Date(outpass.expectedReturnAt), 'dd MMM, yyyy'),
			icon: CalendarIcon,
			isListIconVisible: true,
		},
		{
			title: 'Purpose',
			value: outpass.reason,
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

	const handleRejectOutpass = () => {
		renderModal({
			modalContent: <RejectOutpassModal />,
			payload: {
				outpassUuid: outpass.uuid,
				navigateOnAction: () => {
					navigation.navigate('warden-outpass-list')
				},
			},
		})
	}

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
				{outpass.status === OutpassStatus.Pending ? (
					<Button
						variant='primary'
						style={styles.approveButton}
					>
						Approve
					</Button>
				) : null}
				{outpass.status === OutpassStatus.Pending ? (
					<Button
						variant='secondary'
						onPress={handleRejectOutpass}
					>
						Reject
					</Button>
				) : null}
			</View>
		</PageWrapper>
	)
}
