import { Github, Twitter } from '@tamagui/lucide-icons'
import { Anchor, H1, ListItem, Paragraph, Separator, YGroup, YStack } from 'tamagui'

import { LinkToUser } from './link-to-user'
import { MyStack } from '../../components/MyStack'

export const Home = ({ navigation }) => {
	return (
		<MyStack>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<H1 textAlign='center'>Welcome to pulkiiiit.</H1>
				<Paragraph textAlign='center'>
					Here's a basic starter to show navigating from one screen to another.
				</Paragraph>
			</YStack>

			<YStack space='$5'>
				<LinkToUser navigation={navigation} />
				<YGroup
					width='100%'
					separator={<Separator />}
				>
					<ListItem icon={Twitter}>
						<Anchor
							href='https://twitter.com/natebirdman'
							target='_blank'
						>
							Nate
						</Anchor>
					</ListItem>
					<ListItem icon={Github}>
						<Anchor
							href='https://github.com/tamagui/tamagui'
							target='_blank'
							rel='noreferrer'
						>
							Tamagui
						</Anchor>
					</ListItem>
					<ListItem icon={Github}>
						<Anchor
							href='https://github.com/ivopr/tamagui-expo'
							target='_blank'
							rel='noreferrer'
						>
							Template
						</Anchor>
					</ListItem>
				</YGroup>
			</YStack>
		</MyStack>
	)
}
