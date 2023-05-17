import axios from 'axios'

import { SlmApi } from '../api'

export interface loginUserProps {
	email: string
	password: string
}

export interface loginUserResponse {
	access_token: string
	refresh_token: string
}

export const loginUser = async ({ email, password }: loginUserProps) => {
	console.log('axios dhbewhfbwejhbwejhf', SlmApi.defaults.baseURL)
	return SlmApi.post<loginUserResponse>('/auth_users/login', {
		email,
		password,
	})
}
