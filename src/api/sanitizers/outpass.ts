import camelcaseKeys from 'camelcase-keys'

import { OutpassRaw, CreateOutpassRaw } from '@app/types/outpass'

export const sanitizeOutpass = (data: OutpassRaw) => {
	return camelcaseKeys(data, {
		deep: true,
	})
}

export const sanitizeOutpassCreateProps = (data: CreateOutpassRaw) => {
	return camelcaseKeys(data, {
		deep: true,
	})
}
