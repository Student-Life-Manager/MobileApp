import OTPInputView, { InputProps } from '@twotalltotems/react-native-otp-input'
import { styles } from './styles'

export const InputOTP = (props: InputProps) => {
	return (
		<OTPInputView
			style={styles.container}
			codeInputFieldStyle={styles.inputBox}
			codeInputHighlightStyle={styles.inpuBoxFocused}
			{...props}
		/>
	)
}
