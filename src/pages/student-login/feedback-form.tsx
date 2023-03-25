import { YStack, Fieldset, Input, Label, TextArea } from 'tamagui'
import { Button2 } from '../../components/ui/button2'
import { PageWrapper } from '../../components/ui/page-wrapper'

export const FeedbackForm = ({ navigation }) => {
	return (
		<PageWrapper>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<Fieldset paddingTop='$2'>
					<Label>Type of message</Label>
					<Input
						id='type'
						size='$5'
					/>
				</Fieldset>
				<Fieldset paddingTop='$2'>
					<Label>Message</Label>
					<TextArea
						minHeight={240}
						numberOfLines={4}
					/>
				</Fieldset>
				<Fieldset paddingTop='$20'>
					<Button2 variant='primary'>Submit</Button2>
				</Fieldset>
			</YStack>
		</PageWrapper>
	)
}
