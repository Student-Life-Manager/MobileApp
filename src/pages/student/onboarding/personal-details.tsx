import { H3, YStack, Fieldset, Input, Label } from 'tamagui'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Text, StyleSheet } from 'react-native'
import { GLOBAL_STYLES } from '@app/constants/styles'
GLOBAL_STYLES

const styles = StyleSheet.create({
	errorText: {
		color: GLOBAL_STYLES.COLOR.RED,
		marginTop: 4,
	},
})

type FormValues = {
	firstName: string
	lastName: string
	rollNo: string
	phoneNumber: string
	emergencyPhoneNumber: string
}

export const PersonalDetails = ({ navigation }) => {
	const initialValues: FormValues = {
		firstName: '',
		lastName: '',
		rollNo: '',
		phoneNumber: '',
		emergencyPhoneNumber: '',
	}

	const validationSchema = Yup.object({
		firstName: Yup.string()
			.required('First name is required')
			.min(3, 'First name has to be at least 3 characters long')
			.max(15, 'First name cannot be longer than 15 characters')
			.matches(/^[A-Za-z\s]+$/, 'First name should only contain letters and spaces'),

		lastName: Yup.string()
			.required('Last name is required')
			.min(3, 'Last name has to be at least 3 characters long')
			.max(15, 'Last name cannot be longer than 15 characters')
			.matches(/^[A-Za-z\s]+$/, 'Last name should only contain letters and spaces'),

		rollNo: Yup.string()
			.required('Roll number is required')
			.matches(/^AP\d{11}$/, 'Roll number should match the format AP###########'),

		phoneNumber: Yup.string()
			.required('Phone number is required')
			.matches(/^[0-9]{10}$/, 'Phone number should be 10 digits long'),

		emergencyPhoneNumber: Yup.string().matches(
			/^[0-9]{10}$/,
			'Phone number should be 10 digits long',
		),
	})

	const handleFormSubmit = (values: FormValues) => {
		console.log(values)
	}

	return (
		<PageWrapper>
			<YStack maxWidth={600}>
				<H3>Personal details</H3>
				<Formik
					initialValues={initialValues}
					onSubmit={handleFormSubmit}
					validationSchema={validationSchema}
				>
					{({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
						<YStack space='$4'>
							<Fieldset>
								<Label>First name</Label>
								<Input
									id='firstName'
									size='$5'
									onChangeText={handleChange('firstName')}
									onBlur={handleBlur('firstName')}
									value={values.firstName}
								/>
								{errors.firstName && touched.firstName ? (
									<Text style={styles.errorText}>{errors.firstName}</Text>
								) : null}
							</Fieldset>
							<Fieldset>
								<Label>Last name</Label>
								<Input
									id='lastName'
									size='$5'
									onChangeText={handleChange('lastName')}
									onBlur={handleBlur('lastName')}
									value={values.lastName}
								/>
								{errors.lastName && touched.lastName ? (
									<Text style={styles.errorText}>{errors.lastName}</Text>
								) : null}
							</Fieldset>
							<Fieldset>
								<Label>Roll number</Label>
								<Input
									id='rollNo'
									size='$5'
									onChangeText={handleChange('rollNo')}
									onBlur={handleBlur('rollNo')}
									value={values.rollNo}
								/>
								{errors.rollNo && touched.rollNo ? (
									<Text style={styles.errorText}>{errors.rollNo}</Text>
								) : null}
							</Fieldset>
							<Fieldset>
								<Label>Phone number</Label>
								<Input
									id='phoneNumber'
									size='$5'
									keyboardType='numeric'
									onChangeText={handleChange('phoneNumber')}
									onBlur={handleBlur('phoneNumber')}
									value={values.phoneNumber}
								/>
								{errors.phoneNumber && touched.phoneNumber ? (
									<Text style={styles.errorText}>{errors.phoneNumber}</Text>
								) : null}
							</Fieldset>
							<Fieldset>
								<Label>Emergency phone number (optional)</Label>
								<Input
									id='emergencyPhoneNumber'
									size='$5'
									keyboardType='numeric'
									onChangeText={handleChange('emergencyPhoneNumber')}
									onBlur={handleBlur('emergencyPhoneNumber')}
									value={values.emergencyPhoneNumber}
								/>
								{errors.emergencyPhoneNumber && touched.emergencyPhoneNumber ? (
									<Text style={styles.errorText}>{errors.emergencyPhoneNumber}</Text>
								) : null}
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
