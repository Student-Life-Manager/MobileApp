import { Formik } from 'formik'
import { Text } from 'react-native'
import { H3, YStack, Fieldset, Input, Label } from 'tamagui'
import * as Yup from 'yup'

import LoginCover from '@app/assets/images/login-cover.svg'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { globalStyles } from '@app/constants/styles'

type FormValues = {
	email: string
}

export const Login = ({ navigation }) => {
	const initialValues: FormValues = {
		email: '',
	}

	const validationSchema = Yup.object({
		email: Yup.string(),
		// .required('Email is required')
		// .email('Invalid email address')
		// .matches(
		// 	/^[a-zA-Z0-9._%+-]+@srmap\.edu\.in$/,
		// 	'You can only use the official SRM AP email address',
		// ),
	})

	const onSubmit = (values: FormValues) => {
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
						<YStack space='$4'>
							<Fieldset>
								<Label htmlFor='emaill'>Email</Label>
								<Input
									id='email'
									placeholder='student@srmap.edu.in'
									size='$5'
									onChangeText={handleChange('email')}
									onBlur={handleBlur('email')}
									value={values.email}
								/>
								{errors.email && touched.email ? (
									<Text style={globalStyles.errorText}>{errors.email}</Text>
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
									Get verification code
								</Button>
							</Fieldset>
						</YStack>
					)}
				</Formik>
			</YStack>
		</PageWrapper>
	)
}
