import { useQuery } from 'react-query'

import { fetchWardens } from '../queries/fetch-wardens'
import { sanitizeUser } from '../sanitizers/user'

export const useFetchWardens = () => {
	const query = useQuery({
		queryKey: 'wardens',
		queryFn: fetchWardens,
	})

	return {
		...query,
		data: query.data?.data.map(sanitizeUser) ?? [],
	}
}
