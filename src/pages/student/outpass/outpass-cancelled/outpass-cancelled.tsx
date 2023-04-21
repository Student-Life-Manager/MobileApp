import { View, Text } from 'react-native'

import CancelledIcon from '@app/assets/images/cancelled-icon.svg'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'

import { styles } from './styles'

export const OutpassCancelled = ({ navigation }) => {
	const navigateToHome = () => {
		navigation.navigate('outpass-details')
	}

	return (
		<PageWrapper>
			<View style={styles.pageContainer}>
				<View>{/* Required for verticle center */}</View>
				<View style={styles.contentContainer}>
					<CancelledIcon />
					<Text style={styles.subHeading}>
						Your ourpass has been rejected by Revathi for the following reason
					</Text>
					<View style={styles.messageWrapper}>
						<Text style={styles.messageHeading}>Message</Text>
						<Text>
							Your outpass has been rejected because as it is a weekday we can't allow you for an
							outing.
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
