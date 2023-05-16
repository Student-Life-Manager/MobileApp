import { useAuthentication } from '@app/components/hooks/authentication'

import AppStack from './app-stack'
import AuthStack from './auth-stack'

export const NativeNavigator = () => {
	const { isAuthenticated } = useAuthentication()

	if (isAuthenticated) return <AppStack />
	else return <AuthStack />
}
