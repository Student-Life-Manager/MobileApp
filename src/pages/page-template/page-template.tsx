import { H3, YStack, Fieldset, Input, Label } from 'tamagui'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { Text, StyleSheet } from 'react-native'
import { GLOBAL_STYLES } from '@app/constants/styles'

const styles = StyleSheet.create({})

export const PageTemplate = ({ navigation }) => {
	return (
		<PageWrapper>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<H3>Page template</H3>
				<Text>Subtitle</Text>
			</YStack>
		</PageWrapper>
	)
}
