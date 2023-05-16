import AsyncStorage from '@react-native-async-storage/async-storage'
import { createContext, useState } from 'react'

interface authentication {
	isAuthenticated: boolean
	login: () => void
	logout: () => void
}

const initialAuthState = {
	isAuthenticated: false,
	login: () => {},
	logout: () => {},
}

export const AuthContext = /*#__PURE__*/ createContext<authentication>(initialAuthState)

export const AuthProvider = (props) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
	const [authToken, setAuthToken] = useState<string>('')

	AsyncStorage.getItem('authToken').then((val) => {
		if (val) {
			setAuthToken(val)
			setIsAuthenticated(true)
		}
	})

	const login = () => {
		console.log('login')
	}

	const logout = () => {
		console.log('logout')
	}

	return (
		<AuthContext.Provider value={{ isAuthenticated: false, login, logout }}>
			{props.children}
		</AuthContext.Provider>
	)
}
