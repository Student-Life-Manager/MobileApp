import { TOKEN } from '@app/constants/styles'
import { StyleSheet } from 'react-native'
import { SvgProps } from 'react-native-svg'

export const iconProps: SvgProps = {
	height: 25,
	width: 25,
	style: { marginRight: 7 },
}

export const styles = StyleSheet.create({
	labelWrapper: {
		backgroundColor: TOKEN.COLOR.PRIMARY,
		display: 'flex',
		flexDirection: 'row',
		borderRadius: 100,
		minWidth: 120,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	statusText: { color: '#fff', fontWeight: '500' },
})
