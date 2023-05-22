import { SlmApi } from '../api'

interface RejectOutpassProps {
	outpassUuid: string
	message: string
}

export const rejectOutpass = async (props: RejectOutpassProps) => {
	return SlmApi.patch(`outpasses/${props.outpassUuid}/reject`, { warden_message: props.message })
}
