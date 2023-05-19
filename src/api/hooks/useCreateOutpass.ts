import { useMutation } from 'react-query'

import { createOutpass } from '../mutations/create-outpass'

export const useCreateOutpass = () => {
	const mutation = useMutation({
		mutationFn: createOutpass,
	})
	return {
		...mutation,
		createOutpass: mutation.mutate,
	}
}
