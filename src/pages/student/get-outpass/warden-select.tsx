import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Adapt, Fieldset, Label, Select, Sheet, YStack } from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'

export function WardenSelect() {
	const [val, setVal] = useState('apple')
	return (
		<Fieldset>
			<Label htmlFor='food'>Warden</Label>
			<Select
				id='food'
				value={val}
				onValueChange={setVal}
			>
				<Select.Trigger
					id='food'
					iconAfter={ChevronDown}
				>
					<Select.Value placeholder='Something' />
				</Select.Trigger>

				<Adapt
					when='sm'
					platform='touch'
				>
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

				<Select.Content zIndex={200000}>
					<Select.ScrollUpButton
						ai='center'
						jc='center'
						pos='relative'
						w='100%'
						h='$5'
					>
						<YStack zi={10}>
							<ChevronUp size={20} />
						</YStack>
						<LinearGradient
							start={[0, 0]}
							end={[0, 1]}
							fullscreen
							colors={['#ffffff', '$backgroundTransparent']}
							br='$6'
						/>
					</Select.ScrollUpButton>

					<Select.Viewport minWidth={200}>
						<Select.Group space='$-0'>
							<Select.Label>Select warden</Select.Label>
							{items.map((item, i) => {
								return (
									<Select.Item
										index={i}
										key={item.warden}
										value={item.warden.toLowerCase()}
									>
										<Select.ItemText>{item.warden}</Select.ItemText>
										<Select.ItemIndicator ml='auto'>
											<Check size={16} />
										</Select.ItemIndicator>
									</Select.Item>
								)
							})}
						</Select.Group>
					</Select.Viewport>

					<Select.ScrollDownButton
						ai='center'
						jc='center'
						pos='relative'
						w='100%'
						h='$5'
					>
						<YStack zi={10}>
							<ChevronDown size={20} />
						</YStack>
						<LinearGradient
							start={[0, 0]}
							end={[0, 1]}
							fullscreen
							colors={['$backgroundTransparent', '#ffffff']}
							br='$6'
						/>
					</Select.ScrollDownButton>
				</Select.Content>
			</Select>
		</Fieldset>
	)
}

const items = [
	{ warden: 'Alekhya' },
	{ warden: 'Nirmala Mary' },
	{ warden: 'Rama Devi' },
	{ warden: 'Revati' },
]
