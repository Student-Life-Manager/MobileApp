import { useQuery } from 'react-query'

import { useFetchAuthTokenFromLocalStorage } from '@app/components/hooks/auth-token'

import { fetchUser } from '../queries/fetch-user'
import { sanitizeUser } from '../sanitizers/user'

export const useFetchUser = () => {
	const { data: authToken } = useFetchAuthTokenFromLocalStorage()

	const query = useQuery({
		queryKey: 'user',
		queryFn: fetchUser,
		enabled: !!authToken,
	})

	return {
		...query,
		data: query.data ? sanitizeUser(query.data.data) : null,
	}
}
