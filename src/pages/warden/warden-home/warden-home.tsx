import { H3, YStack, Fieldset, XStack } from 'tamagui'
import WardenPage from '@app/assets/images/warden-page.svg'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import ProfileIcon from '@app/assets/images/profile-icon.svg'
import { Button } from '@app/components/ui/button'

export const WardenHome = ({ navigation }) => {
	return (
		<PageWrapper>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<XStack>
					<YStack>
						<H3>Welcome, {'\n'} Warden name</H3>
					</YStack>
					<YStack
						alignSelf='flex-end'
						paddingLeft={'45%'}
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
					<Button variant='secondary'>View outpass list</Button>
				</Fieldset>
				<Fieldset>
					<Button variant='secondary'>Scan QR code</Button>
				</Fieldset>
			</YStack>
		</PageWrapper>
	)
}
