import { Button } from 'tamagui'

export const LinkToUser = ({ navigation }) => {
	const goToUser = () =>
		navigation.navigate('user-profile', {
			id: 'Pulkit Jasti',
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
