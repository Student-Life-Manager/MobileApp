import { H3, YStack, Fieldset, Input, Label } from 'tamagui'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { GaurdianSelect } from './guardian-select'
import { WardenSelect } from './warden-select'

export const ContactDetails = ({ navigation }) => {
	return (
		<PageWrapper>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<H3>Enter contact details</H3>
				<Fieldset>
					<GaurdianSelect />
				</Fieldset>
				<Fieldset>
					<WardenSelect />
				</Fieldset>
				<Fieldset>
					<Label>Alternate phone number</Label>
					<Input
						id='phonenumber'
						size='$5'
						keyboardType='numeric'
					/>
				</Fieldset>
				<Fieldset paddingTop='$4'>
					<Button variant='primary'>Continue</Button>
				</Fieldset>
			</YStack>
		</PageWrapper>
	)
}
