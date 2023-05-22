import { format } from 'date-fns'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import ChevronRight from '@app/assets/icons/chevron-right.svg'
import { Loader } from '@app/components/ui/loader'
import { OutpassStatus } from '@app/constants/enums'
import { Outpass } from '@app/types/outpass'

import { styles } from './styles'

export interface outpassListItemProps {
	uuid: string
	date: string
	createdAt: string
	studentName: string
	rollNumber: string
	status: OutpassStatus
}

interface outpassListProps {
	data: outpassListItemProps[]
	isLoading: boolean
	onPress: (outpassUuid: string) => void
}

export const OutpassList = (props: outpassListProps) => {
	const { data, isLoading, onPress } = props

	// const onCardPress = ()=>{

	// }

	return (
		<View>
			{isLoading ? (
				<Loader />
			) : data.length === 0 ? (
				<View style={styles.emptyStateContainer}>
					<Text style={styles.emptyStateText}>No outpasses found</Text>
					<Text style={styles.emptyStateText}>Please change the filter and try again</Text>
				</View>
			) : (
				data.map((item) => {
					return (
						<TouchableOpacity
							key={item.uuid}
							onPress={() => {
								onPress(item.uuid)
							}}
						>
							<View style={styles.itemContainer}>
								<View style={styles.itemWrapper}>
									<Text style={styles.dateText}>{item.studentName}</Text>
									<Text style={styles.timeText}>
										{format(new Date(item.createdAt), 'hh:mm aa')}
									</Text>
								</View>
								<View style={styles.itemWrapper}>
									<Text style={styles.rollNumber}>{item.rollNumber}</Text>
									<ChevronRight />
								</View>
							</View>
						</TouchableOpacity>
					)
				})
			)}
		</View>
	)
}
