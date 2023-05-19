import { Formik } from 'formik'
import { Text } from 'react-native'
import { H3, YStack, Fieldset, Input, Label } from 'tamagui'
import * as Yup from 'yup'

import { useAuthentication } from '@app/components/hooks/authentication'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { globalStyles } from '@app/constants/styles'

type FormValues = {
	firstName: string
	lastName: string
	rollNo: string
	phoneNumber: string
	emergencyPhoneNumber: string
}

export const PersonalDetails = ({ navigation }) => {
	const { logout } = useAuthentication()
	const initialValues: FormValues = {
		firstName: '',
		lastName: '',
		rollNo: '',
		phoneNumber: '',
		emergencyPhoneNumber: '',
	}

	const validationSchema = Yup.object({
		firstName: Yup.string(),
		// .required('First name is required')
		// .min(3, 'First name has to be at least 3 characters long')
		// .max(15, 'First name cannot be longer than 15 characters')
		// .matches(/^[A-Za-z\s]+$/, 'First name should only contain letters and spaces'),

		lastName: Yup.string(),
		// .required('Last name is required')
		// .min(3, 'Last name has to be at least 3 characters long')
		// .max(15, 'Last name cannot be longer than 15 characters')
		// .matches(/^[A-Za-z\s]+$/, 'Last name should only contain letters and spaces'),

		rollNo: Yup.string(),
		// .required('Roll number is required')
		// .matches(/^AP\d{11}$/, 'Roll number should start with AP'),

		phoneNumber: Yup.string(),
		// .required('Phone number is required')
		// .matches(/^[0-9]{10}$/, 'Phone number should be 10 digits long'),

		emergencyPhoneNumber: Yup.string(),
		// .matches(
		// 	/^[0-9]{10}$/,
		// 	'Phone number should be 10 digits long',
		// ),
	})

	const handleFormSubmit = (values: FormValues) => {
		navigation.navigate('verifyOtp')
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
									fontSize={16}
									height={50}
									onChangeText={handleChange('firstName')}
									onBlur={handleBlur('firstName')}
									value={values.firstName}
								/>
								{errors.firstName && touched.firstName ? (
									<Text style={globalStyles.errorText}>{errors.firstName}</Text>
								) : null}
							</Fieldset>
							<Fieldset>
								<Label>Last name</Label>
								<Input
									id='lastName'
									fontSize={16}
									height={50}
									onChangeText={handleChange('lastName')}
									onBlur={handleBlur('lastName')}
									value={values.lastName}
								/>
								{errors.lastName && touched.lastName ? (
									<Text style={globalStyles.errorText}>{errors.lastName}</Text>
								) : null}
							</Fieldset>
							<Fieldset>
								<Label>Roll number</Label>
								<Input
									id='rollNo'
									fontSize={16}
									height={50}
									onChangeText={handleChange('rollNo')}
									onBlur={handleBlur('rollNo')}
									value={values.rollNo}
								/>
								{errors.rollNo && touched.rollNo ? (
									<Text style={globalStyles.errorText}>{errors.rollNo}</Text>
								) : null}
							</Fieldset>
							<Fieldset>
								<Label>Phone number</Label>
								<Input
									id='phoneNumber'
									fontSize={16}
									height={50}
									keyboardType='numeric'
									onChangeText={handleChange('phoneNumber')}
									onBlur={handleBlur('phoneNumber')}
									value={values.phoneNumber}
								/>
								{errors.phoneNumber && touched.phoneNumber ? (
									<Text style={globalStyles.errorText}>{errors.phoneNumber}</Text>
								) : null}
							</Fieldset>
							<Fieldset>
								<Label>Emergency phone number (optional)</Label>
								<Input
									id='emergencyPhoneNumber'
									fontSize={16}
									height={50}
									keyboardType='numeric'
									onChangeText={handleChange('emergencyPhoneNumber')}
									onBlur={handleBlur('emergencyPhoneNumber')}
									value={values.emergencyPhoneNumber}
								/>
								{errors.emergencyPhoneNumber && touched.emergencyPhoneNumber ? (
									<Text style={globalStyles.errorText}>{errors.emergencyPhoneNumber}</Text>
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
							<Button
								style={{ marginTop: 12 }}
								variant='secondary'
								onPress={() => {
									// logout()
									navigation.navigate('login')
								}}
							>
								Logout
							</Button>
						</YStack>
					)}
				</Formik>
			</YStack>
		</PageWrapper>
	)
}
