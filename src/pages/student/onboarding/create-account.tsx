import { H3, YStack, Text } from 'tamagui'
import CreateAccount from '@app/assets/images/create-account.svg'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'

export const CreateAccountPage = ({ navigation }) => {
	return (
		<PageWrapper>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<YStack alignItems='center'>
					<H3
						paddingTop='$15'
						paddingBottom='$4'
					>
						Create Account
					</H3>
				</YStack>
				<YStack
					paddingTop='$1'
					alignItems='center'
				>
					<CreateAccount />
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
						An account with this email does not exist, please fill the following form to create an
						account.
					</Text>
				</YStack>
				<YStack paddingTop='$20'>
					<Button variant='primary'>Create Account</Button>
				</YStack>
			</YStack>
		</PageWrapper>
	)
}
