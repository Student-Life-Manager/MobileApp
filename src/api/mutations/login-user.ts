import axios from 'axios'

import { UserRaw } from '@app/types/user'

import { SlmApi } from '../api'

export interface loginUserProps {
	email: string
	password: string
}

export interface loginUserResponse {
	auth_user: UserRaw
	jwt_token: {
		access_token: string
		refresh_token: string
	}
}

export const loginUser = async ({ email, password }: loginUserProps) => {
	return SlmApi.post<loginUserResponse>('/auth_users/login', {
		email,
		password,
	})
}
