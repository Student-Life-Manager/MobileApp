import { Button as CustomButton, styled } from 'tamagui'

export const ButtonPrimary = styled(CustomButton, {
	backgroundColor: '#313FDD',
	color: '#fff',

	pressStyle: {
		backgroundColor: '#000FB8',
	},
})

export const ButtonSecondary = styled(CustomButton, {
	backgroundColor: '#E6EBFF',
	color: '#313FDD',
	borderColor: '#313FDD',

	pressStyle: {
		backgroundColor: '#C7D2FF',
	},
})
