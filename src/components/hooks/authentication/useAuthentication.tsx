import { useContext } from 'react'

import { AuthContext } from './auth-provider'

export const useAuthentication = () => {
	const context = useContext(AuthContext)
	if (context === undefined) {
		throw new Error('useAuth must be used within a AuthProvider')
	}
	return context
}
