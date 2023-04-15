import { YStack, Text } from 'tamagui'

import WaitingIcon from '@app/assets/images/waiting-icon.svg'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'

//  TODO: remove color literals and store them ik global token

export const OutpassWaiting = ({ navigation }) => {
	return (
		<PageWrapper>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<YStack
					marginTop={'50%'}
					alignItems='center'
				>
					<WaitingIcon />
				</YStack>
				<YStack>
					<Text
						color='#6F6F6F'
						textAlign='center'
					>
						Your outpass request has been sent to your warden, please wait for 1-2 hours to get
						approval. Meanwhile, contact your tower’s warden in-person to receive instant feedback.
					</Text>
				</YStack>
				<YStack marginTop='$20'>
					<Button variant='secondary'>Get new outpass</Button>
				</YStack>
			</YStack>
		</PageWrapper>
	)
}
