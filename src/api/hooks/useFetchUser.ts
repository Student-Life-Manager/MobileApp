import { useQuery } from 'react-query'

import { fetchUser } from '../queries/fetch-user'
import { sanitizeUser } from '../sanitizers/user'

export const useFetchUser = () => {
	const query = useQuery({
		queryKey: 'user',
		queryFn: fetchUser,
	})

	return {
		...query,
		data: query.data ? sanitizeUser(query.data.data) : null,
	}
}
