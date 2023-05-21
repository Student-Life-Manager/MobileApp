import AsyncStorage from '@react-native-async-storage/async-storage'
import { useQuery } from 'react-query'

export const LOCAL_TOKEN = 'authToken'

export const useFetchAuthTokenFromLocalStorage = () => {
	return useQuery({
		queryKey: 'fetchAuthToken',
		queryFn: () => {
			return AsyncStorage.getItem(LOCAL_TOKEN)
		},
	})
}
