import { View, Text } from 'react-native'

import { useFetchUserOutpasses } from '@app/api/hooks/useFetchUserOutpass'
import { useFetchWardens } from '@app/api/hooks/useFetchWardens'
import CancelledIcon from '@app/assets/images/cancelled-icon.svg'
import { Button } from '@app/components/ui/button'
import { Loader } from '@app/components/ui/loader'
import { PageWrapper } from '@app/components/ui/page-wrapper'

import { styles } from './styles'

export const OutpassCancelled = ({ navigation, route }) => {
	const { data: wardensList, isLoading } = useFetchWardens()
	const { data: outpassList } = useFetchUserOutpasses()
	const uuid = route.params?.uuid

	const outpass = outpassList.find((item) => item.uuid === uuid)
	const warden = wardensList.find((item) => item.uuid === outpass?.rejection.warden1)

	const navigateToHome = () => {
		navigation.navigate('student-home')
	}

	return (
		<PageWrapper>
			{isLoading ? (
				<Loader />
			) : (
				<View style={styles.pageContainer}>
					<View>{/* Required for verticle center */}</View>
					<View style={styles.contentContainer}>
						<CancelledIcon />
						<Text style={styles.subHeading}>
							Your ourpass has been rejected by {`${warden?.firstName} ${warden?.lastName}`} for the
							following reason
						</Text>
						<View style={styles.messageWrapper}>
							<Text style={styles.messageHeading}>Message</Text>
							<Text>{outpass?.wardenMessage}</Text>
						</View>
					</View>

					<Button
						variant='secondary'
						onPress={navigateToHome}
					>
						Back
					</Button>
				</View>
			)}
		</PageWrapper>
	)
}
