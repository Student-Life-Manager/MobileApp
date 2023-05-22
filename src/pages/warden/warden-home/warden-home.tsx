import { TouchableOpacity, View } from 'react-native'
import { H3, YStack, Fieldset, XStack } from 'tamagui'

import ProfileIcon from '@app/assets/images/profile-icon.svg'
import WardenPage from '@app/assets/images/warden-page.svg'
import { useAuthentication } from '@app/components/hooks/authentication'
import { Button } from '@app/components/ui/button'
import { Loader } from '@app/components/ui/loader'
import { PageWrapper } from '@app/components/ui/page-wrapper'

import { styles } from './styles'

export const WardenHome = ({ navigation }) => {
	const { isLoading, userData } = useAuthentication()

	const navigateToProfile = () => {
		navigation.navigate('student-profile')
	}

	const navigateToOutpassList = () => {
		navigation.navigate('warden-outpass-list')
	}

	return (
		<PageWrapper bounces={false}>
			{isLoading ? (
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
						<WardenPage />
					</View>
					<View>
						<Button
							style={styles.primaryButton}
							variant='primary'
							onPress={navigateToOutpassList}
						>
							View outpasses
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
