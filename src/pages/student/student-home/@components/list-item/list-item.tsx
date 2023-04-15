import { View, Text } from 'react-native'
import { studentOutpassListItem } from '@app/@types'
import ChevronRight from '@app/assets/icons/chevron-right.svg'
import StatusPending from '@app/assets/icons/status-pending.svg'
import StatusApproved from '@app/assets/icons/status-approved.svg'
import StatusRejected from '@app/assets/icons/status-rejected.svg'
import { OutpassStatus } from '@app/constants/enums'
import { styles, iconStyle } from './styles'

interface ListItemProps extends studentOutpassListItem {}

const renderStatusIcon = (status: OutpassStatus) => {
	switch (status) {
		case OutpassStatus.Pending:
			return <StatusPending {...iconStyle} />
		case OutpassStatus.Approved:
			return <StatusApproved {...iconStyle} />
		case OutpassStatus.Rejected:
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
