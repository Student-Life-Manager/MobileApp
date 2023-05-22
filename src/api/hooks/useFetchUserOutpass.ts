import { useQuery } from 'react-query'

import { fetchUserOutpasses } from '../queries/fetch-user-outpass'
import { sanitizeOutpass } from '../sanitizers/outpass'

export const useFetchUserOutpasses = () => {
	const query = useQuery({
		queryKey: 'fetchUserOutpasses',
		queryFn: fetchUserOutpasses,
	})

	return {
		...query,
		data: query.data?.data.map(sanitizeOutpass) ?? [],
	}
}
