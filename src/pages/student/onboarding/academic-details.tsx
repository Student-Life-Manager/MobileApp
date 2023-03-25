import { H3, YStack, Fieldset, Input, Label } from 'tamagui'
import { Button } from '../../../components/ui/button'
import { PageWrapper } from '../../../components/ui/page-wrapper'

export const AcademicDetails = ({ navigation }) => {
	return (
		<PageWrapper>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<H3>Academic details</H3>
				<Fieldset>
					<Label>Year of study</Label>
					<Input
						id='year'
						size='$5'
						keyboardType='numeric'
						paddingTop='$2'
					/>
				</Fieldset>
				<Fieldset>
					<Label>Course</Label>
					<Input
						id='course'
						size='$5'
					/>
				</Fieldset>
				<Fieldset>
					<Label>Branch</Label>
					<Input
						id='branch'
						size='$5'
					/>
				</Fieldset>
				<Fieldset>
					<Label>Section</Label>
					<Input
						id='section'
						size='$5'
					/>
				</Fieldset>
				<Fieldset paddingTop='$6'>
					<Button variant='primary'>Continue</Button>
				</Fieldset>
			</YStack>
		</PageWrapper>
	)
}
