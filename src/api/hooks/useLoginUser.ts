import { useMutation } from 'react-query'

import { loginUser } from '../mutations/login-user'
import { sanitizeUser } from '../sanitizers/user'

export const useLoginUser = () => {
	const mutation = useMutation({
		mutationFn: loginUser,
	})
	return {
		...mutation,
		loginUser: mutation.mutate,
		data: {
			jwt_token: mutation.data?.data.jwt_token,
			auth_user: mutation.data && sanitizeUser(mutation.data.data.auth_user),
		},
	}
}
