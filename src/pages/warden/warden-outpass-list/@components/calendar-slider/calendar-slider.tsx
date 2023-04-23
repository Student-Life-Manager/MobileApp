import { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

import { styles } from './styles'

interface calendarSliderItem {
	id: number
	date: string
	day: string
	isSelected: boolean
}

const calendarData: calendarSliderItem[] = [
	{
		id: 1,
		date: '15',
		day: 'Mon',
		isSelected: false,
	},
	{
		id: 2,
		date: '16',
		day: 'Tue',
		isSelected: true,
	},
	{
		id: 3,
		date: '17',
		day: 'Wed',
		isSelected: false,
	},
	{
		id: 4,
		date: '18',
		day: 'Thu',
		isSelected: false,
	},
	{
		id: 5,
		date: '19',
		day: 'Fri',
		isSelected: false,
	},
	{
		id: 6,
		date: '20',
		day: 'Sat',
		isSelected: false,
	},
	{
		id: 7,
		date: '21',
		day: 'Sun',
		isSelected: false,
	},
]

export const CalendarSlider = () => {
	const [listItems, setListItems] = useState<calendarSliderItem[]>(calendarData)

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
