import { Formik } from 'formik'
import { Text } from 'react-native'
import { H3, YStack, Fieldset, Input, Label } from 'tamagui'
import * as Yup from 'yup'

import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { Select } from '@app/components/ui/select'
import { globalStyles } from '@app/constants/styles'

type FormValues = {
	towerName: string
	roomNumber: string
}

export const HostelDetails = ({ navigation }) => {
	const initialValues: FormValues = {
		towerName: '',
		roomNumber: '',
	}

	const validationSchema = Yup.object().shape({
		towerName: Yup.string().required('Tower name is required'),

		roomNumber: Yup.string()
			.required('Room number is required')
			.length(3, 'Room number should be 3 digits long'),
	})

	const onSubmit = (values: FormValues) => {
		console.log(values)
		navigation.navigate('academic-details')
	}

	return (
		<PageWrapper>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<H3>Hostel details</H3>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					{({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
						<YStack space='$4'>
							<Fieldset>
								<Label>Tower name</Label>
								<Select
									id='towerName'
									name='Tower name'
									value={values.towerName}
									onValueChange={handleChange('towerName')}
									data={[
										{ label: 'Tower A', id: 'towerA' },
										{ label: 'Tower B', id: 'towerB' },
										{ label: 'Tower C', id: 'towerC' },
										{ label: 'Tower D', id: 'towerD' },
										{ label: 'Tower E', id: 'towerE' },
										{ label: 'Tower F', id: 'towerF' },
										{ label: 'Tower G', id: 'towerG' },
										{ label: 'Tower H', id: 'towerH' },
									]}
								/>
								{errors.towerName && touched.towerName && (
									<Text style={globalStyles.errorText}>{errors.towerName}</Text>
								)}
							</Fieldset>
							<Fieldset>
								<Label>Room number</Label>
								<Input
									id='roomNumber'
									fontSize={16}
									height={50}
									keyboardType='numeric'
									value={values.roomNumber}
									onChangeText={handleChange('roomNumber')}
									onBlur={handleBlur('roomNumber')}
								/>
								{errors.roomNumber && touched.roomNumber && (
									<Text style={globalStyles.errorText}>{errors.roomNumber}</Text>
								)}
							</Fieldset>
							<Button
								style={{ marginTop: 24 }}
								variant='primary'
								onPress={() => {
									handleSubmit()
								}}
							>
								Continue
							</Button>
						</YStack>
					)}
				</Formik>
			</YStack>
		</PageWrapper>
	)
}
