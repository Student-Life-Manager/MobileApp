import { Outpass, CreateOutpass } from '@app/types/outpass'

import { SlmApi } from '../api'

export const createOutpass = async (data: CreateOutpass) => {
	return SlmApi.post<Outpass>(
		`/outpasses?warden_uuid=${data.wardenUuid}&guardian_uuid=${data.guardianUuid}`,
		// '/outpasses?warden_uuid=944e1188-00d8-4c01-986b-835d8c9d5b75&guardian_uuid=9213be43-5d9d-4d77-84ce-1793cbcd671a',
		{
			out_date: data.outDate,
			expected_return_at: data.expectedReturnAt,
			location: data.location,
			reason: data.reason,
		},
	)
}
