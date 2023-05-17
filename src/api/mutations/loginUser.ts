import axios from 'axios'

import { SlmApi } from '../api'

export interface loginUserProps {
	email: string
	password: string
}

export const loginUser = async ({ email, password }: loginUserProps) => {
	// return SlmApi.get('/todos/1')
	// console.log('api call functiion', email, password)
	return SlmApi.post<loginUserProps>('/auth_users/login', {
		email: 'test@srmap.edu.in',
		password: 'password',
	})
}
