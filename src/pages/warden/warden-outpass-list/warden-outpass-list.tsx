import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { H3 } from 'tamagui'

import { useFetchAllOutpass } from '@app/api/hooks/useFetchAllOutpass'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { OutpassStatus } from '@app/constants/enums'
import { Outpass } from '@app/types/outpass'

import { CalendarSlider } from './@components/calendar-slider'
import { Filters } from './@components/filters'
import { OutpassList } from './@components/outpass-list'

export const WardenOutpassList = ({ navigation }) => {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date())
	const [searchTerm, setSearchTerm] = useState<string | null>(null)
	const [statusFilter, setStatusFilter] = useState<OutpassStatus>(OutpassStatus.Pending)
	const { data, isLoading, isSuccess, isRefetching } = useFetchAllOutpass()
	const [filteredList, setFilteredList] = useState<Outpass[]>(data)

	useEffect(() => {
		const dateFilteredList = data.filter((item, index) => {
			const outDate = new Date(item.outDate)
			const selectedDateStr = format(selectedDate, 'd')
			const outDateStr = format(outDate, 'd')
			return selectedDateStr === outDateStr
		})

		const statusFilteredList = dateFilteredList.filter((item) => {
			return item.status === statusFilter
		})

		setFilteredList(statusFilteredList)
	}, [selectedDate, searchTerm, statusFilter, isSuccess, isRefetching])

	const navigateToOutpassPage = (outpass: Outpass) => {
		navigation.navigate('warden-outpass-details', { outpass })
	}

	return (
		<PageWrapper>
			<View>
				<H3>Outpass List</H3>
				<CalendarSlider onChange={setSelectedDate} />
				<Filters
					onSearchChange={setSearchTerm}
					onStatusFilterChange={setStatusFilter}
				/>
				<OutpassList
					data={filteredList}
					isLoading={isLoading}
					onPress={navigateToOutpassPage}
				/>
			</View>
		</PageWrapper>
	)
}
