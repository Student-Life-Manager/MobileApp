import AsyncStorage from '@react-native-async-storage/async-storage'
import { ActivityIndicator } from 'react-native'

import { useAuthentication } from '@app/components/hooks/authentication'

import AppStack from './app-stack'
import AuthStack from './auth-stack'

export const NativeNavigator = () => {
	const { isAuthenticated, isLoading } = useAuthentication()

	// AsyncStorage.clear()

	if (isLoading) return <ActivityIndicator />
	if (isAuthenticated) return <AppStack />
	else return <AuthStack />
}
