import { StyleSheet } from 'react-native'

import { TOKEN } from '@app/constants/styles'

export const styles = StyleSheet.create({
	container: {
		marginTop: 15,
	},
	searchInput: {
		borderWidth: 0,
	},
	sliderContainer: {
		marginVertical: 10,
		paddingVertical: 10,
	},
	itemSeperator: {
		width: 16,
	},
	sliderItem: {
		backgroundColor: '#fff',
		width: 100,
		display: 'flex',
		alignItems: 'center',
		paddingVertical: 12,
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
	labelText: {
		color: TOKEN.COLOR.LIGHT_TEXT,
		fontWeight: '600',
	},
	selectedText: {
		color: '#fff',
	},
})
