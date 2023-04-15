import { TOKEN } from '@app/constants/styles'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		marginVertical: 30,
		alignItems: 'center',
	},
	resendAllowed: {
		color: TOKEN.COLOR.PRIMARY,
		borderBottomColor: TOKEN.COLOR.PRIMARY,
		textDecorationLine: 'underline',
	},
	resendNotAllowed: {
		textDecorationLine: 'underline',
	},
	wrongCode: {
		color: TOKEN.COLOR.RED,
	},
	newCodeSent: {
		color: TOKEN.COLOR.PRIMARY,
	},
	infoText: {
		color: TOKEN.COLOR.DARK_TEXT,
		lineHeight: 24,
		marginTop: 0,
		marginBottom: 20,
	},
})
