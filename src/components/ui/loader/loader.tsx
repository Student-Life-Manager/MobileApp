import Lottie from 'lottie-react-native'
import { Text, View } from 'react-native'

import BlueLoader from '@app/assets/lottie/loading-blue.json'

import { styles } from './styles'

interface LoaderProps {
	displayText?: boolean
	height?: number
}

export const Loader = (props: LoaderProps) => {
	const { displayText = true, height } = props
	return (
		<View style={[styles.container, height ? { height } : null]}>
			<Lottie
				source={BlueLoader}
				autoPlay={true}
				style={styles.lottieAnimation}
			/>
			{displayText ? <Text>Loading...</Text> : null}
		</View>
	)
}
