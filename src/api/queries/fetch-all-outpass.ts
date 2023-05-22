import { OutpassRaw } from '@app/types/outpass'

import { SlmApi } from '../api'

export const fetchAllOutpass = () => {
	return SlmApi.get<OutpassRaw[]>('/outpasses')
}
