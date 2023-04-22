import { View, Text } from 'react-native'
import { H3 } from 'tamagui'

import SubmitSuccess from '@app/assets/images/submit-success.svg'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'

import { styles } from './styles'

export const FeedbackSent = ({ navigation }) => {
	const navigateToHome = () => {
		navigation.navigate('student-home')
	}

	return (
		<PageWrapper bounces={false}>
			<View style={styles.pageContainer}>
				<View>{/* Required for verticle center */}</View>
				<View style={styles.checkContainer}>
					<View style={styles.iconContainer}>
						<SubmitSuccess />
					</View>
					<H3 textAlign='center'>Submitted Successfully</H3>
					<View style={styles.headingWrapper}>
						<Text style={styles.subHeading}>
							Thank you for submitting the feedback. We will look into it as soon as possible.
						</Text>
					</View>
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
