import { Formik } from 'formik'
import { Text, Alert } from 'react-native'
import { H3, YStack, Fieldset, Input, Label } from 'tamagui'
import * as Yup from 'yup'

import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { Select } from '@app/components/ui/select'
import { globalStyles } from '@app/constants/styles'

interface FormValues {
	guardian: string
	warden: string
	alternatePhone: string
}

export const ContactDetails = ({ navigation }) => {
	const initialValues: FormValues = {
		guardian: '',
		warden: '',
		alternatePhone: '',
	}

	const validationSchema = Yup.object().shape({
		guardian: Yup.string().required('Select a guardian'),
		warden: Yup.string().required('Select your respective warden'),
		alternatePhone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number should be 10 digits long'),
	})

	const onSubmit = (values: FormValues) => {
		Alert.alert(
			'Request sent',
			"Your outpass request has been sent. You will receive a notification when it's approved",
			[{ text: 'Continue', onPress: () => navigation.navigate('student-home') }],
		)
	}

	return (
		<PageWrapper>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<H3>Enter contact details</H3>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					{({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
						<YStack space='$4'>
							<Fieldset>
								<Label>Guardian to verify</Label>
								<Select
									id='guardian'
									name='Guardian to verify'
									value={values.guardian}
									onValueChange={handleChange('guardian')}
									data={[
										{ label: 'Father', id: 'father' },
										{ label: 'Mother', id: 'mother' },
										{ label: 'Sibling', id: 'sibling' },
										{ label: 'Relative', id: 'relative' },
									]}
								/>
								{errors.guardian && touched.guardian && (
									<Text style={globalStyles.errorText}>{errors.guardian}</Text>
								)}
							</Fieldset>
							<Fieldset>
								<Label>Warden</Label>
								<Select
									id='warden'
									name='Warden'
									value={values.warden}
									onValueChange={handleChange('warden')}
									data={[
										{ label: 'Alekhya', id: 'alekhya' },
										{ label: 'Rama devi', id: 'ramadevi' },
										{ label: 'Nirmala Mary', id: 'nirmala' },
										{ label: 'Revathi', id: 'revathi' },
									]}
								/>
								{errors.warden && touched.warden && (
									<Text style={globalStyles.errorText}>{errors.warden}</Text>
								)}
							</Fieldset>
							<Fieldset>
								<Label>Alternate phone number(optional)</Label>
								<Input
									id='alternatePhone'
									fontSize={16}
									height={50}
									keyboardType='numeric'
									onChangeText={handleChange('alternatePhone')}
									onBlur={handleBlur('alternatePhone')}
									value={values.alternatePhone}
								/>
								{errors.alternatePhone && touched.alternatePhone ? (
									<Text style={globalStyles.errorText}>{errors.alternatePhone}</Text>
								) : null}
							</Fieldset>
							<Button
								style={{ marginTop: 24 }}
								variant='primary'
								onPress={() => {
									handleSubmit()
								}}
							>
								Submit request
							</Button>
						</YStack>
					)}
				</Formik>
			</YStack>
		</PageWrapper>
	)
}
