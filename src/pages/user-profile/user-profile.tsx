// import { FC } from 'react'
import { Separator, YStack } from 'tamagui'

import { DialogDemo } from './@components/dialog'
import { InputDemo } from './@components/input'
import { SelectDemo } from './@components/select'
import { UserDetails } from './@components/detail'
import { MyStack } from '@app/components/MyStack'

export const UserProfile = ({ route }: any) => {
	const { id } = route.params

	return (
		<MyStack
			backgroundColor='$background'
			justifyContent='flex-start'
			separator={<Separator />}
		>
			<UserDetails id={id} />
			<YStack space='$2.5'>
				<InputDemo
					fieldId='username12'
					label='Form Input'
					placeholder='John Doe'
				/>
				<DialogDemo />
				<SelectDemo />
			</YStack>
		</MyStack>
	)
}
