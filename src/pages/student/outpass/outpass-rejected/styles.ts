import { StyleSheet } from 'react-native'

import { TOKEN } from '@app/constants/styles'

export const styles = StyleSheet.create({
	pageContainer: {
		flex: 1,
		justifyContent: 'space-between',
	},
	contentContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	iconContainer: {},
	subHeading: {
		textAlign: 'center',
		maxWidth: 250,
		marginTop: 40,
		marginBottom: 20,
	},
	messageHeading: {
		marginBottom: 10,
		fontWeight: '700',
		color: TOKEN.COLOR.RED,
	},
	messageWrapper: {
		padding: 20,
		backgroundColor: '#FAE3E3',
		borderRadius: 15,
		width: '83%',
	},
})
