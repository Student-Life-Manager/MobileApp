import { useQuery } from 'react-query'

import { fetchAllOutpass } from '../queries/fetch-all-outpass'
import { sanitizeOutpass } from '../sanitizers/outpass'

export const useFetchAllOutpass = () => {
	const query = useQuery({
		queryKey: 'fetchAllOutpass',
		queryFn: fetchAllOutpass,
	})

	return {
		...query,
		data: query.data?.data.map(sanitizeOutpass) ?? [],
	}
}
