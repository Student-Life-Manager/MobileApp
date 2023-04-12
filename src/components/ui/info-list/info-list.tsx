import { GLOBAL_STYLES } from '@app/constants/styles'
import { View, Text, StyleSheet } from 'react-native'
import { SvgProps } from 'react-native-svg'

export interface InfoListItemProps {
	title: string
	value: string
	icon?: React.ComponentType<SvgProps>
	adornmentVisible?: boolean
}
export interface InfoListProps {
	listData: InfoListItemProps[]
	listIconCommon?: React.ComponentType<SvgProps>
	listIconDirection?: 'left' | 'right'
	listIconOnClick?: () => void
	heading?: string
	headerIcon?: React.ComponentType<SvgProps>
	headerIconOnClick?: () => void
	itemAdornment?: React.ComponentType<SvgProps>
	emptyStateText?: string
}

const renderListIcon = (
	Icon: React.ComponentType<SvgProps>,
	onClick: () => void,
	iconDirection,
) => (
	<Icon
		{...listIconStyles}
		style={iconDirection === 'left' ? { marginRight: 16 } : null}
		onTouchStart={onClick}
	/>
)
const renderHeaderIcon = (Icon: React.ComponentType<SvgProps>, onClick: () => void) => (
	<Icon
		{...headerIconStyles}
		onTouchStart={onClick}
	/>
)
const renderAdornmentIcon = (Icon: React.ComponentType<SvgProps>) => (
	<Icon {...adornmentIconStyles} />
)

export const InfoList = (props: InfoListProps) => {
	const {
		listData,
		listIconCommon,
		listIconDirection,
		listIconOnClick = () => 0,
		heading,
		headerIcon,
		headerIconOnClick = () => 0,
		itemAdornment,
		emptyStateText,
	} = props

	return (
		<View style={styles.infoListContainer}>
			{heading ? (
				<View style={styles.headingContainer}>
					<View style={styles.headingWrapper}>
						<Text style={styles.headingText}>{heading}</Text>
						{headerIcon ? renderHeaderIcon(headerIcon, headerIconOnClick) : null}
					</View>
					<View style={styles.line}></View>
				</View>
			) : null}
			{listData.length > 0 ? (
				listData.map((item) => (
					<View
						key={item.title}
						style={[
							styles.listContainer,
							listIconDirection === 'left'
								? styles.listContainerIconLeft
								: styles.listContainerIconRight,
						]}
					>
						{listIconCommon
							? renderListIcon(listIconCommon, listIconOnClick, listIconDirection)
							: item.icon
							? renderListIcon(item.icon, listIconOnClick, listIconDirection)
							: null}
						<View>
							<View style={[styles.listItemHeadingWrapper]}>
								<Text style={styles.listItemHeading}>{item.title}</Text>
								{item.adornmentVisible && itemAdornment ? renderAdornmentIcon(itemAdornment) : null}
							</View>
							<Text style={styles.listItemText}>{item.value}</Text>
						</View>
					</View>
				))
			) : (
				<View style={styles.emptyStateContainer}>
					<Text style={styles.emptyStateText}>{emptyStateText ? emptyStateText : 'No data'}</Text>
				</View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	infoListContainer: {
		marginVertical: 20,
		backgroundColor: 'white',
		shadowColor: '#DBCFE7',
		shadowOffset: { width: 2, height: 1 },
		shadowOpacity: 0.25,
		borderRadius: 16,
		paddingHorizontal: 20,
		paddingVertical: 12,
	},
	headingContainer: {
		marginVertical: 4,
	},
	headingWrapper: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 12,
	},
	headingText: {
		fontSize: 18,
		fontWeight: '600',
	},
	line: {
		borderBottomWidth: 1,
		borderBottomColor: GLOBAL_STYLES.COLOR.HORIZONTAL_LINE,
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

const listIconStyles: SvgProps = {
	height: 28,
	width: 28,
}

const headerIconStyles: SvgProps = {
	height: 24,
	width: 24,
}

const adornmentIconStyles: SvgProps = {
	height: 14,
	width: 14,
	style: { marginLeft: 8 },
}
