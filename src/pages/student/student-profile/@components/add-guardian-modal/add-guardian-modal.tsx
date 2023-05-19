import { BottomSheetTextInput } from '@gorhom/bottom-sheet'
import { Formik } from 'formik'
import { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Fieldset, H4, Label } from 'tamagui'
import * as Yup from 'yup'

import { useCreateGuardian } from '@app/api/hooks/useCreateGuardian'
import { useFetchGuardians } from '@app/api/hooks/useFetchGuardians'
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
	const { createGuardian, isLoading, isSuccess } = useCreateGuardian()
	const { refetch } = useFetchGuardians()

	useEffect(() => {
		if (isSuccess) {
			closeModal()
			refetch()
		}
	}, [isSuccess])

	const initialValues: FormValues = {
		phoneNumber: '',
		relation: '',
	}

	const validationSchema = Yup.object().shape({
		relation: Yup.string(),
		// .required('This field can not be empty'),
		phoneNumber: Yup.string(),
		// .required('This field can not be empty')
		// .matches(/^[0-9]{10}$/, 'Phone number should be 10 digits long'),
	})

	const handleSubmit = (values: FormValues) => {
		createGuardian({
			phone_number: values.phoneNumber,
			relation: values.relation,
		})
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
								isLoading={isLoading}
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
