import { StyleSheet } from 'react-native'

export const TOKEN = {
	COLOR: {
		PRIMARY: '#313FDD',
		SECONDARY: '#E6EBFF',
		ACCENT: '#F7F9FF',
		PRIMARY_DARK: '#000FB8',
		RED: '#E65252',
		GREEN: '#0BBB71',
		BORDER_COLOR: '#e0e0e0',
		DARK_TEXT: '#5B5B5B',
		LIGHT_TEXT: '#9A9A9A',
		SHADOW: '#DBCFE7',
		HORIZONTAL_LINE: '#efefef',
	},
}

export const globalStyles = StyleSheet.create({
	errorText: {
		color: TOKEN.COLOR.RED,
		marginTop: 4,
	},
})
