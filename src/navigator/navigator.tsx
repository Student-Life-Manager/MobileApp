import { useAuthentication } from '@app/components/hooks/authentication'
import { UserType } from '@app/types/user'

import AppStack from './app-stack'
import AuthStack from './auth-stack'

export const NativeNavigator = () => {
	const { isAuthenticated, isLoading, userData } = useAuthentication()

	// AsyncStorage.clear()
	// console.log('AUTH_PROVIDER----- ', isAuthenticated, userData?.accountType, isLoading)

	if (isLoading && !userData) {
		return <AuthStack initialRoute='loader-page' />
	} else if (!isAuthenticated && !isLoading) {
		return <AuthStack initialRoute='login' />
	} else if (isAuthenticated && userData?.accountType === UserType.Student) {
		return <AppStack initialRoute='student-home' />
	} else if (isAuthenticated && userData?.accountType === UserType.Guard) {
		return <AppStack initialRoute='scan-qr-code' />
	} else if (isAuthenticated && userData?.accountType === UserType.Warden) {
		return <AppStack initialRoute='warden-home' />
	} else {
		return <AuthStack initialRoute='loader-page' />
	}
}
