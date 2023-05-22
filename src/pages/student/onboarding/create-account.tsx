import { Formik } from 'formik'
import { Text, View } from 'react-native'
import { H3, YStack, Fieldset, Label, Input } from 'tamagui'
import * as Yup from 'yup'

import CreateAccount from '@app/assets/images/create-account.svg'
import { useAuthentication } from '@app/components/hooks/authentication'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { globalStyles } from '@app/constants/styles'

type FormValues = {
	email: string
	password: string
	confirmPassword: string
}

const initialValues: FormValues = {
	email: '',
	password: '',
	confirmPassword: '',
}

export const CreateAccountPage = ({ navigation }) => {
	// const { register } = useAuthentication()

	const validationSchema = Yup.object({
		email: Yup.string(),
		// .required('Email is required')
		// .email('Invalid email address')
		// .matches(
		// 	/^[a-zA-Z0-9._%+-]+@srmap\.edu\.in$/,
		// 	'You can only use the official SRM AP email address',
		// ),
		password: Yup.string(),
		confirmPassword: Yup.string(),
	})

	const onSubmit = (values: FormValues) => {
		// register({
		// 	email: values.email,
		// 	password: values.password,
		// })
		// navigation.navigate('personal-details')
	}

	return (
		<PageWrapper>
			<View style={{ flex: 1, justifyContent: 'space-between' }}>
				<View
					style={{
						alignItems: 'center',
						justifyContent: 'space-between',
						paddingTop: 30,
					}}
				>
					<H3>Create Account</H3>
					<CreateAccount style={{ marginVertical: 20 }} />
					<Text style={{ textAlign: 'center' }}>
						Enter your SRM AP email address and create a password to get started
					</Text>
				</View>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					{({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
						<View>
							<View style={{ marginVertical: 40 }}>
								<Fieldset>
									<Label htmlFor='emaill'>Email</Label>
									<Input
										id='email'
										placeholder='student@srmap.edu.in'
										keyboardType='email-address'
										size='$5'
										onChangeText={handleChange('email')}
										onBlur={handleBlur('email')}
										value={values.email}
									/>
									{errors.email && touched.email ? (
										<Text style={globalStyles.errorText}>{errors.email}</Text>
									) : null}
								</Fieldset>
								<Fieldset>
									<Label htmlFor='password'>Password</Label>
									<Input
										id='password'
										secureTextEntry={true}
										size='$5'
										onChangeText={handleChange('password')}
										onBlur={handleBlur('password')}
										value={values.password}
									/>
									{errors.password && touched.password ? (
										<Text style={globalStyles.errorText}>{errors.password}</Text>
									) : null}
								</Fieldset>
								<Fieldset>
									<Label htmlFor='confirmPassword'>Confirm password</Label>
									<Input
										id='confirmPassword'
										secureTextEntry={true}
										size='$5'
										onChangeText={handleChange('confirmPassword')}
										onBlur={handleBlur('confirmPassword')}
										value={values.confirmPassword}
									/>
									{errors.confirmPassword && touched.confirmPassword ? (
										<Text style={globalStyles.errorText}>{errors.confirmPassword}</Text>
									) : null}
								</Fieldset>
							</View>
							<Button
								variant='primary'
								onPress={() => {
									handleSubmit()
								}}
							>
								Create Account
							</Button>
						</View>
					)}
				</Formik>
			</View>
		</PageWrapper>
	)
}
