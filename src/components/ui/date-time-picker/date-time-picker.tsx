import { format } from 'date-fns'
import { useState } from 'react'
import { Text, View } from 'react-native'
import DatePicker from 'react-native-modal-datetime-picker'

import { DateTimeFormat } from '@app/constants/formats'

import { styles } from './styles'

interface DateTimePickerProps {
	id: string
	onChange: (field: string, value: any, shouldValidate?: boolean | undefined) => void
	dateDisplayFormat?: string
	dateReturnFormat?: string
	type: 'date' | 'datetime' | 'time'
	minDate?: Date
	maxDate?: Date
	initialDate?: Date
}

export const DateTimePicker = (props: DateTimePickerProps) => {
	const {
		id,
		onChange,
		dateDisplayFormat = DateTimeFormat.DATE.SHORT,
		dateReturnFormat = DateTimeFormat.DATE.SHORT,
		type,
		maxDate,
		minDate,
		initialDate,
	} = props
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
	const [dateTimeValue, setDateTimeValue] = useState<Date | undefined>(initialDate)

	const showDatePicker = () => {
		setDatePickerVisibility(true)
	}

	const hideDatePicker = () => {
		setDatePickerVisibility(false)
	}

	const handleConfirm = (date: Date) => {
		const dateString = format(date, dateReturnFormat)
		setDateTimeValue(date)
		onChange(id, dateString)
		hideDatePicker()
	}

	return (
		<View>
			<DatePicker
				isVisible={isDatePickerVisible}
				mode={type}
				onConfirm={handleConfirm}
				onCancel={hideDatePicker}
				display='inline'
				date={dateTimeValue}
				minimumDate={minDate}
				maximumDate={maxDate}
			/>
			<View
				style={styles.inputWrapper}
				onTouchEnd={showDatePicker}
			>
				<Text style={styles.inputText}>
					{dateTimeValue ? format(dateTimeValue, dateDisplayFormat) : ''}
				</Text>
			</View>
		</View>
	)
}
