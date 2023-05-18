import axios from 'axios'

import { Guardian, GuardianCreateProps, GuardianCreatePropsRaw } from '@app/types/guardian'

import { SlmApi } from '../api'

export const createGuardian = async (data: GuardianCreatePropsRaw) => {
	return SlmApi.post<Guardian[]>('/guardians', data)
}
