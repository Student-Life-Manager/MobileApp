// import { NativeStackScreenProps } from '@react-navigation/native-stack'
// import { FC } from 'react'
import { Separator, YStack } from 'tamagui'

import { AlertDialogDemo } from './@components/alert-dialog'
import { DialogDemo } from './@components/dialog'
import { InputDemo } from './@components/input'
import { SelectDemo } from './@components/select'
import { UserDetails } from './@components/detail'
import { MyStack } from '../../components/MyStack'

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
				<AlertDialogDemo />
				<DialogDemo />
				<SelectDemo />
			</YStack>
		</MyStack>
	)
}
