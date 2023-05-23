import { StyleSheet } from 'react-native'

import { TOKEN } from '@app/constants/styles'

export const styles = StyleSheet.create({
	pageContainer: {
		flex: 1,
		justifyContent: 'space-between',
	},
	cameraOverlay: {
		height: '100%',
		width: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	cameraQRBorder: {
		height: '65%',
		width: '65%',
		borderColor: TOKEN.COLOR.PRIMARY,
		borderWidth: 4,
		borderStyle: 'dashed',
		borderRadius: 20,
	},
	cameraComponent: {
		height: 400,
	},
	infoContainer: {
		marginTop: 40,
		display: 'flex',
		alignItems: 'center',
	},
	approvalStatusTag: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 100,
	},
	approvalStatusTagBlue: {
		backgroundColor: TOKEN.COLOR.PRIMARY,
	},
	approvalStatusTagGreen: {
		backgroundColor: TOKEN.COLOR.GREEN,
	},
	approvalStatusTagRed: {
		backgroundColor: TOKEN.COLOR.RED,
	},
	statusText: { color: '#fff', fontWeight: '600', textAlign: 'center' },
	messageWrapper: {
		marginTop: 20,
		borderColor: TOKEN.COLOR.BORDER_COLOR,
		borderWidth: 1,
		borderRadius: 10,
		paddingVertical: 12,
		paddingHorizontal: 20,
	},
	messageText: {
		color: TOKEN.COLOR.DARK_TEXT,
	},
	buttonContainer: {
		paddingHorizontal: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	button: {
		width: '48%',
		paddingHorizontal: 20,
	},
})
