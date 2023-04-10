import { View, Text, StyleSheet } from 'react-native'
import { studentOutpassListItem } from '@app/@types'
import ChevronRight from '@app/assets/icons/chevron-right.svg'
import StatusPending from '@app/assets/icons/status-pending.svg'
import StatusApproved from '@app/assets/icons/status-approved.svg'
import StatusRejected from '@app/assets/icons/status-rejected.svg'
import { Status } from '@app/constants/enums'
import { GLOBAL_STYLES } from '@app/constants/styles'

interface ListItemProps extends studentOutpassListItem {}

const renderStatusIcon = (status: Status) => {
	switch (status) {
		case Status.PENDING:
			return <StatusPending {...iconStyle} />
		case Status.APPROVED:
			return <StatusApproved {...iconStyle} />
		case Status.REJECTED:
			return <StatusRejected {...iconStyle} />
	}
}

export const ListItem = (props: ListItemProps) => {
	const { date, outTime, outpassId, status } = props
	return (
		<View style={styles.itemContainer}>
			<View style={styles.itemWrapper}>
				<Text style={styles.dateText}>Today</Text>
				<Text style={styles.timeText}>{outTime}</Text>
			</View>
			<View style={styles.itemWrapper}>
				<View style={styles.statusWrapper}>
					{renderStatusIcon(status)}
					<Text style={styles.statusText}>Waiting</Text>
				</View>
				<ChevronRight />
			</View>
		</View>
	)
}

const iconStyle = {
	height: 16,
	width: 16,
	style: { marginRight: 4 },
}

const styles = StyleSheet.create({
	itemContainer: {
		width: '100%',
		backgroundColor: '#fff',
		display: 'flex',
		marginVertical: 10,
		padding: 15,
		shadowColor: GLOBAL_STYLES.COLOR.SHADOW,
		shadowOffset: { width: 2, height: 1 },
		shadowOpacity: 0.25,
		borderRadius: 12,
	},
	itemWrapper: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 10,
	},
	dateText: {
		fontSize: 16,
		marginBottom: 8,
	},
	statusWrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	statusText: {
		fontSize: 14,
		color: GLOBAL_STYLES.COLOR.LIGHT_TEXT,
	},
	timeText: {
		fontSize: 12,
		color: GLOBAL_STYLES.COLOR.DARK_TEXT,
	},
})
