import 'expo-dev-client'

import { useFonts } from 'expo-font'

import { Provider } from './provider'

const App = () => {
	const [loaded] = useFonts({
		Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
		InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
	})

	if (!loaded) {
		return null
	}

	return <Provider />
}

export default App
