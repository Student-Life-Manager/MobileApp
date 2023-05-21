import { View } from 'react-native'

import { Loader } from '@app/components/ui/loader'
import { PageWrapper } from '@app/components/ui/page-wrapper'

import { styles } from './styles'

export const LoaderPage = () => {
	return (
		<PageWrapper scrollEnabled={false}>
			<View style={styles.pageContainer}>
				<Loader displayText={true} />
			</View>
		</PageWrapper>
	)
}
