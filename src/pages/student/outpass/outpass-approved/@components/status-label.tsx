import { View, Text, StyleSheet } from 'react-native'
import ExitedCampusIcon from '@app/assets/icons/exited-campus.svg'
import InCampusIcon from '@app/assets/icons/in-campus.svg'
import ReturnedCampusIcon from '@app/assets/icons/returned-campus.svg'

import { GLOBAL_STYLES } from '@app/constants/styles'

const iconProps = {
	height: 25,
	width: 25,
	style: { marginRight: 7 },
}

const style = StyleSheet.create({
	labelWrapper: {
		backgroundColor: GLOBAL_STYLES.COLOR.PRIMARY,
		display: 'flex',
		flexDirection: 'row',
		borderRadius: 100,
		minWidth: 120,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	statusText: { color: '#fff', fontWeight: '500' },
})

interface statusLabelProps {
	status: 'exitedCampus' | 'inCampus' | 'returnedCampus'
}

export const StatusLabel = ({ status }: statusLabelProps) => {
	return (
		<View style={style.labelWrapper}>
			{status === 'exitedCampus' ? (
				<>
					<ExitedCampusIcon {...iconProps} />
					<Text style={style.statusText}>Exited campus</Text>
				</>
			) : status === 'inCampus' ? (
				<>
					<InCampusIcon {...iconProps} />
					<Text style={style.statusText}>In campus</Text>
				</>
			) : status === 'returnedCampus' ? (
				<>
					<ReturnedCampusIcon {...iconProps} />
					<Text style={style.statusText}>Returned to campus</Text>
				</>
			) : null}
		</View>
	)
}
