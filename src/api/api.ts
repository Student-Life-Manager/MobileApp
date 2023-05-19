import { BASE_URL } from '@env'
import axios from 'axios'

export const SlmApi = axios.create({
	// baseURL: BASE_URL,
	// baseURL: 'https://api-slm.up.railway.app',
	baseURL: 'https://4a56-103-217-237-2.ngrok-free.app',
	headers: {
		'Content-Type': 'application/json',
	},
})

export const setBearerToken = (token: string) => {
	SlmApi.defaults.headers.common['x-authorization'] = `Bearer ${token}`
	SlmApi.defaults.headers.common['authorization'] = `Bearer ${token}`
}

export const revokeAuthorizationToken = () => {
	delete SlmApi.defaults.headers.common['x-authorization']
	delete SlmApi.defaults.headers.common['authorization']
}
