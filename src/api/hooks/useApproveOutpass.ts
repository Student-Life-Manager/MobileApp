import { useMutation } from 'react-query'

import { approveOutpass } from '../mutations/approve-outpass'

export const useApproveOutpass = () => {
	const mutation = useMutation({
		mutationKey: 'approveOutpass',
		mutationFn: approveOutpass,
	})

	return {
		...mutation,
		approveOutpass: mutation.mutate,
	}
}
