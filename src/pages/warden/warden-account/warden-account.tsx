import { Formik } from 'formik'
import { Text } from 'react-native'
import { H3, YStack, Fieldset, Input, Label } from 'tamagui'
import * as Yup from 'yup'

import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { Select } from '@app/components/ui/select'
import { globalStyles } from '@app/constants/styles'

type FormValues = {
	firstName: string
	lastName: string
	phoneNumber: string
	towerName: string
}
export const WardenAccount = ({ navigation }) => {
	const initialValues: FormValues = {
		firstName: '',
		lastName: '',
		phoneNumber: '',
		towerName: '',
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

		phoneNumber: Yup.string()
			.required('Phone number is required')
			.matches(/^[0-9]{10}$/, 'Phone number should be 10 digits long'),

		towerName: Yup.string().required('Tower name is required'),
	})

	const onSubmit = (values: FormValues) => {
		console.log(values)
	}

	return (
		<PageWrapper>
			<YStack maxWidth={600}>
				<H3>Create warden account</H3>
				<Formik
					initialValues={initialValues}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
				>
					{({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
						<YStack space='$4'>
							<Fieldset>
								<Label>First name</Label>
								<Input
									id='firstname'
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
									id='lastname'
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
								<Label>Phone number</Label>
								<Input
									id='phonenumber'
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
