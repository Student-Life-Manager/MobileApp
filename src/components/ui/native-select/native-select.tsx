import { ChevronDown } from '@tamagui/lucide-icons'
import RNPickerSelect from 'react-native-picker-select'

import { styles } from './styles'

interface NativeSelectOption {
	label: string
	value: string
}

interface NativeSelectProps {
	id: string
	onChange: (field: string, value: any, shouldValidate?: boolean | undefined) => void
	options: NativeSelectOption[]
}

export const NativeSelect = (props: NativeSelectProps) => {
	const { id, onChange, options } = props

	const handleValueChange = (value: string) => {
		onChange(id, value)
	}

	return (
		<RNPickerSelect
			onValueChange={handleValueChange}
			items={options}
			style={{
				viewContainer: styles.viewContainer,
				inputIOS: styles.inputWrapper,
			}}
		/>
	)
}
