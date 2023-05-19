import { View, TouchableOpacity } from 'react-native'
import { H3 } from 'tamagui'

import ProfileIcon from '@app/assets/images/profile-icon.svg'
import WardenPage from '@app/assets/images/warden-page.svg'
import { useAuthentication } from '@app/components/hooks/authentication'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { OutpassStatus } from '@app/constants/enums'
import { studentOutpassListItem } from '@app/types'

import { ListItem } from './@components/list-item'
import { styles } from './styles'

const outpassList: studentOutpassListItem[] = [
	{
		date: '2021-09-01',
		outTime: '12:30 PM',
		outpassId: '123',
		status: OutpassStatus.Pending,
	},
	{
		date: '2021-09-01',
		outTime: '8:20 AM',
		outpassId: '123',
		status: OutpassStatus.Approved,
	},
	{
		date: '2021-09-01',
		outTime: '2:00 PM',
		outpassId: '123',
		status: OutpassStatus.Rejected,
	},
]

export const StudentHome = ({ navigation }) => {
	const { userData } = useAuthentication()
	const navigateToProfile = () => {
		navigation.navigate('student-profile')
	}

	const navigateToGetNewOutpass = () => {
		navigation.navigate('outpass-details')
	}

	const navigateToFeedback = () => {
		navigation.navigate('feedback-form')
	}

	return (
		<PageWrapper bounces={false}>
			<View style={styles.pageContainer}>
				<View>
					<View style={styles.headerContainer}>
						<H3>
							Welcome, {'\n'} {`${userData?.firstName} ${userData?.lastName}`}
						</H3>
						<TouchableOpacity onPress={navigateToProfile}>
							<ProfileIcon />
						</TouchableOpacity>
					</View>
					<View style={styles.listContainer}>
						{outpassList.length > 0 ? (
							outpassList.map((item) => {
								return (
									<ListItem
										{...item}
										navigation={navigation}
										key={item.outpassId}
									/>
								)
							})
						) : (
							<WardenPage />
						)}
					</View>
				</View>
				<View>
					<Button
						style={styles.primaryButton}
						variant='primary'
						onPress={navigateToGetNewOutpass}
					>
						Get new outpass
					</Button>
					<Button
						variant='secondary'
						onPress={navigateToFeedback}
					>
						Send feedback
					</Button>
				</View>
			</View>
		</PageWrapper>
	)
}
