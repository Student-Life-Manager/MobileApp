import { NavigationContainer } from '@react-navigation/native'
import { Suspense } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClientProvider, QueryClient } from 'react-query'
import { TamaguiProvider } from 'tamagui'

import { AuthProvider } from '@app/components/hooks/authentication'
import { GlobalModalProvider } from '@app/components/hooks/global-modal'
import { NativeNavigator } from '@app/navigator'

import config from '../tamagui.config'

const queryClient = new QueryClient()

export const Provider = () => {
	return (
		<TamaguiProvider config={config}>
			<Suspense>
				<QueryClientProvider client={queryClient}>
					<SafeAreaProvider>
						<AuthProvider>
							<GlobalModalProvider>
								<NavigationContainer>
									<NativeNavigator />
								</NavigationContainer>
							</GlobalModalProvider>
						</AuthProvider>
					</SafeAreaProvider>
				</QueryClientProvider>
			</Suspense>
		</TamaguiProvider>
	)
}
