import { H3, YStack, Fieldset, Input, Label } from 'tamagui'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'

export const WardenAccount = ({ navigation }) => {
	return (
		<PageWrapper>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<H3>Create warden account</H3>
				<Fieldset>
					<Label>First name</Label>
					<Input
						id='firstname'
						size='$5'
					/>
				</Fieldset>
				<Fieldset>
					<Label>Last name</Label>
					<Input
						id='lastname'
						size='$5'
					/>
				</Fieldset>
				<Fieldset>
					<Label>Phone number</Label>
					<Input
						id='phonenumber'
						size='$5'
						keyboardType='numeric'
					/>
				</Fieldset>
				<Fieldset>
					<Label>Tower name</Label>
					<Input
						id='towername'
						size='$5'
					/>
				</Fieldset>
				<Fieldset marginTop='$4'>
					<Button variant='primary'>Continue</Button>
				</Fieldset>
			</YStack>
		</PageWrapper>
	)
}