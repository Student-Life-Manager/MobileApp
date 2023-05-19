import { UserRaw } from '@app/types/user'

import { SlmApi } from '../api'

export const fetchUser = async () => {
	return SlmApi.get<UserRaw>('/students/me')
}
