import { GLOBAL_STYLES } from '@app/constants/styles'
import OTPInputView, { InputProps } from '@twotalltotems/react-native-otp-input'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		height: 60,
	},
	inputBox: {
		color: GLOBAL_STYLES.COLOR.DARK_TEXT,
		fontSize: 20,
		backgroundColor: '#fff',
		borderColor: GLOBAL_STYLES.COLOR.BORDER_COLOR,
		borderRadius: 8,
		height: 55,
	},
	inpuBoxFocused: {
		borderColor: GLOBAL_STYLES.COLOR.PRIMARY,
	},
})

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
