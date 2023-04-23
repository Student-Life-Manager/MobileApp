import { H3, YStack } from 'tamagui'

import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { routes } from '@app/navigator/routes'

const pagesToDisplay = [
	'student-home',
	'warden-outpass-list',
	'scanQrCode',
	'outpass-details',
	'login',
	'warden-account',
	'warden-home',
	'outpass-waiting',
]

export const PageIndex = ({ navigation }) => {
	const goToUser = (pageName) =>
		navigation.navigate(pageName, {
			id: 'Pulkit Jasti',
		})

	return (
		<PageWrapper>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<H3>Index</H3>
				{routes.map((route) => {
					if (pagesToDisplay.find((item) => item === route.name)) {
						return (
							<Button
								key={route.name}
								variant='primary'
								onPress={() => {
									goToUser(route.name)
								}}
							>
								{route.options.title}
							</Button>
						)
					}
				})}
			</YStack>
		</PageWrapper>
	)
}
