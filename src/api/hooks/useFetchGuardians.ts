import { useQuery } from 'react-query'

import { fetchGuardians } from '../queries/fetch-guardians'
import { sanitizeGuardian } from '../sanitizers/guardian'

export const useFetchGuardians = () => {
	const query = useQuery({
		queryKey: 'guardians',
		queryFn: fetchGuardians,
	})
	return {
		...query,
		data: query.data?.data.map(sanitizeGuardian) ?? [],
	}
}
