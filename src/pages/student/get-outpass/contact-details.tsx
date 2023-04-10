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
		console.log(values)
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
									<Text style={styles.errorText}>{errors.guardian}</Text>
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
									<Text style={styles.errorText}>{errors.warden}</Text>
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
									<Text style={styles.errorText}>{errors.alternatePhone}</Text>
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