import AsyncStorage from '@react-native-async-storage/async-storage'
import axios, { AxiosResponse } from 'axios'
import { createContext, useState, useEffect } from 'react'
import { UseMutateFunction } from 'react-query'

import { SlmApi, setBearerToken, revokeAuthorizationToken } from '@app/api'
import { useFetchUser } from '@app/api/hooks/useFetchUser'
import { useLoginUser } from '@app/api/hooks/useLoginUser'
import { loginUserProps } from '@app/api/mutations/login-user'
import { StudentUser } from '@app/types/user'

interface authenticationProps {
	isAuthenticated: boolean | null
	login: ({ email, password }: loginUserProps) => void
	logout: () => void
	isLoading: boolean
	userData: StudentUser | null
}

const initialAuthState: authenticationProps = {
	isAuthenticated: false,
	login: ({ email, password }: loginUserProps) => {},
	logout: () => {},
	isLoading: false,
	userData: null,
}

export const AuthContext = /*#__PURE__*/ createContext<authenticationProps>(initialAuthState)

export const AuthProvider = (props) => {
	const { loginUser, data: loginData, isLoading, isSuccess } = useLoginUser()
	const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
	const [authToken, setAuthToken] = useState<string>('')
	const { data: userData, refetch: refetchUserData } = useFetchUser()
	const [initialRoute, setInitialRoute] = useState<string>('')

	const LOCAL_TOKEN = 'authToken'

	// SlmApi.interceptors.request.use((config) => {
	// 	console.log('endpoint url', config.baseURL)
	// 	return config
	// })

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
		if (isAuthenticated) {
			refetchUserData()
		}
	}, [isAuthenticated])

	useEffect(() => {
		if (isSuccess && loginData) {
			AsyncStorage.setItem(LOCAL_TOKEN, loginData.data.access_token)
			setBearerToken(loginData.data.access_token)
			setIsAuthenticated(true)
		}
	}, [isSuccess])

	const login = ({ email, password }: loginUserProps) => {
		loginUser({
			email,
			password,
		})
	}

	const logout = () => {
		revokeAuthorizationToken()
		AsyncStorage.removeItem(LOCAL_TOKEN)
		setIsAuthenticated(false)
		console.log('logoutttttt')
	}

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				login,
				logout,
				isLoading,
				userData,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}
