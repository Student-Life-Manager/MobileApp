import { useMutation } from 'react-query'

import { cancelOutpass } from '../mutations/cancel-outpass'

export const useDeleteOutpass = () => {
	const mutation = useMutation({
		mutationKey: 'cancelOutpass',
		mutationFn: cancelOutpass,
	})

	return {
		...mutation,
		cancelOutpass: mutation.mutate,
	}
}
