import AsyncStorage from '@react-native-async-storage/async-storage'
import { createContext, useState, useEffect } from 'react'

import { setBearerToken, revokeAuthorizationToken } from '@app/api'
import { useFetchUser } from '@app/api/hooks/useFetchUser'
import { useLoginUser } from '@app/api/hooks/useLoginUser'
import { useRegisterUser } from '@app/api/hooks/useRegisterUser'
import { loginUserProps } from '@app/api/mutations/login-user'
import { registerUserProps } from '@app/api/mutations/register-user'
import { LOCAL_TOKEN, useFetchAuthTokenFromLocalStorage } from '@app/components/hooks/auth-token'
import { User } from '@app/types/user'

interface authenticationProps {
	isAuthenticated: boolean | null
	login: ({ email, password }: loginUserProps) => void
	// register: ({ email, password }: registerUserProps) => void
	logout: () => void
	isLoading: boolean
	// isSuccess: boolean
	userData: User | null
}

const initialAuthState: authenticationProps = {
	isAuthenticated: false,
	login: ({ email, password }: loginUserProps) => {},
	// register: ({ email, password }: registerUserProps) => {},
	logout: () => {},
	isLoading: false,
	// isSuccess: false,
	userData: null,
}

export const AuthContext = /*#__PURE__*/ createContext<authenticationProps>(initialAuthState)

export const AuthProvider = (props) => {
	const { loginUser, data: loginData, isLoading: isLoginLoading, isSuccess } = useLoginUser()
	const { data: userData, isLoading: isUserLoading } = useFetchUser()
	const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
	const { data: authToken } = useFetchAuthTokenFromLocalStorage()
	// const { registerUser, data: registerData, isSuccess: registerUserSuccess } = useRegisterUser()

	// Set up expiried token i
	// SlmApi.interceptors.request.use((config) => {
	// 	console.log('endpoint url', config.baseURL)
	// 	return config
	// })

	useEffect(() => {
		if (authToken) {
			console.log('local storage login')
			setIsAuthenticated(true)
			setBearerToken(authToken)
		}
	}, [authToken])

	useEffect(() => {
		if (isSuccess && loginData.jwt_token) {
			AsyncStorage.setItem(LOCAL_TOKEN, loginData.jwt_token.access_token)
			setBearerToken(loginData.jwt_token.access_token)
			setIsAuthenticated(true)
		}
	}, [isSuccess])

	const login = ({ email, password }: loginUserProps) => {
		loginUser({
			email,
			password,
		})
	}

	// useEffect(() => {
	// 	if (registerUserSuccess && registerData) {
	// 		AsyncStorage.setItem(LOCAL_TOKEN, registerData.data.access_token)
	// 		setBearerToken(registerData.data.access_token)
	// 		setIsAuthenticated(true)
	// 	}
	// }, [registerUserSuccess])

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
	}

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				login,
				// register,
				logout,
				isLoading: isLoginLoading || isUserLoading,
				// isSuccess,
				userData: loginData.auth_user ?? userData,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}
