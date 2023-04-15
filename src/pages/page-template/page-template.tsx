import { Text, View } from 'react-native'
import { H3 } from 'tamagui'

import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'

import { styles } from './styles'

export const PageTemplate = ({ navigation }) => {
	return (
		<PageWrapper>
			<View>
				<H3>Page template</H3>
				<Text>Subtitle</Text>
			</View>
		</PageWrapper>
	)
}
