import { View, Text } from 'react-native'

import { studentOutpassListItem } from '@app/@types'
import ChevronRight from '@app/assets/icons/chevron-right.svg'
import StatusApproved from '@app/assets/icons/status-approved.svg'
import StatusPending from '@app/assets/icons/status-pending.svg'
import StatusRejected from '@app/assets/icons/status-rejected.svg'
import { OutpassStatus } from '@app/constants/enums'

import { styles, iconStyle } from './styles'

interface ListItemProps extends studentOutpassListItem {
	navigation: any
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

export const ListItem = (props: ListItemProps) => {
	const { date, outTime, outpassId, status, navigation } = props

	const navigateToOutpass = () => {
		if (outTime === '12:30 PM') navigation.navigate('outpass-waiting')
		else if (outTime === '8:20 AM') navigation.navigate('outpass')
		else if (outTime === '2:00 PM') navigation.navigate('outpass-cancelled')
	}

	return (
		<View
			style={styles.itemContainer}
			onTouchEnd={navigateToOutpass}
		>
			<View style={styles.itemWrapper}>
				<Text style={styles.dateText}>Today</Text>
				<Text style={styles.timeText}>{outTime}</Text>
			</View>
			<View style={styles.itemWrapper}>
				<View style={styles.statusWrapper}>
					{renderStatusIcon(status)}
					<Text style={styles.statusText}>{status}</Text>
				</View>
				<ChevronRight />
			</View>
		</View>
	)
}
