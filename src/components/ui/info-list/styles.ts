import { StyleSheet } from 'react-native'
import { SvgProps } from 'react-native-svg'

import { TOKEN } from '@app/constants/styles'

export const styles = StyleSheet.create({
	infoListContainer: {
		marginVertical: 20,
		backgroundColor: 'white',
		shadowColor: '#DBCFE7',
		shadowOffset: { width: 2, height: 1 },
		shadowOpacity: 0.25,
		borderRadius: 16,
		paddingHorizontal: 20,
		paddingBottom: 16,
	},
	headingContainer: {
		marginVertical: 4,
	},
	headingWrapper: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 50,
	},
	headingText: {
		fontSize: 18,
		fontWeight: '600',
	},
	line: {
		borderBottomWidth: 1,
		borderBottomColor: TOKEN.COLOR.HORIZONTAL_LINE,
	},
	listContainer: {
		display: 'flex',
		alignItems: 'center',
		marginVertical: 12,
	},
	listContainerIconLeft: {
		flexDirection: 'row',
	},
	listContainerIconRight: {
		flexDirection: 'row-reverse',
		justifyContent: 'space-between',
	},
	listItemHeadingWrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 4,
	},
	listItemHeading: {
		fontSize: 16,
	},
	listItemText: {
		fontSize: 16,
		color: '#9A9A9A',
	},
	emptyStateContainer: {
		minHeight: 120,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	emptyStateText: {
		fontSize: 16,
		color: '#9A9A9A',
		maxWidth: '80%',
		textAlign: 'center',
		lineHeight: 24,
	},
})

export const listIconStyles: SvgProps = {
	height: 28,
	width: 28,
}

export const headerIconStyles: SvgProps = {
	height: 24,
	width: 24,
}

export const adornmentIconStyles: SvgProps = {
	height: 14,
	width: 14,
	style: { marginLeft: 8 },
}
