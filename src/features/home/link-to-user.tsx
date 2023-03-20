import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { FC } from 'react'
import { Button } from 'tamagui'

type LinkToUserProps = {
	navigation: NativeStackNavigationProp<StackNavigatorParams, 'home', undefined>
}

/**
 * @remarks - general description of the component
 * @param prop1 - description of the property
 * @param prop1 - description of the property
 * @example
 * ```
 * <CustomComponent
 * 	prop1 = {value1}
 * 	prop1 = {value2}
 * />
 * ```
 */

export const LinkToUser: FC<LinkToUserProps> = ({ navigation }) => {
	const goToUser = () =>
		navigation.navigate('user-detail', {
			id: 'John Doe',
		})

	return (
		<Button
			themeInverse
			onPress={goToUser}
			width='100%'
		>
			Go To User
		</Button>
	)
}
