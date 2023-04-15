import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	studentName: {
		fontSize: 20,
		marginBottom: 8,
	},
	rollNumber: {
		fontSize: 16,
	},
	editIconWrapper: {
		height: 40,
		width: 40,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerIconWrapper: {
		height: 50,
		width: 40,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	deleteIconWrapper: {
		height: 50,
		width: 50,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		transform: [{ scale: 0.9 }],
	},
})
