import axios from 'axios'

import { GuardianCreatePropsRaw, GuardianRaw } from '@app/types/guardian'

import { SlmApi } from '../api'

export const createGuardian = async (data: GuardianCreatePropsRaw) => {
	return SlmApi.post<GuardianRaw>('/guardians', data)
}
