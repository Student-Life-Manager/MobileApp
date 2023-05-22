import { format } from 'date-fns'
import { Formik } from 'formik'
import { Text, View } from 'react-native'
import { H3, Input, Label, TextArea } from 'tamagui'
import * as Yup from 'yup'

import { Button } from '@app/components/ui/button'
import { DateTimePicker } from '@app/components/ui/date-time-picker'
import { NativeSelect } from '@app/components/ui/native-select'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { DateTimeFormat } from '@app/constants/formats'
import { globalStyles } from '@app/constants/styles'

import { styles } from './styles'

export interface OutpassDetailsFormValues {
	outDate: string
	returnDate: string
	outTime: string
	location: string
	reason: string
}

export const OutpassDetails = ({ navigation }) => {
	const initialValues: OutpassDetailsFormValues = {
		outDate: format(new Date(), DateTimeFormat.DATE.OUTPASS),
		returnDate: format(new Date(), DateTimeFormat.DATE.OUTPASS),
		outTime: '04:00:00',
		location: '',
		reason: '',
	}

	const validationSchema = Yup.object({
		outDate: Yup.date(),
		// .required('Return date is required'),
		returnDate: Yup.date(),
		// .required('Return date is required')
		// .test({
		// 	name: 'return-date',
		// 	message: 'You can not return before you leave',
		// 	test: function (value) {
		// 		return isAfter(value, this.parent.outDate) || isEqual(value, this.parent.outDate)
		// 	},
		// }),
		location: Yup.string(),
		// .required('Location is required')
		// .min(3, 'Location has to be atleast 3 characters long')
		// .max(25, 'Location cannot be longer than 25 characters')
		// .matches(/^[A-Za-z\s]+$/, 'Location should only contain letters and spaces'),
		reason: Yup.string(),
		// .required('Reason is required'),
	})

	const onSubmit = (values: OutpassDetailsFormValues) => {
		navigation.navigate('contact-details', { outpassDetails: values })
	}

	const maxDate = new Date()
	maxDate.setDate(maxDate.getDate() + 14)

	return (
		<PageWrapper>
			<View style={styles.pageContainer}>
				<H3>Enter outpass details</H3>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					{({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
						<View style={styles.formContainer}>
							<View>
								<View style={styles.fieldWrapper}>
									<Label>Out date</Label>
									<DateTimePicker
										id='outDate'
										dateDisplayFormat={DateTimeFormat.DATE.LONG}
										dateReturnFormat={DateTimeFormat.DATE.OUTPASS}
										type='date'
										onChange={setFieldValue}
										maxDate={maxDate}
										minDate={new Date()}
										initialDate={new Date()}
									/>
									{errors.outDate && touched.outDate ? (
										<Text style={globalStyles.errorText}>{errors.outDate}</Text>
									) : null}
								</View>
								<View style={styles.fieldWrapper}>
									<Label>Expected return date</Label>
									<DateTimePicker
										id='returnDate'
										dateDisplayFormat={DateTimeFormat.DATE.LONG}
										dateReturnFormat={DateTimeFormat.DATE.OUTPASS}
										type='date'
										onChange={setFieldValue}
										minDate={new Date()}
									/>
									{errors.returnDate && touched.returnDate ? (
										<Text style={globalStyles.errorText}>{errors.returnDate}</Text>
									) : null}
								</View>
								{/* <View>
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
									<Text style={globalStyles.errorText}>{errors.outTime}</Text>
								) : null}
							</View> */}
								<View style={styles.fieldWrapper}>
									<Label>Reason</Label>
									<NativeSelect
										id='reason'
										onChange={setFieldValue}
										options={[
											{ label: 'Leisure', value: 'leisure' },
											{ label: 'Home', value: 'home' },
											{ label: 'Academic', value: 'academic' },
											{ label: 'Medical', value: 'medical' },
											{ label: 'Other', value: 'other' },
										]}
									/>
									{errors.reason && touched.reason && (
										<Text style={globalStyles.errorText}>{errors.reason}</Text>
									)}
								</View>
								<View style={styles.fieldWrapper}>
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
										<Text style={globalStyles.errorText}>{errors.location}</Text>
									) : null}
								</View>
								{values.reason === 'other' ? (
									<View style={styles.fieldWrapper}>
										<Label>Other</Label>
										<TextArea
											minHeight={175}
											numberOfLines={4}
										/>
									</View>
								) : null}
							</View>
							<Button
								style={{ marginTop: 24 }}
								variant='primary'
								onPress={() => {
									handleSubmit()
								}}
							>
								Continue
							</Button>
						</View>
					)}
				</Formik>
			</View>
		</PageWrapper>
	)
}
