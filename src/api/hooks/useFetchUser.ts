import { useQuery } from 'react-query'

import { fetchGuardians } from '../queries/fetch-guardians'
import { fetchUser } from '../queries/fetch-user'
import { sanitizeStudentUser } from '../sanitizers/user'

export const useFetchUser = () => {
	const query = useQuery({
		queryKey: 'user',
		queryFn: fetchUser,
	})

	return {
		...query,
		data: query.data ? sanitizeStudentUser(query.data.data) : null,
	}
}
