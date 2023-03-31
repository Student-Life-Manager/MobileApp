import { H3, YStack, Fieldset, Input, Label } from 'tamagui'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Text, StyleSheet } from 'react-native'
import { GLOBAL_STYLES } from '@app/constants/styles'
import { Select } from '@app/components/ui/select'

const styles = StyleSheet.create({
	errorText: {
		color: GLOBAL_STYLES.COLOR.RED,
		marginTop: 4,
	},
})

type FormValues = {
	towername: string
	roomnumber: string
}

export const HostelDetails = ({ navigation }) => {
	const initialValues: FormValues = {
		towername: '',
		roomnumber: '',
	}

	const validationSchema = Yup.object().shape({
		towername: Yup.string().required('Tower name is required'),

		roomnumber: Yup.string()
			.required('Room number is required')
			.length(3, 'Room number should be 3 digits long'),
	})

	const onSubmit = (values: FormValues) => {
		console.log(values)
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
									value={values.towername}
									onValueChange={handleChange('towername')}
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
								{errors.towername && touched.towername && (
									<Text style={styles.errorText}>{errors.towername}</Text>
								)}
							</Fieldset>
							<Fieldset>
								<Label>Room number</Label>
								<Input
									id='roomnumber'
									fontSize={16}
									height={50}
									keyboardType='numeric'
									value={values.roomnumber}
									onChangeText={handleChange('roomnumber')}
									onBlur={handleBlur('roomnumber')}
								/>
								{errors.roomnumber && touched.roomnumber && (
									<Text style={styles.errorText}>{errors.roomnumber}</Text>
								)}
							</Fieldset>
							<Fieldset marginTop='$4'>
								<Button
									variant='primary'
									onPress={() => {
										handleSubmit()
									}}
								>
									Continue
								</Button>
							</Fieldset>
						</YStack>
					)}
				</Formik>
			</YStack>
		</PageWrapper>
	)
}
