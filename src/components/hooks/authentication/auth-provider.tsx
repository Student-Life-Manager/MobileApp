import AsyncStorage from '@react-native-async-storage/async-storage'
import axios, { AxiosResponse } from 'axios'
import { createContext, useState, useEffect } from 'react'
import { UseMutateFunction } from 'react-query'

import { SlmApi, setBearerToken } from '@app/api'
import { useLoginUser } from '@app/api/hooks/useLoginUser'
import { loginUserProps } from '@app/api/mutations/loginUser'

interface authenticationProps {
	isAuthenticated: boolean | null
	login: ({ email, password }: loginUserProps) => void
	logout: () => void
}

const initialAuthState = {
	isAuthenticated: false,
	login: ({ email, password }: loginUserProps) => {
		console.log('default login')
	},
	logout: () => {
		console.log('default logout')
	},
}

export const AuthContext = /*#__PURE__*/ createContext<authenticationProps>(initialAuthState)

export const AuthProvider = (props) => {
	const { loginUser, data } = useLoginUser()
	const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
	const [authToken, setAuthToken] = useState<string>('')

	console.log('response data from mutation in provider', data)

	useEffect(() => {
		AsyncStorage.getItem('authToken').then((token) => {
			if (token) {
				setAuthToken(token)
				setIsAuthenticated(true)
			}
		})
	}, [])

	useEffect(() => {
		setBearerToken(authToken)
	}, [authToken])

	const login = ({ email, password }: loginUserProps) => {
		// console.log('creds', email, password)
		loginUser({
			email,
			password,
		})
	}

	const logout = () => {
		console.log('logout')
	}

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				login,
				logout,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}
