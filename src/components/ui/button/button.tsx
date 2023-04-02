import { Button as CustomButton, ButtonProps, styled } from 'tamagui'

const StyledButton = styled(CustomButton, {
	variants: {
		variant: {
			primary: {
				backgroundColor: '#313FDD',
				color: '#fff',

				pressStyle: {
					backgroundColor: '#000FB8',
				},
			},
			secondary: {
				backgroundColor: '#E6EBFF',
				color: '#313FDD',
				borderColor: '#313FDD',

				pressStyle: {
					backgroundColor: '#C7D2FF',
				},
			},
		},
	} as const,
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
