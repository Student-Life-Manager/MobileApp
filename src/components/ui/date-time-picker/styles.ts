import { StyleSheet } from 'react-native'

import { TOKEN } from '@app/constants/styles'

export const styles = StyleSheet.create({
	inputWrapper: {
		backgroundColor: '#fff',
		borderColor: TOKEN.COLOR.BORDER_COLOR,
		borderWidth: 1,
		paddingHorizontal: 15,
		paddingVertical: 14,
		borderRadius: 10,
		minHeight: 50,
	},
	inputText: {
		fontSize: 16,
		fontWeight: '500',
	},
})
