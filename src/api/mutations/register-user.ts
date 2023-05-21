import axios from 'axios'

import { SlmApi } from '../api'

export interface registerUserProps {
	email: string
	password: string
}

export interface registerUserResponse {
	access_token: string
	refresh_token: string
}

export const registerUser = async ({ email, password }: registerUserProps) => {
	return SlmApi.post<registerUserResponse>('/students/register', {
		email,
		password,
	})
}
