import { useMutation } from 'react-query'

import { loginUser } from '../mutations/login-user'

export const useLoginUser = () => {
	const mutation = useMutation({
		mutationFn: loginUser,
	})
	return {
		...mutation,
		loginUser: mutation.mutate,
	}
}
