import { SlmApi } from '../api'

export const deleteGuardian = async ({ uuid }: { uuid: string }) => {
	return SlmApi.delete(`/guardians/${uuid}`)
}
