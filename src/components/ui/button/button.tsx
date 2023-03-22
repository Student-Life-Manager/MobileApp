import { Button as CustomButton, ButtonProps, styled } from 'tamagui'

const StyledButton = styled(CustomButton, {
	backgroundColor: '#313FDD',
	color: '#fff',

	pressStyle: {
		backgroundColor: '#000FB8',
	},
})

interface CustomButtonProps extends ButtonProps {
	variant: 'primary' | 'secondary'
}

export const Button = ({ children, ...props }: CustomButtonProps) => {
	// const { variant } = props
	return (
		<StyledButton
			size='$5'
			{...props}
		>
			{children}
		</StyledButton>
	)
}
