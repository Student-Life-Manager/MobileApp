import { useMutation } from 'react-query'

import { rejectOutpass } from '../mutations/reject-outpass'

export const useRejectOutpass = () => {
	const mutation = useMutation({
		mutationKey: 'rejectOutpass',
		mutationFn: rejectOutpass,
	})

	return {
		...mutation,
		rejectOutpass: mutation.mutate,
	}
}
