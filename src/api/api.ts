// eslint-disable-next-line import/no-unresolved
import { BASE_URL } from '@env'
import axios from 'axios'

export const SlmApi = axios.create({
	// baseURL: BASE_URL,
	baseURL: 'https://000a-103-217-237-2.ngrok-free.app',
	// baseURL: 'https://api-slm.up.railway.app',
})

SlmApi.interceptors.request.use((config) => {
	console.log('endpoint url', config.baseURL)
	return config
})

export const setBearerToken = (token: string) => {
	SlmApi.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const revokeAuthorizationToken = () => {
	delete SlmApi.defaults.headers.common['Authorization']
}
