import AsyncStorage from '@react-native-async-storage/async-storage'
import { createContext, useState, useEffect } from 'react'

import { SlmApi, setBearerToken, revokeAuthorizationToken } from '@app/api'
import { useFetchUser } from '@app/api/hooks/useFetchUser'
import { useLoginUser } from '@app/api/hooks/useLoginUser'
import { useRegisterUser } from '@app/api/hooks/useRegisterUser'
import { loginUserProps } from '@app/api/mutations/login-user'
import { registerUserProps } from '@app/api/mutations/register-user'
import { User } from '@app/types/user'

interface authenticationProps {
	isAuthenticated: boolean | null
	login: ({ email, password }: loginUserProps) => void
	// register: ({ email, password }: registerUserProps) => void
	logout: () => void
	isLoading: boolean
	userData: User | null
}

const initialAuthState: authenticationProps = {
	isAuthenticated: false,
	login: ({ email, password }: loginUserProps) => {},
	// register: ({ email, password }: registerUserProps) => {},
	logout: () => {},
	isLoading: false,
	userData: null,
}

export const AuthContext = /*#__PURE__*/ createContext<authenticationProps>(initialAuthState)

export const AuthProvider = (props) => {
	const { loginUser, data: loginData, isLoading, isSuccess: loginUserSuccess } = useLoginUser()
	const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
	const { data: userData, refetch: refetchUserData, isSuccess: isUserDataSuccess } = useFetchUser()
	// const { registerUser, data: registerData, isSuccess: registerUserSuccess } = useRegisterUser()

	const LOCAL_TOKEN = 'authToken'

	// Set up expiried token i
	// SlmApi.interceptors.request.use((config) => {
	// 	console.log('endpoint url', config.baseURL)
	// 	return config
	// })

	useEffect(() => {
		AsyncStorage.getItem(LOCAL_TOKEN).then((token) => {
			if (token) {
				setIsAuthenticated(true)
				setBearerToken(token)
			}
		})
	}, [])

	useEffect(() => {
		if (loginUserSuccess) {
			refetchUserData()
		}
	}, [loginUserSuccess])

	useEffect(() => {
		if (loginUserSuccess && loginData) {
			AsyncStorage.setItem(LOCAL_TOKEN, loginData.data.access_token)
			setBearerToken(loginData.data.access_token)
			setIsAuthenticated(true)
		}
	}, [loginUserSuccess])

	// useEffect(() => {
	// 	if (registerUserSuccess && registerData) {
	// 		AsyncStorage.setItem(LOCAL_TOKEN, registerData.data.access_token)
	// 		setBearerToken(registerData.data.access_token)
	// 		setIsAuthenticated(true)
	// 	}
	// }, [registerUserSuccess])

	const login = ({ email, password }: loginUserProps) => {
		loginUser({
			email,
			password,
		})
	}

	// const register = ({ email, password }: registerUserProps) => {
	// 	registerUser({
	// 		email,
	// 		password,
	// 	})
	// }

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
				// register,
				logout,
				isLoading,
				userData,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}
