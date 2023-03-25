import { H3, YStack, Fieldset } from 'tamagui'
import WardenPage from '../../assets/images/warden-page.svg'
import { Button2 } from '../../../components/ui/button2'
import { PageWrapper } from '../../../components/ui/page-wrapper'
import ProfileIcon from '../../assets/images/profile-icon.svg'

export const WardenHome = ({ navigation }) => {
	return (
		<PageWrapper>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<Fieldset>
					<Fieldset
						justifyContent='flex-end'
						alignContent='flex-end'
						alignItems='flex-end'
					>
						<ProfileIcon />
					</Fieldset>
					<H3>Welcome,</H3>
					<H3>Warden name</H3>
				</Fieldset>
				<Fieldset
					padding='$3'
					alignItems='center'
				>
					<WardenPage />
				</Fieldset>
				<Fieldset paddingTop='$4'>
					<Button2 variant='primary'>View outpass list</Button2>
				</Fieldset>
				<Fieldset paddingTop='$1'>
					<Button2 variant='primary'>Scan QR code</Button2>
				</Fieldset>
			</YStack>
		</PageWrapper>
	)
}
