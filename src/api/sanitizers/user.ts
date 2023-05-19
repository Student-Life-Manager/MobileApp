import camelcaseKeys from 'camelcase-keys'

import { UserRaw } from '@app/types/user'

export const sanitizeUser = (user: UserRaw) => {
	return camelcaseKeys(user, { deep: true })
}
