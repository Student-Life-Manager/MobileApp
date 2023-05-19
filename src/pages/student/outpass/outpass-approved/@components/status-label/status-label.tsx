import { View, Text } from 'react-native'

import ExitedCampusIcon from '@app/assets/icons/exited-campus.svg'
import InCampusIcon from '@app/assets/icons/in-campus.svg'
import ReturnedCampusIcon from '@app/assets/icons/returned-campus.svg'
import { OutpassStatus } from '@app/constants/enums'

import { styles, iconProps } from './styles'

export const StatusLabel = ({ status }: { status: OutpassStatus }) => {
	if (status === undefined) status = OutpassStatus.Pending
	return (
		<View style={styles.labelWrapper}>
			{status === OutpassStatus.Exited ? (
				<>
					<ExitedCampusIcon {...iconProps} />
					<Text style={styles.statusText}>Exited campus</Text>
				</>
			) : status === OutpassStatus.Approved ? (
				<>
					<InCampusIcon {...iconProps} />
					<Text style={styles.statusText}>In campus</Text>
				</>
			) : status === OutpassStatus.Returned ? (
				<>
					<ReturnedCampusIcon {...iconProps} />
					<Text style={styles.statusText}>Returned to campus</Text>
				</>
			) : null}
		</View>
	)
}
