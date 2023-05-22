import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	pageContainer: {
		flex: 1,
		display: 'flex',
		justifyContent: 'space-between',
		// backgroundColor: 'lightblue',
	},
	topContainer: {
		backgroundColor: 'lightcoral',
	},
	headerContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 16,
	},
	primaryButton: {
		marginBottom: 12,
		marginTop: 60,
	},
})
