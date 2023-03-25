import { H3, YStack, Fieldset, Input, Label } from 'tamagui'
import { Button } from '../../components/ui/button'
import { PageWrapper } from '../../components/ui/page-wrapper'

export const PersonalDetails = ({ navigation }) => {
	return (
		<PageWrapper>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<H3>Personal details</H3>
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
					<Label>Roll number</Label>
					<Input
						id='rollno'
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
					<Label>Emergency phone number (optional)</Label>
					<Input
						id='emergencyphonenumber'
						size='$5'
						keyboardType='numeric'
					/>
				</Fieldset>
				<Fieldset paddingTop='$6'>
					<Button variant='primary'>Continue</Button>
				</Fieldset>
			</YStack>
		</PageWrapper>
	)
}
