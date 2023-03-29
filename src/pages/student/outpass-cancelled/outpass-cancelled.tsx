import { YStack, Text } from 'tamagui'
import CancelledIcon from '@app/assets/images/cancelled-icon.svg'
import { Button2 } from '@app/components/ui/button2'
import { PageWrapper } from '@app/components/ui/page-wrapper'

export const OutpassCancelled = ({ navigation }) => {
	return (
		<PageWrapper>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<YStack
					marginTop={'40%'}
					alignItems='center'
				>
					<CancelledIcon />
				</YStack>
				<YStack>
					<Text
						color='#6F6F6F'
						textAlign='center'
						margin={20}
					>
						Your ourpass has been rejected by Revathi for the following reason
					</Text>
				</YStack>
				<YStack
					margin={20}
					minHeight={150}
					borderRadius={'16%'}
					backgroundColor={'#FAE3E3'}
				>
					<Text
						color='#6F6F6F'
						textAlign='justify'
						padding='$4'
					>
						<Text fontWeight={'700'}>Message</Text>
						<Text>
							{'\n\n'}
							Your outpass has been rejected because as it is a weekday we can't allow you for an
							outing.
						</Text>
					</Text>
				</YStack>
				<YStack
					marginTop={'$4'}
					marginBottom={'$4'}
				>
					<Button2 variant='primary'>Get new outpass</Button2>
				</YStack>
			</YStack>
		</PageWrapper>
	)
}
