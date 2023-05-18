import camelcase from 'camelcase'

import { sanitizeGuardian, sanitizeGuardianCreateProps } from '@app/api/sanitizers/guardian'

export type GuardianRaw = {
	created_at: string
	updated_at: string
	uuid: string
	relation: string
	phone_number: string
	is_verified: boolean
}

export type GuardianCreatePropsRaw = {
	relation: string
	phone_number: string
}

export type Guardian = ReturnType<typeof sanitizeGuardian>
export type GuardianCreateProps = ReturnType<typeof sanitizeGuardianCreateProps>
