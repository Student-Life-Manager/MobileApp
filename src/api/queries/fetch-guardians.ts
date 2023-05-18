import { GuardianRaw } from '@app/types/guardian'

import { SlmApi } from '../api'

export const fetchGuardians = async () => {
	return SlmApi.get<GuardianRaw[]>('/guardians/me')
}
