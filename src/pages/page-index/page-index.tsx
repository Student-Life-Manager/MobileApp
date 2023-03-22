import { routes } from '@app/navigator/routes'
import { H3, YStack } from 'tamagui'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'

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
				{routes.map((item) => {
					if (item.name === 'pageIndex') return null

					return (
						<Button
							key={item.name}
							variant='primary'
							onPress={() => {
								goToUser(item.name)
							}}
						>
							{item.options.title}
						</Button>
					)
				})}
			</YStack>
		</PageWrapper>
	)
}
