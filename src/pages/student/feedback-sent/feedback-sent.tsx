import { H3, YStack, Text } from 'tamagui'
import SubmitSuccess from '@app/assets/images/submit-success.svg'

import { PageWrapper } from '@app/components/ui/page-wrapper'

export const FeedbackSent = ({ navigation }) => {
	return (
		<PageWrapper>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<YStack
					paddingTop='$20'
					alignItems='center'
				>
					<SubmitSuccess />
				</YStack>
				<YStack alignItems='center'>
					<H3
						marginTop='$1'
						marginBottom='$1'
					>
						Submitted Successfully
					</H3>
				</YStack>
				<YStack>
					<Text
						color='#6F6F6F'
						display='flex'
						textAlign='center'
					>
						{' '}
						Thank you for submitting the feedback. We will look into it as soon as possible.
					</Text>
				</YStack>
			</YStack>
		</PageWrapper>
	)
}
