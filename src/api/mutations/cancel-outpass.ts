import { SlmApi } from '../api'

export const cancelOutpass = (uuid: string) => {
	return SlmApi.delete(`outpasses/${uuid}`)
}
