import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import SecrchIcon from '@app/assets/icons/search.svg'
import { Input } from '@app/components/ui/input'
import { OutpassStatus } from '@app/constants/enums'

import { styles } from './styles'

interface statusSliderProps {
	onSearchChange: (searchTerm: string) => void
	onStatusFilterChange: (statusFilter: OutpassStatus) => void
}

interface statusSliderItem {
	id: number
	label: string
	value: OutpassStatus
	isSelected: boolean
}

const statusItems: statusSliderItem[] = [
	{
		id: 1,
		label: 'Pending',
		value: OutpassStatus.Pending,
		isSelected: true,
	},
	{
		id: 2,
		label: 'Approved',
		value: OutpassStatus.Approved,
		isSelected: false,
	},
	{
		id: 3,
		label: 'Returned',
		value: OutpassStatus.Returned,
		isSelected: false,
	},
	{
		id: 4,
		label: 'Rejected',
		value: OutpassStatus.Rejected,
		isSelected: false,
	},
]

export const Filters = (props: statusSliderProps) => {
	const { onSearchChange, onStatusFilterChange } = props
	const [listItems, setListItems] = useState<statusSliderItem[]>(statusItems)

	const handleItemSelect = (id: number) => {
		const selectedIndex = listItems.findIndex((item) => {
			return item.id === id
		})

		const updatedList: statusSliderItem[] = listItems.map((item) => {
			return {
				...item,
				isSelected: false,
			}
		})
		updatedList[selectedIndex].isSelected = true
		setListItems(updatedList)

		const selectedItem = listItems.find((item, _) => item.id === id)
		selectedItem && onStatusFilterChange(selectedItem.value)
	}

	return (
		<View style={styles.container}>
			<Input
				wrapperStyle={styles.searchInput}
				selectTextOnFocus={true}
				placeholder='Search by name or roll number'
				Icon={SecrchIcon}
				onChangeText={onSearchChange}
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
