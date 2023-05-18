import Lottie from 'lottie-react-native'
import { Text, View } from 'react-native'

import BlueLoader from '@app/assets/lottie/loading-blue.json'

import { styles } from './styles'

export const Loader = () => {
	return (
		<View style={styles.container}>
			<Lottie
				source={BlueLoader}
				autoPlay={true}
				style={styles.lottieAnimation}
			/>
			<Text>Loading...</Text>
		</View>
	)
}
