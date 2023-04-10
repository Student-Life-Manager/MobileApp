import { Button as CustomButton, ButtonProps, styled } from 'tamagui'

const ButtonPrimary = styled(CustomButton, {
	backgroundColor: '#313FDD',
	color: '#fff',

	pressStyle: {
		backgroundColor: '#000FB8',
	},
})

const ButtonSecondary = styled(CustomButton, {
	backgroundColor: '#E6EBFF',
	color: '#313FDD',
	borderColor: '#313FDD',

	pressStyle: {
		backgroundColor: '#C7D2FF',
	},
})

interface CustomButtonProps extends ButtonProps {
	variant: 'primary' | 'secondary'
}

export const Button = ({ children, ...props }: CustomButtonProps) => {
	const { variant } = props

	if (variant === 'primary')
		return (
			<ButtonPrimary
				size='$5'
				{...props}
			>
				{children}
			</ButtonPrimary>
		)

	if (variant === 'secondary')
		return (
			<ButtonSecondary
				size='$5'
				{...props}
			>
				{children}
			</ButtonSecondary>
		)

	return null
}
