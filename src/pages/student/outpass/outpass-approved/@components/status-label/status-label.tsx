import { View, Text } from 'react-native'

import ExitedCampusIcon from '@app/assets/icons/exited-campus.svg'
import InCampusIcon from '@app/assets/icons/in-campus.svg'
import ReturnedCampusIcon from '@app/assets/icons/returned-campus.svg'

import { styles, iconProps } from './styles'

//  TODO: see if this can be turned into an enum

interface statusLabelProps {
	status: 'exitedCampus' | 'inCampus' | 'returnedCampus'
}

export const StatusLabel = ({ status }: statusLabelProps) => {
	return (
		<View style={styles.labelWrapper}>
			{status === 'exitedCampus' ? (
				<>
					<ExitedCampusIcon {...iconProps} />
					<Text style={styles.statusText}>Exited campus</Text>
				</>
			) : status === 'inCampus' ? (
				<>
					<InCampusIcon {...iconProps} />
					<Text style={styles.statusText}>In campus</Text>
				</>
			) : status === 'returnedCampus' ? (
				<>
					<ReturnedCampusIcon {...iconProps} />
					<Text style={styles.statusText}>Returned to campus</Text>
				</>
			) : null}
		</View>
	)
}
