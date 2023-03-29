import { View, Text } from 'react-native'
import { SvgProps } from 'react-native-svg'

interface InfoListProps {
	listData: {
		title: string
		value: string
		icon: React.ComponentType<SvgProps>
	}[]
}

const renderIcon = (Icon: React.ComponentType<SvgProps>) => {
	return (
		<Icon
			height={28}
			width={28}
			style={{ marginRight: 16 }}
		/>
	)
}

export const InfoList = ({ listData }: InfoListProps) => {
	return (
		<View
			style={{
				marginVertical: 40,
				backgroundColor: 'white',
				shadowColor: '#DBCFE7',
				shadowOffset: { width: 2, height: 1 },
				shadowOpacity: 0.25,
				borderRadius: 16,
				paddingHorizontal: 20,
				paddingVertical: 12,
			}}
		>
			{listData.map((item) => (
				<View
					key={item.title}
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						marginVertical: 12,
					}}
				>
					{renderIcon(item.icon)}
					<View>
						<Text style={{ fontSize: 15, marginBottom: 4 }}>{item.title}</Text>
						<Text style={{ fontSize: 15, color: '#9A9A9A' }}>{item.value}</Text>
					</View>
				</View>
			))}
		</View>
	)
}
