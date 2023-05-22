import { View, TouchableOpacity } from 'react-native'
import { H3 } from 'tamagui'

import { useFetchUser } from '@app/api/hooks/useFetchUser'
import { useFetchUserOutpasses } from '@app/api/hooks/useFetchUserOutpass'
import ProfileIcon from '@app/assets/images/profile-icon.svg'
import WardenPage from '@app/assets/images/warden-page.svg'
import { Button } from '@app/components/ui/button'
import { Loader } from '@app/components/ui/loader'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { OutpassStatus } from '@app/constants/enums'

import { ListItem } from './@components/list-item'
import { styles } from './styles'

export const StudentHome = ({ navigation }) => {
	const { data: userData, isLoading: isUserLoading } = useFetchUser()
	const { data: outpassList, isLoading: isUserOutpassLoading } = useFetchUserOutpasses()

	const navigateToProfile = () => {
		navigation.navigate('student-profile')
	}

	const navigateToGetNewOutpass = () => {
		navigation.navigate('outpass-details')
	}

	const navigateToOutpassPage = (uuid: string) => {
		const clicked = outpassList.find((item) => item.uuid === uuid)

		if (clicked?.status === OutpassStatus.Pending) {
			navigation.navigate('outpass-waiting', { uuid: uuid })
		} else if (
			clicked?.status === OutpassStatus.Approved ||
			clicked?.status === OutpassStatus.Exited ||
			clicked?.status === OutpassStatus.Returned
		) {
			navigation.navigate('outpass', { uuid: uuid })
		} else if (clicked?.status === OutpassStatus.Rejected) {
			navigation.navigate('outpass-cancelled', { uuid: uuid })
		}
	}

	return (
		<PageWrapper>
			{isUserLoading || isUserOutpassLoading ? (
				<Loader />
			) : (
				<View style={styles.pageContainer}>
					<View>
						<View style={styles.headerContainer}>
							<H3>
								Welcome, {'\n'}
								{`${userData?.firstName} ${userData?.lastName}`}
							</H3>
							<TouchableOpacity onPress={navigateToProfile}>
								<ProfileIcon />
							</TouchableOpacity>
						</View>
						{outpassList.length > 0 ? (
							outpassList.map((item) => {
								return (
									<ListItem
										date={item.outDate}
										time={item.createdAt}
										uuid={item.uuid}
										status={item.status}
										key={item.uuid}
										onPress={() => {
											navigateToOutpassPage(item.uuid)
										}}
									/>
								)
							})
						) : (
							<WardenPage />
						)}
					</View>
					<View>
						<Button
							style={styles.primaryButton}
							variant='primary'
							onPress={navigateToGetNewOutpass}
						>
							Get new outpass
						</Button>
						{/* <Button
						variant='secondary'
						onPress={navigateToFeedback}
					>
						Send feedback
					</Button> */}
					</View>
				</View>
			)}
		</PageWrapper>
	)
}
