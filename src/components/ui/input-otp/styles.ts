import { TOKEN } from '@app/constants/styles'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		height: 60,
	},
	inputBox: {
		color: TOKEN.COLOR.DARK_TEXT,
		fontSize: 20,
		backgroundColor: '#fff',
		borderColor: TOKEN.COLOR.BORDER_COLOR,
		borderRadius: 8,
		height: 55,
	},
	inpuBoxFocused: {
		borderColor: TOKEN.COLOR.PRIMARY,
	},
})
