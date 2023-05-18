import Lottie from 'lottie-react-native'
import { View } from 'react-native'
import { ButtonProps } from 'tamagui'

import BlueLoader from '@app/assets/lottie/loading-blue.json'
import WhiteLoader from '@app/assets/lottie/loading-white.json'

import { ButtonPrimary, ButtonSecondary, styles } from './styles'

interface CustomButtonProps extends ButtonProps {
	variant: 'primary' | 'secondary'
	isLoading?: boolean
}

export const Button = ({ children, ...props }: CustomButtonProps) => {
	const { variant, isLoading } = props

	if (variant === 'primary')
		return (
			<ButtonPrimary
				size='$5'
				{...props}
			>
				{children}
				{isLoading ? (
					<View style={styles.animationWrapper}>
						<Lottie
							source={WhiteLoader}
							autoPlay={true}
							style={styles.lottieAnimation}
						/>
					</View>
				) : null}
			</ButtonPrimary>
		)

	if (variant === 'secondary')
		return (
			<ButtonSecondary
				size='$5'
				{...props}
			>
				{children}
				{isLoading ? (
					<View style={styles.animationWrapper}>
						<Lottie
							source={BlueLoader}
							autoPlay={true}
							style={styles.lottieAnimation}
						/>
					</View>
				) : null}
			</ButtonSecondary>
		)

	return null
}
