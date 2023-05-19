import { UserRaw } from '@app/types/user'

import { SlmApi } from '../api'

export const fetchWardens = async () => {
	return SlmApi.get<UserRaw[]>('/wardens')
}
