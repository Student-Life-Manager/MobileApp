import AsyncStorage from '@react-native-async-storage/async-storage'
import axios, { AxiosResponse } from 'axios'
import { createContext, useState, useEffect } from 'react'
import { UseMutateFunction } from 'react-query'

import { SlmApi, setBearerToken, revokeAuthorizationToken } from '@app/api'
import { useLoginUser } from '@app/api/hooks/useLoginUser'
import { loginUserProps } from '@app/api/mutations/loginUser'

interface authenticationProps {
	isAuthenticated: boolean | null
	login: ({ email, password }: loginUserProps) => void
	logout: () => void
	isLoading: boolean
}

const initialAuthState: authenticationProps = {
	isAuthenticated: false,
	login: ({ email, password }: loginUserProps) => {
		console.log('default login')
	},
	logout: () => {
		console.log('default logout')
	},
	isLoading: false,
}

export const AuthContext = /*#__PURE__*/ createContext<authenticationProps>(initialAuthState)

export const AuthProvider = (props) => {
	const { loginUser, data, isLoading, isSuccess } = useLoginUser()
	const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
	const [authToken, setAuthToken] = useState<string>('')

	const LOCAL_TOKEN = 'authToken'

	console.log('response data from mutation in provider', data)

	SlmApi.interceptors.request.use((config) => {
		console.log('endpoint url', config.baseURL)
		return config
	})

	useEffect(() => {
		AsyncStorage.getItem(LOCAL_TOKEN).then((token) => {
			if (token) {
				setAuthToken(token)
				setIsAuthenticated(true)
				setBearerToken(token)
			}
		})
	}, [])

	useEffect(() => {
		if (isSuccess && data) {
			AsyncStorage.setItem(LOCAL_TOKEN, data.data.access_token)
			setBearerToken(data.data.access_token)
			setIsAuthenticated(true)
			console.log('data', data)
		}
	}, [isSuccess])

	const login = ({ email, password }: loginUserProps) => {
		// console.log('creds', email, password)
		loginUser({
			email,
			password,
		})
	}

	const logout = () => {
		revokeAuthorizationToken()
		AsyncStorage.removeItem(LOCAL_TOKEN)
		setIsAuthenticated(false)
		console.log('logout')
	}

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				login,
				logout,
				isLoading,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}
