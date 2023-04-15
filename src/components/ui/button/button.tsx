import { ButtonProps } from 'tamagui'

import { ButtonPrimary, ButtonSecondary } from './styles'

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
