import { Text, View } from 'react-native'
import { H3 } from 'tamagui'

import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'

import { CalendarSlider } from './@components/calendar-slider'
import { Filters } from './@components/filters'
import { OutpassList } from './@components/outpass-list'
import { styles } from './styles'

export const WardenOutpassList = ({ navigation }) => {
	return (
		<PageWrapper>
			<View>
				<H3>Outpass List</H3>
				<CalendarSlider />
				<Filters />
				<OutpassList />
			</View>
		</PageWrapper>
	)
}
