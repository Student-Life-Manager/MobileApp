// eslint-disable-next-line import/no-unresolved
import { BASE_URL } from '@env'
import axios from 'axios'

export const SlmApi = axios.create({
	baseURL: BASE_URL,
	// baseURL: 'https://jsonplaceholder.typicode.com',
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
