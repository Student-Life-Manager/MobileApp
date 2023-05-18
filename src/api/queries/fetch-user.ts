import { StudentUserRaw } from '@app/types/user'

import { SlmApi } from '../api'

export const fetchUser = async () => {
	return SlmApi.get<StudentUserRaw>('/students/me')
}
