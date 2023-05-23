import { OutpassStatus } from '@app/constants/enums'

import { SlmApi } from '../api'

interface UpdateOutpassStatusProps {
	outpassUuid: string
	status: OutpassStatus
}

export const updateOutpassStatus = async (props: UpdateOutpassStatusProps) => {
	return SlmApi.patch(`/outpasses/${props.outpassUuid}/status`, {
		status: props.status,
	})
}
