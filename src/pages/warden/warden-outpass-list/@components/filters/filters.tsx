import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import SecrchIcon from '@app/assets/icons/search.svg'
import { Input } from '@app/components/ui/input'
import { OutpassStatus } from '@app/constants/enums'

import { styles } from './styles'

interface calendarSliderItem {
	id: number
	label: string
	isSelected: boolean
}

const calendarData: calendarSliderItem[] = [
	{
		id: 1,
		label: OutpassStatus.Pending,
		isSelected: true,
	},
	{
		id: 2,
		label: OutpassStatus.Rejected,
		isSelected: false,
	},
	{
		id: 3,
		label: OutpassStatus.Approved,
		isSelected: false,
	},
	{
		id: 4,
		label: OutpassStatus.Returned,
		isSelected: false,
	},
]

export const Filters = () => {
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
		<View style={styles.container}>
			<Input
				wrapperStyle={styles.searchInput}
				selectTextOnFocus={true}
				placeholder='Search by name or roll number'
				Icon={SecrchIcon}
				eraseButton
			/>
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
							<Text style={[styles.labelText, item.isSelected ? styles.selectedText : null]}>
								{item.label}
							</Text>
						</View>
					</TouchableOpacity>
				)}
				style={styles.sliderContainer}
				ItemSeparatorComponent={() => <View style={styles.itemSeperator}></View>}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	)
}
