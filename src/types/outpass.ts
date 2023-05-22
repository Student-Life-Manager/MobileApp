import { sanitizeOutpass, sanitizeOutpassCreateProps } from '@app/api/sanitizers/outpass'
import { OutpassStatus } from '@app/constants/enums'

import { StudentBase } from './student'

export type CreateOutpassRaw = {
	guardian_uuid: string
	warden_uuid: string
	out_date: string
	// out_time: string
	expected_return_at: string
	location: string
	reason: string
	alternate_phone_number?: string
}

export type OutpassRaw = {
	created_at: string
	updated_at?: string
	uuid: string
	out_date: string
	// out_time: string
	expected_return_at: string
	location: string
	reason: string
	alternate_phone_number?: string
	status: OutpassStatus
	approved_at?: string
	exited_at?: string
	returned_at?: string
	warden_message?: string
	approval: {
		warden_1: string
		warden_2: string
	}
	rejection: {
		warden_1: string
		warden_2: string
	}
	student?: StudentBase
}

export type Outpass = ReturnType<typeof sanitizeOutpass>
export type CreateOutpass = ReturnType<typeof sanitizeOutpassCreateProps>
