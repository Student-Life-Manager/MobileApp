import { StyleSheet } from 'react-native'

import { TOKEN } from '@app/constants/styles'

export const styles = StyleSheet.create({
	sliderContainer: {
		marginVertical: 20,
		paddingVertical: 10,
	},
	itemSeperator: {
		width: 16,
	},
	sliderItem: {
		backgroundColor: '#fff',
		width: 65,
		display: 'flex',
		alignItems: 'center',
		paddingVertical: 20,
		borderRadius: 1000,
		shadowColor: '#aeaeaea4',
		shadowOpacity: 0.1,
		shadowOffset: {
			height: 5,
			width: 0,
		},
	},
	sliderItemSelected: {
		backgroundColor: TOKEN.COLOR.PRIMARY,
		shadowColor: '#313FDD',
		shadowOpacity: 0.2,
		shadowOffset: {
			height: 5,
			width: 3,
		},
	},
	dateText: {
		fontSize: 20,
		fontWeight: '600',
		marginBottom: 4,
	},
	dayText: {
		color: TOKEN.COLOR.LIGHT_TEXT,
		fontWeight: '600',
	},
	selectedText: {
		color: '#fff',
	},
})
