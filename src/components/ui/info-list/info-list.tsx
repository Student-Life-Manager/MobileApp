import { View, Text, ViewStyle } from 'react-native'
import { SvgProps } from 'react-native-svg'
import { styles, listIconStyles, adornmentIconStyles, headerIconStyles } from './styles'

export interface InfoListItemProps {
	title: string
	value: string
	icon?: React.ComponentType<SvgProps>
	isAdornmentVisible?: boolean
	isListIconVisible?: boolean
	onClick?: () => void
}

export interface InfoListProps {
	listData: InfoListItemProps[]
	listIconCommon?: React.ComponentType<SvgProps>
	listIconDirection: 'left' | 'right'
	listIconWrapperStyle?: ViewStyle
	heading?: string
	headerIcon?: React.ComponentType<SvgProps>
	headerIconWrapperStyle?: ViewStyle
	headerIconOnClick?: () => void
	itemAdornmentIcon?: React.ComponentType<SvgProps>
	emptyStateText?: string
}

const renderListIcon = (
	Icon: React.ComponentType<SvgProps>,
	iconDirection: 'left' | 'right',
	item: InfoListItemProps,
	listIconWrapperStyle?: ViewStyle,
) => {
	return (
		<View
			style={[
				iconDirection === 'left' ? { marginRight: 16 } : null,
				listIconWrapperStyle ? listIconWrapperStyle : null,
			]}
			onTouchEnd={() => {
				if (item.onClick && item.isListIconVisible) item.onClick()
			}}
		>
			{item.isListIconVisible ? <Icon {...listIconStyles} /> : null}
		</View>
	)
}

const renderHeaderIcon = (
	Icon: React.ComponentType<SvgProps>,
	onClick: () => void,
	headerIconWrapperStyle?: ViewStyle,
) => {
	return (
		<View style={headerIconWrapperStyle ? headerIconWrapperStyle : null}>
			<Icon
				{...headerIconStyles}
				onTouchEnd={onClick}
			/>
		</View>
	)
}

const renderAdornmentIcon = (Icon: React.ComponentType<SvgProps>) => (
	<Icon {...adornmentIconStyles} />
)

export const InfoList = (props: InfoListProps) => {
	const {
		listData,
		listIconCommon,
		listIconDirection,
		listIconWrapperStyle,
		heading,
		headerIcon,
		headerIconWrapperStyle,
		headerIconOnClick = () => 0,
		itemAdornmentIcon,
		emptyStateText,
	} = props

	return (
		<View style={styles.infoListContainer}>
			{heading ? (
				<View style={styles.headingContainer}>
					<View style={styles.headingWrapper}>
						<Text style={styles.headingText}>{heading}</Text>
						{headerIcon
							? renderHeaderIcon(headerIcon, headerIconOnClick, headerIconWrapperStyle)
							: null}
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
						{item.icon
							? renderListIcon(item.icon, listIconDirection, item, listIconWrapperStyle)
							: listIconCommon
							? renderListIcon(listIconCommon, listIconDirection, item, listIconWrapperStyle)
							: null}
						<View>
							<View style={[styles.listItemHeadingWrapper]}>
								<Text style={styles.listItemHeading}>{item.title}</Text>
								{item.isAdornmentVisible && itemAdornmentIcon
									? renderAdornmentIcon(itemAdornmentIcon)
									: null}
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
