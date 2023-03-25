import { H3, YStack, Fieldset, Input, Label } from 'tamagui'
import LoginCover from '../../assets/images/login-cover.svg'
import { Button } from '../../components/ui/button'
import { PageWrapper } from '../../components/ui/page-wrapper'

export const Login = ({ navigation }) => {
	const goToUser = () =>
		navigation.navigate('user-profile', {
			id: 'Pulkit Jasti',
		})

	return (
		<PageWrapper>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<YStack
					padding='$3'
					alignItems='center'
				>
					<LoginCover />
				</YStack>
				<H3>Sign in</H3>
				<Fieldset>
					<Label htmlFor='emaill'>Email</Label>
					<Input
						id='email'
						placeholder='student@srmap.edu.in'
						size='$5'
					/>
				</Fieldset>
				<Fieldset paddingTop='$6'>
					<Button
						variant='primary'
						onPress={goToUser}
					>
						Get verification code
					</Button>
				</Fieldset>
			</YStack>
		</PageWrapper>
	)
}
