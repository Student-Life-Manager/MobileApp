import { SlmApi } from '../api'

export const approveOutpass = async ({ outpassUuid }: { outpassUuid: string }) => {
	return SlmApi.patch(`outpasses/${outpassUuid}/approve`)
}
