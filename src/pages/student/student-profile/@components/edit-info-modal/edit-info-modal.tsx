import { useGlobalModal } from '@app/components/hooks/global-modal'
import { Button } from '@app/components/ui/button'
import { BottomSheetTextInput } from '@gorhom/bottom-sheet'
import { View, StyleSheet } from 'react-native'

export const EditInfoModal = () => {
	const { closeModal, payload } = useGlobalModal()

	console.log('payload', payload)

	return (
		<View>
			<BottomSheetTextInput
				value='Awesome 🎉'
				style={styles.textInput}
			/>
			<Button
				variant='primary'
				onTouchEnd={closeModal}
			>
				Close modal
			</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	textInput: {
		alignSelf: 'stretch',
		marginHorizontal: 12,
		marginBottom: 12,
		padding: 12,
		borderRadius: 12,
		backgroundColor: 'grey',
		color: 'white',
		textAlign: 'center',
	},
})
