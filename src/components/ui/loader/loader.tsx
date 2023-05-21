import Lottie from 'lottie-react-native'
import { Text, View } from 'react-native'

import BlueLoader from '@app/assets/lottie/loading-blue.json'

import { styles } from './styles'

interface LoaderProps {
	displayText?: boolean
}

export const Loader = (props: LoaderProps) => {
	const { displayText = true } = props
	return (
		<View style={styles.container}>
			<Lottie
				source={BlueLoader}
				autoPlay={true}
				style={styles.lottieAnimation}
			/>
			{displayText ? <Text>Loading...</Text> : null}
		</View>
	)
}
