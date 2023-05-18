import { useMutation } from 'react-query'

import { createGuardian } from '../mutations/create-guardian'

export const useCreateGuardian = () => {
	const mutation = useMutation({
		mutationFn: createGuardian,
	})
	return {
		...mutation,
		createGuardian: mutation.mutate,
	}
}
