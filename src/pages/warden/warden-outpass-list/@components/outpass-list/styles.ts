import { StyleSheet } from 'react-native'

import { TOKEN } from '@app/constants/styles'

export const styles = StyleSheet.create({
	itemContainer: {
		width: '100%',
		backgroundColor: '#fff',
		display: 'flex',
		marginVertical: 10,
		padding: 15,
		shadowColor: TOKEN.COLOR.SHADOW,
		shadowOffset: { width: 2, height: 1 },
		shadowOpacity: 0.25,
		borderRadius: 12,
	},
	itemWrapper: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	dateText: {
		fontSize: 16,
		marginBottom: 8,
	},
	rollNumber: {
		fontSize: 14,
		color: TOKEN.COLOR.LIGHT_TEXT,
	},
	timeText: {
		fontSize: 12,
		color: TOKEN.COLOR.DARK_TEXT,
	},
})
