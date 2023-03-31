import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Adapt, Select as TamaguiSelect, Sheet, SelectProps } from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'

const items = [
	{ reason: 'Leisure' },
	{ reason: 'Home' },
	{ reason: 'Medical' },
	{ reason: 'Academic' },
	{ reason: 'Other' },
]

interface CustomSelectProps extends SelectProps {
	data: {
		id: string
		label: string
	}[]
}

export const Select = ({ data, name, id, ...props }: CustomSelectProps) => {
	// const [val, setVal] = useState('apple')

	return (
		<TamaguiSelect {...props}>
			<TamaguiSelect.Trigger
				id='food'
				iconAfter={ChevronDown}
				style={{ backgroundColor: '#fff' }}
				height={50}
			>
				<TamaguiSelect.Value />
			</TamaguiSelect.Trigger>

			<Adapt platform='touch'>
				<Sheet
					modal
					dismissOnSnapToBottom
				>
					<Sheet.Frame>
						<Sheet.ScrollView>
							<Adapt.Contents />
						</Sheet.ScrollView>
					</Sheet.Frame>
					<Sheet.Overlay />
				</Sheet>
			</Adapt>

			<TamaguiSelect.Content zIndex={200000}>
				<TamaguiSelect.Viewport>
					<TamaguiSelect.Group space='$-0'>
						<TamaguiSelect.Label>{name}</TamaguiSelect.Label>
						{data.map((item, i) => {
							return (
								<TamaguiSelect.Item
									index={i}
									key={item.id}
									value={item.id}
								>
									<TamaguiSelect.ItemText>{item.label}</TamaguiSelect.ItemText>
									<TamaguiSelect.ItemIndicator>
										<Check size={16} />
									</TamaguiSelect.ItemIndicator>
								</TamaguiSelect.Item>
							)
						})}
					</TamaguiSelect.Group>
				</TamaguiSelect.Viewport>
			</TamaguiSelect.Content>
		</TamaguiSelect>
	)
}
