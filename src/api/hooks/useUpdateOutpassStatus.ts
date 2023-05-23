import { useMutation } from 'react-query'

import { updateOutpassStatus } from '../mutations/update-outpass-status'

export const useUpdateOutpassStatus = () => {
	const mutation = useMutation({
		mutationKey: 'updateOutpassStatus',
		mutationFn: updateOutpassStatus,
	})

	return {
		...mutation,
		updateOutpassStatus: mutation.mutate,
	}
}
