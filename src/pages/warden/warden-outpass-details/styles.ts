import { StyleSheet } from 'react-native'

import { TOKEN } from '@app/constants/styles'

export const styles = StyleSheet.create({
	callGuardianButton: {
		backgroundColor: TOKEN.COLOR.SECONDARY,
		borderColor: TOKEN.COLOR.PRIMARY,
		borderWidth: 1,
		borderRadius: 8,
		paddingVertical: 4,
		paddingHorizontal: 8,
	},
	approveButton: {
		marginVertical: 16,
	},
})
