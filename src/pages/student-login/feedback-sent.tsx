import { H3, YStack, Text } from 'tamagui'
import SubmitSuccess from '../../assets/images/submit-success.svg'

import { PageWrapper } from '../../components/ui/page-wrapper'

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
						paddingTop='$1'
						paddingBottom='$1'
					>
						Submitted Successfully
					</H3>
				</YStack>
				<YStack
					alignSelf='center'
					alignItems='center'
					alignContent='center'
					padding='$2'
				>
					<Text
						color='#6F6F6F'
						alignItems='center'
						display='flex'
						textAlign='center'
						position='absolute'
						letterSpacing={'0.02'}
					>
						{' '}
						Thank you for submitting the feedback. We will look into it as soon as possible.
					</Text>
				</YStack>
			</YStack>
		</PageWrapper>
	)
}
