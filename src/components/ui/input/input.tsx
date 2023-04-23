import { useState } from 'react'
import {
	View,
	TextInputProps,
	TextInput,
	TouchableOpacity,
	TextStyle,
	ViewStyle,
} from 'react-native'
import { SvgProps } from 'react-native-svg'

import CrossIcon from '@app/assets/icons/cross.svg'

import { styles } from './styles'

interface InputProps extends TextInputProps {
	Icon?: React.FC<SvgProps>
	eraseButton?: boolean
	inputStyle?: TextStyle
	wrapperStyle?: ViewStyle
}

export const Input = (props: InputProps) => {
	const { Icon, eraseButton = false, inputStyle, wrapperStyle, onChangeText } = props

	const [inputValue, setInputValue] = useState<string | undefined>(undefined)

	const handleChange = (value: string) => {
		setInputValue(value)
	}

	const handleClearInput = () => {
		setInputValue('')
	}

	return (
		<View style={[styles.inputWrapper, eraseButton ? styles.eraseMod : null, wrapperStyle]}>
			{Icon ? <Icon /> : null}
			<TextInput
				{...props}
				onChangeText={(value) => {
					handleChange(value)
				}}
				value={inputValue}
				style={[styles.inputBox, Icon ? styles.inputAdornment : null, inputStyle]}
			/>

			{eraseButton ? (
				<TouchableOpacity
					onPress={handleClearInput}
					style={styles.eraseButtonWrapper}
				>
					<CrossIcon
						height={20}
						width={20}
					/>
				</TouchableOpacity>
			) : null}
		</View>
	)
}
