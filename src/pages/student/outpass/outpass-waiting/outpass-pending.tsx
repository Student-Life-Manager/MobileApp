import { useEffect } from 'react'
import { View, Text, Alert } from 'react-native'

import { useDeleteOutpass } from '@app/api/hooks/useDeleteOutpass'
import { useFetchUserOutpasses } from '@app/api/hooks/useFetchUserOutpass'
import WaitingIcon from '@app/assets/images/waiting-icon.svg'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'

import { styles } from './styles'

export const OutpassPending = ({ navigation, route }) => {
	const { cancelOutpass, isLoading, isSuccess } = useDeleteOutpass()
	const { data: outpassList, refetch } = useFetchUserOutpasses()
	const uuid = route.params?.uuid
	const outpass = outpassList.find((item) => item.uuid === uuid)
	const {} = useFetchUserOutpasses()

	useEffect(() => {
		if (isSuccess) {
			refetch()
			navigateToHome()
		}
	}, [isSuccess])

	const handleCancelOutpass = () => {
		Alert.alert('Cancel outpass', 'Are you sure you want to cancel this outpass', [
			{
				text: 'No',
			},
			{
				text: 'Yes',
				onPress: () => {
					outpass?.uuid && cancelOutpass(outpass?.uuid)
				},
			},
		])
	}

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
				<View>
					<Button
						variant='secondary'
						isLoading={isLoading}
						style={styles.cancelButton}
						onPress={handleCancelOutpass}
					>
						Cancel outpass
					</Button>
					<Button
						variant='secondary'
						onPress={navigateToHome}
					>
						Back
					</Button>
				</View>
			</View>
		</PageWrapper>
	)
}
