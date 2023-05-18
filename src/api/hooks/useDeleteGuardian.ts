import { useMutation } from 'react-query'

import { deleteGuardian } from '../mutations/delete-guardian'

export const useDeleteGuardian = () => {
	const mutation = useMutation({
		mutationFn: deleteGuardian,
	})

	return {
		...mutation,
		deleteGuardian: mutation.mutate,
	}
}
