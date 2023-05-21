import { ActivityIndicator } from 'react-native'

import { useAuthentication } from '@app/components/hooks/authentication'

import AppStack from './app-stack'
import AuthStack from './auth-stack'

export const NativeNavigator = () => {
	const { isAuthenticated, isLoading, userData } = useAuthentication()

	// AsyncStorage.clear()
	// console.log('AUTH_PROVIDER----- ', isAuthenticated, userData, isLoading)

	if (isLoading || !userData) {
		return <AuthStack initialRoute='loader-page' />
	} else if (!isAuthenticated && !isLoading) {
		return <AuthStack initialRoute='login' />
	} else if (isAuthenticated && userData?.accountType === 'student') {
		return <AppStack initialRoute='student-home' />
	} else if (isAuthenticated && userData?.accountType === 'warden') {
		return <AppStack initialRoute='warden-home' />
	} else {
		return <AuthStack initialRoute='loader-page' />
	}
}
