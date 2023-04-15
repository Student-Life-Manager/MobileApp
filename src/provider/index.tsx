import { NavigationContainer } from '@react-navigation/native'
import { Suspense } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { TamaguiProvider } from 'tamagui'

import { GlobalModalProvider } from '@app/components/hooks/global-modal'

import config from '../tamagui.config'

export const Provider = ({ children }) => {
	return (
		<TamaguiProvider config={config}>
			<Suspense>
				<SafeAreaProvider>
					<GlobalModalProvider>
						<NavigationContainer>{children}</NavigationContainer>
					</GlobalModalProvider>
				</SafeAreaProvider>
			</Suspense>
		</TamaguiProvider>
	)
}
