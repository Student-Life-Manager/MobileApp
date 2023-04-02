import { H3, YStack, Fieldset, Input, Label, TextArea } from 'tamagui'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Text, StyleSheet } from 'react-native'
import { GLOBAL_STYLES } from '@app/constants/styles'
import { Select } from '@app/components/ui/select'

GLOBAL_STYLES

const styles = StyleSheet.create({
	errorText: {
		color: GLOBAL_STYLES.COLOR.RED,
		marginTop: 4,
	},
})

type FormValues = {
	outDate: string
	returnDate: string
	outTime: string
	location: string
	reason: string
}
export const OutpassDetails = ({ navigation }) => {
	const initialValues: FormValues = {
		outDate: '',
		returnDate: '',
		outTime: '',
		location: '',
		reason: '',
	}

	const validationSchema = Yup.object({
		outDate: Yup.string()
			.required('Out date is required')
			.matches(
				/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/,
				'Enter valid date',
			),
		returnDate: Yup.string()
			.required('Return date is required')
			.matches(
				/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/,
				'Enter valid date',
			),
		outTime: Yup.string()
			.required('Out time is required')
			.matches(/^((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))$/, 'Enter valid time'),
		location: Yup.string()
			.required('Location is required')
			.min(3, 'Location has to be atleast 3 characters long')
			.max(25, 'Location cannot be longer than 25 characters')
			.matches(/^[A-Za-z\s]+$/, 'Location should only contain letters and spaces'),
		reason: Yup.string().required('Reason is required'),
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
				<H3>Enter outpass details</H3>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					{({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
						<YStack space='$4'>
							<Fieldset>
								<Label>Out date</Label>
								<Input
									id='outDate'
									fontSize={16}
									height={50}
									placeholder='DD/MM/YYYY'
									onChangeText={handleChange('outDate')}
									onBlur={handleBlur('outDate')}
									value={values.outDate}
								/>
								{errors.outDate && touched.outDate ? (
									<Text style={styles.errorText}>{errors.outDate}</Text>
								) : null}
							</Fieldset>
							<Fieldset>
								<Label>Expected return date</Label>
								<Input
									id='returnDate'
									fontSize={16}
									height={50}
									placeholder='DD/MM/YYYY'
									onChangeText={handleChange('returnDate')}
									onBlur={handleBlur('returnDate')}
									value={values.returnDate}
								/>
								{errors.returnDate && touched.returnDate ? (
									<Text style={styles.errorText}>{errors.returnDate}</Text>
								) : null}
							</Fieldset>
							<Fieldset>
								<Label>Out time</Label>
								<Input
									id='outTime'
									fontSize={16}
									height={50}
									placeholder='HH:MM am/pm'
									onChangeText={handleChange('outTime')}
									onBlur={handleBlur('outTime')}
									value={values.outTime}
								/>
								{errors.outTime && touched.outTime ? (
									<Text style={styles.errorText}>{errors.outTime}</Text>
								) : null}
							</Fieldset>
							<Fieldset>
								<Label>Location</Label>
								<Input
									id='location'
									fontSize={16}
									height={50}
									onChangeText={handleChange('location')}
									onBlur={handleBlur('location')}
									value={values.location}
								/>
								{errors.location && touched.location ? (
									<Text style={styles.errorText}>{errors.location}</Text>
								) : null}
							</Fieldset>
							<Fieldset>
								<Label>Reason</Label>
								<Select
									id='reason'
									name='Reson'
									value={values.reason}
									onValueChange={handleChange('reason')}
									data={[
										{ label: 'Leisure', id: 'leisure' },
										{ label: 'Home', id: 'home' },
										{ label: 'Academic', id: 'academic' },
										{ label: 'Other', id: 'other' },
									]}
								/>
								{errors.reason && touched.reason && (
									<Text style={styles.errorText}>{errors.reason}</Text>
								)}
							</Fieldset>
							<Fieldset>
								<Label>Other</Label>
								<TextArea
									minHeight={175}
									numberOfLines={4}
								/>
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
