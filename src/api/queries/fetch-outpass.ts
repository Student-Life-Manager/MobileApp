import { SlmApi } from '../api'

export const fetchOutpass = async (outpassId: string) => {
	return SlmApi.get(`/outpasses/${outpassId}`)
}
