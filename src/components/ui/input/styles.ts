import { StyleSheet } from 'react-native'

import { TOKEN } from '@app/constants/styles'

export const styles = StyleSheet.create({
	inputWrapper: {
		borderColor: TOKEN.COLOR.BORDER_COLOR,
		borderWidth: 1,
		borderRadius: 10,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 12,
		backgroundColor: '#fff',
	},
	inputAdornment: {
		marginLeft: 12,
		fontSize: 16,
	},
	eraseMod: {
		paddingRight: 0,
	},
	inputBox: {
		flex: 1,
		paddingVertical: 14,
	},
	eraseButtonWrapper: {
		height: '100%',
		width: 45,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
