import { BottomSheetTextInput } from '@gorhom/bottom-sheet'
import { Formik } from 'formik'
import { View, Text } from 'react-native'
import { Fieldset, H4, Label } from 'tamagui'
import * as Yup from 'yup'

import { useGlobalModal } from '@app/components/hooks/global-modal'
import { Button } from '@app/components/ui/button'
import { globalStyles } from '@app/constants/styles'

import { styles } from './styles'

interface FormValues {
	phoneNumber: string
	relation: string
}

export const AddGuardianModal = () => {
	const { closeModal } = useGlobalModal()

	const initialValues: FormValues = {
		phoneNumber: '',
		relation: '',
	}

	const validationSchema = Yup.object().shape({
		relation: Yup.string().required('This field can not be empty'),
		phoneNumber: Yup.string()
			.required('This field can not be empty')
			.matches(/^[0-9]{10}$/, 'Phone number should be 10 digits long'),
	})

	const handleSubmit = (values: FormValues) => {
		console.log('new form values', values)
	}

	return (
		<View>
			<H4 style={styles.heading}>Add new guardian contact</H4>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
					<View>
						<Fieldset>
							<Label>Phone number</Label>
							<BottomSheetTextInput
								value={values.phoneNumber}
								style={styles.textInput}
								onChangeText={handleChange('phoneNumber')}
								onBlur={handleBlur('phoneNumber')}
								keyboardType='numeric'
							/>
							{errors.phoneNumber && touched.phoneNumber && (
								<Text style={globalStyles.errorText}>{errors.phoneNumber}</Text>
							)}
						</Fieldset>
						<Fieldset>
							<Label>Relation</Label>
							<BottomSheetTextInput
								value={values.relation}
								style={styles.textInput}
								onChangeText={handleChange('relation')}
								onBlur={handleBlur('relation')}
							/>
							{errors.relation && touched.relation && (
								<Text style={globalStyles.errorText}>{errors.relation}</Text>
							)}
						</Fieldset>
						<View style={styles.buttonsContainer}>
							<Button
								variant='secondary'
								onTouchEnd={closeModal}
								width='48%'
							>
								Close
							</Button>
							<Button
								variant='primary'
								width='48%'
								onPress={() => {
									handleSubmit()
								}}
							>
								Add
							</Button>
						</View>
					</View>
				)}
			</Formik>
		</View>
	)
}
