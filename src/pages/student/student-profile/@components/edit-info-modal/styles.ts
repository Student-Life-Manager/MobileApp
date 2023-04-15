import { TOKEN } from '@app/constants/styles'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	heading: {
		marginBottom: 12,
	},
	textInput: {
		padding: 16,
		borderRadius: 10,
		borderColor: TOKEN.COLOR.BORDER_COLOR,
		borderWidth: 1,
		fontSize: 16,
	},
	buttonsContainer: {
		marginTop: 24,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
})
