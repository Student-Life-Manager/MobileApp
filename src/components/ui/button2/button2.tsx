import { Button as CustomButton, ButtonProps, styled } from 'tamagui'

const StyledButton = styled(CustomButton, {
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

export const Button2 = ({ children, ...props }: CustomButtonProps) => {
	return (
		<StyledButton
			size='$5'
			{...props}
		>
			{children}
		</StyledButton>
	)
}