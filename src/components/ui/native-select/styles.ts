import { StyleSheet } from 'react-native'

import { TOKEN } from '@app/constants/styles'

export const styles = StyleSheet.create({
	viewContainer: {
		height: 50,
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: '#fff',
		padding: 15,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: TOKEN.COLOR.BORDER_COLOR,
	},
	inputWrapper: {
		fontSize: 16,
		fontWeight: '500',
	},
})
