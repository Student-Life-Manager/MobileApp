import { NavigationContainer } from '@react-navigation/native'
import { Suspense } from 'react'
import { TamaguiProvider } from 'tamagui'

import config from '../tamagui.config'
import { GlobalModalProvider } from '@app/components/hooks/global-modal'
import { SafeAreaProvider } from 'react-native-safe-area-context'

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
