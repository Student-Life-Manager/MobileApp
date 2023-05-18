import camelcaseKeys from 'camelcase-keys'

import { GuardianRaw, GuardianCreatePropsRaw } from '@app/types/guardian'

export const sanitizeGuardian = (data: GuardianRaw) => {
	return camelcaseKeys(data, {
		deep: true,
	})
}

export const sanitizeGuardianCreateProps = (data: GuardianCreatePropsRaw) => {
	return camelcaseKeys(data, {
		deep: true,
	})
}
