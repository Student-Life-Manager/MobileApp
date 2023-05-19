import { format } from 'date-fns'
import { View, Text, TouchableOpacity } from 'react-native'

import ChevronRight from '@app/assets/icons/chevron-right.svg'
import StatusApproved from '@app/assets/icons/status-approved.svg'
import StatusPending from '@app/assets/icons/status-pending.svg'
import StatusRejected from '@app/assets/icons/status-rejected.svg'
import { OutpassStatus } from '@app/constants/enums'

import { styles, iconStyle } from './styles'

interface ListItemProps {
	date: string
	time: string
	uuid: string
	status: OutpassStatus
	onPress: () => void
}

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

const renderStatusText = (status: OutpassStatus) => {
	switch (status) {
		case OutpassStatus.Pending:
			return 'Pending'
		case OutpassStatus.Approved:
			return 'Approved'
		case OutpassStatus.Rejected:
			return 'Rejected'
	}
}

export const ListItem = (props: ListItemProps) => {
	const { date, time, status, onPress } = props

	return (
		<TouchableOpacity
			style={styles.itemContainer}
			onPress={onPress}
		>
			<View style={styles.itemWrapper}>
				<Text style={styles.dateText}>{format(new Date(date), 'dd-LL-yyyy')}</Text>
				<Text style={styles.timeText}>{format(new Date(time), 'hh:mm a')}</Text>
			</View>
			<View style={styles.itemWrapper}>
				<View style={styles.statusWrapper}>
					{renderStatusIcon(status)}
					<Text style={styles.statusText}>{renderStatusText(status)}</Text>
				</View>
				<ChevronRight />
			</View>
		</TouchableOpacity>
	)
}
