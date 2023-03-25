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
					<YStack
						justifyContent='flex-start'
						alignContent='flex-start'
						alignItems='flex-start'
					>
						<H3>Welcome,</H3>
						<H3>Student name</H3>
					</YStack>
					<YStack
						justifyContent='flex-end'
						alignContent='flex-end'
						alignItems='flex-end'
						paddingLeft='$20'
					>
						<ProfileIcon />
					</YStack>
				</XStack>
				<Fieldset
					paddingTop='$7'
					alignItems='center'
				>
					<WardenPage />
				</Fieldset>
				<Fieldset paddingTop='$8'>
					<Button variant='primary'>Get new outpass</Button>
				</Fieldset>
				<Fieldset paddingTop='$1'>
					<Button2 variant='primary'>Send feedback</Button2>
				</Fieldset>
			</YStack>
		</PageWrapper>
	)
}
