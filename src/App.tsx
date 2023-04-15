import 'expo-dev-client'

import { useFonts } from 'expo-font'

import { NativeNavigator } from './navigator'
import { Provider } from './provider'

const App = () => {
	const [loaded] = useFonts({
		Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
		InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
	})

	if (!loaded) {
		return null
	}

	return (
		<Provider>
			<NativeNavigator />
		</Provider>
	)
}

export default App
