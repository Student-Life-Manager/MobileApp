import { format, addDays } from 'date-fns'
import { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { onChange } from 'react-native-reanimated'

import { styles } from './styles'

interface calendarSliderItem {
	id: number
	date: string
	day: string
	isSelected: boolean
	fullDate: Date
}

interface calendarSliderProps {
	onChange: (date: Date) => void
}

const calendarListData = Array.from({ length: 14 }, (_, index) => {
	const date = addDays(new Date(), index)
	const calendarItem: calendarSliderItem = {
		id: index,
		date: format(date, 'dd'),
		day: format(date, 'EEE'),
		isSelected: index === 0,
		fullDate: date,
	}
	return calendarItem
})

export const CalendarSlider = (props: calendarSliderProps) => {
	const { onChange } = props
	const [listItems, setListItems] = useState<calendarSliderItem[]>(calendarListData)

	const handleItemSelect = (id: number) => {
		const selectedIndex = listItems.findIndex((item) => {
			return item.id === id
		})
		const updatedList: calendarSliderItem[] = listItems.map((item) => {
			return {
				...item,
				isSelected: false,
			}
		})

		updatedList[selectedIndex].isSelected = true
		setListItems(updatedList)

		const selectedItem = listItems.find((item, _) => item.id === id)
		selectedItem && onChange(selectedItem.fullDate)
	}

	return (
		<FlatList
			horizontal
			data={listItems}
			renderItem={({ item }) => (
				<TouchableOpacity
					onPress={() => {
						handleItemSelect(item.id)
					}}
				>
					<View style={[styles.sliderItem, item.isSelected ? styles.sliderItemSelected : null]}>
						<Text style={[styles.dateText, item.isSelected ? styles.selectedText : null]}>
							{item.date}
						</Text>
						<Text style={[styles.dayText, item.isSelected ? styles.selectedText : null]}>
							{item.day}
						</Text>
					</View>
				</TouchableOpacity>
			)}
			style={styles.sliderContainer}
			ItemSeparatorComponent={() => <View style={styles.itemSeperator}></View>}
			showsHorizontalScrollIndicator={false}
		/>
	)
}
