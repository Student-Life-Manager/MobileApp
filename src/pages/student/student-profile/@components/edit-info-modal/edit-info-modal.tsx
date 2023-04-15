import { useGlobalModal } from '@app/components/hooks/global-modal'
import { Button } from '@app/components/ui/button'
import { BottomSheetTextInput } from '@gorhom/bottom-sheet'
import { View, Text } from 'react-native'
import { Fieldset, H4, Label } from 'tamagui'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { styles } from './styles'
import { globalStyles } from '@app/constants/styles'

interface FormValues {
	dataType: string
	userData: string
}

export const EditInfoModal = () => {
	const { closeModal, payload } = useGlobalModal()

	const initialValues: FormValues = {
		dataType: payload.dataType,
		userData: '',
	}

	const validationSchema = Yup.object().shape({
		dataType: Yup.string().oneOf(['roomNumber', 'phoneNumber', 'select']),
		userData: Yup.string()
			.required('This field can not be empty')
			.when('dataType', {
				is: 'roomNumber',
				then: (schema) => schema.length(3, 'Room number should be 3 digits long'),
			})
			.when('dataType', {
				is: 'phoneNumber',
				then: (schema) =>
					schema.matches(
						/^[0-9]{10}$/,
						'Phone number should be 10 digits long and not contain any letters or spaces',
					),
			}),
	})

	const handleSubmit = (values: FormValues) => {
		console.log('form values', values)
	}

	return (
		<View>
			<H4 style={styles.heading}>Edit info</H4>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
					<View>
						<Fieldset>
							<Label>{payload?.title}</Label>
							<BottomSheetTextInput
								value={values.userData}
								style={styles.textInput}
								onChangeText={handleChange('userData')}
								onBlur={handleBlur('userData')}
								keyboardType={payload.keyboardType}
							/>
							{errors.userData && touched.userData && (
								<Text style={globalStyles.errorText}>{errors.userData}</Text>
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
								Update
							</Button>
						</View>
					</View>
				)}
			</Formik>
		</View>
	)
}
