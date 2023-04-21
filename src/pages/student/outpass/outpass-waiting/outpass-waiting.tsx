import { View, Text } from 'react-native'

import WaitingIcon from '@app/assets/images/waiting-icon.svg'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'

import { styles } from './styles'

export const OutpassPending = ({ navigation }) => {
	const navigateToHome = () => {
		navigation.navigate('student-home')
	}

	return (
		<PageWrapper>
			<View style={styles.pageContainer}>
				<View>{/* Required for verticle center */}</View>
				<View style={styles.contentContainer}>
					<WaitingIcon />
					<Text style={styles.messageText}>
						Your outpass request has been sent to your warden, please wait for 1-2 hours to get
						approval. Meanwhile, contact your tower’s warden in-person to receive instant feedback.
					</Text>
				</View>
				<Button
					variant='secondary'
					onPress={navigateToHome}
				>
					Back
				</Button>
			</View>
		</PageWrapper>
	)
}
