import camelcaseKeys from 'camelcase-keys'

import { StudentUserRaw } from '@app/types/user'

export const sanitizeStudentUser = (user: StudentUserRaw) => {
	return camelcaseKeys(user, { deep: true })
}
