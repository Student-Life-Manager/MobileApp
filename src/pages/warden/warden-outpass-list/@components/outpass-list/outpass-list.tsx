import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import ChevronRight from '@app/assets/icons/chevron-right.svg'
import { OutpassStatus } from '@app/constants/enums'

import { styles } from './styles'

const outpassList = [
	{
		date: '2021-09-01',
		createdAt: '12:30 PM',
		studentName: 'Pulkit',
		rollNumber: 'AP19110010491',
		status: OutpassStatus.Pending,
	},
	{
		date: '2021-09-01',
		createdAt: '8:20 AM',
		studentName: 'Prathyusha',
		rollNumber: 'AP19110010494',
		status: OutpassStatus.Approved,
	},
	{
		date: '2021-09-01',
		createdAt: '2:00 PM',
		studentName: 'Nikita',
		rollNumber: 'AP19110010460',
		status: OutpassStatus.Rejected,
	},
	{
		date: '2021-09-01',
		createdAt: '2:00 PM',
		studentName: 'Adithya',
		rollNumber: 'AP19110010540',
		status: OutpassStatus.Rejected,
	},
	{
		date: '2021-09-01',
		createdAt: '12:30 PM',
		studentName: 'Pulkit',
		rollNumber: 'AP19110010491',
		status: OutpassStatus.Pending,
	},
	{
		date: '2021-09-01',
		createdAt: '8:20 AM',
		studentName: 'Prathyusha',
		rollNumber: 'AP19110010494',
		status: OutpassStatus.Approved,
	},
	{
		date: '2021-09-01',
		createdAt: '2:00 PM',
		studentName: 'Nikita',
		rollNumber: 'AP19110010460',
		status: OutpassStatus.Rejected,
	},
	{
		date: '2021-09-01',
		createdAt: '2:00 PM',
		studentName: 'Adithya',
		rollNumber: 'AP19110010540',
		status: OutpassStatus.Rejected,
	},
]

export const OutpassList = () => {
	return (
		<View>
			{outpassList.map((item) => {
				return (
					<TouchableOpacity key={item.studentName}>
						<View style={styles.itemContainer}>
							<View style={styles.itemWrapper}>
								<Text style={styles.dateText}>{item.studentName}</Text>
								<Text style={styles.timeText}>{item.createdAt}</Text>
							</View>
							<View style={styles.itemWrapper}>
								<Text style={styles.rollNumber}>{item.rollNumber}</Text>
								<ChevronRight />
							</View>
						</View>
					</TouchableOpacity>
				)
			})}
		</View>
	)
}
