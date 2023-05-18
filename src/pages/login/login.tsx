import { Formik } from 'formik'
import { Text } from 'react-native'
import { Config } from 'react-native-config'
import { H3, YStack, Fieldset, Input, Label } from 'tamagui'
import * as Yup from 'yup'

import LoginCover from '@app/assets/images/login-cover.svg'
import { useAuthentication } from '@app/components/hooks/authentication'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { globalStyles } from '@app/constants/styles'

type FormValues = {
	email: string
	password: string
}

export const Login = ({ navigation }) => {
	const { login, logout } = useAuthentication()
	const initialValues: FormValues = {
		email: '',
		password: '',
	}

	const validationSchema = Yup.object({
		email: Yup.string(),
		// .required('Email is required')
		// .email('Invalid email address')
		// .matches(
		// 	/^[a-zA-Z0-9._%+-]+@srmap\.edu\.in$/,
		// 	'You can only use the official SRM AP email address',
		// ),
		password: Yup.string(),
	})

	const onSubmit = (values: FormValues) => {
		// navigation.navigate('create-account')
		console.log('submitted', values)

		login({
			email: values.email,
			password: values.password,
		})

		logout()
	}

	const navigateToCreateAccount = () => {
		navigation.navigate('create-account')
	}

	return (
		<PageWrapper>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<YStack
					padding='$3'
					alignItems='center'
				>
					<LoginCover />
				</YStack>
				<H3>Sign in</H3>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					{({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
						<YStack space='$2'>
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
									placeholder='***'
									size='$5'
									onChangeText={handleChange('password')}
									onBlur={handleBlur('password')}
									value={values.password}
								/>
								{errors.password && touched.password ? (
									<Text style={globalStyles.errorText}>{errors.password}</Text>
								) : null}
							</Fieldset>
							<Fieldset paddingTop='$6'>
								<Button
									variant='primary'
									size='$5'
									onPress={() => {
										handleSubmit()
									}}
								>
									Next
								</Button>
							</Fieldset>
							{/* <Text
								style={{
									textAlign: 'center',
									marginVertical: 16,
								}}
							>
								Or
							</Text>
							<Button
								variant='secondary'
								size='$5'
								onPress={navigateToCreateAccount}
							>
								Create account
							</Button> */}
						</YStack>
					)}
				</Formik>
			</YStack>
		</PageWrapper>
	)
}
