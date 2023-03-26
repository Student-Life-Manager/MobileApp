import { H3, YStack, Fieldset, XStack } from 'tamagui'
import WardenPage from '@app/assets/images/warden-page.svg'
import { Button2 } from '@app/components/ui/button2'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import ProfileIcon from '@app/assets/images/profile-icon.svg'
import { Button } from '@app/components/ui/button'

export const StudentHome = ({ navigation }) => {
	return (
		<PageWrapper>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<XStack>
					<YStack>
						<H3>Welcome,</H3>
						<H3>Student name</H3>
					</YStack>
					<YStack
						alignSelf='flex-end'
						paddingLeft={'45%'}
					>
						<ProfileIcon />
					</YStack>
				</XStack>
				<Fieldset
					marginTop='$8'
					alignItems='center'
				>
					<WardenPage />
				</Fieldset>
				<Fieldset paddingTop='$8'>
					<Button variant='primary'>Get new outpass</Button>
				</Fieldset>
				<Fieldset>
					<Button2 variant='primary'>Send feedback</Button2>
				</Fieldset>
			</YStack>
		</PageWrapper>
	)
}
