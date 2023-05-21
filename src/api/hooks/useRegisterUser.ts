import { useMutation } from 'react-query'

import { registerUser } from '../mutations/register-user'

export const useRegisterUser = () => {
	const mutation = useMutation({
		mutationFn: registerUser,
	})
	return {
		...mutation,
		registerUser: mutation.mutate,
	}
}
