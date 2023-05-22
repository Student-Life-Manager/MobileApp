import { OutpassRaw } from '@app/types/outpass'

import { SlmApi } from '../api'

export const fetchUserOutpasses = async () => {
	return SlmApi.get<OutpassRaw[]>('/outpasses/me')
}
