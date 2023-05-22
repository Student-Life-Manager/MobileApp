import { BottomSheetTextInput } from '@gorhom/bottom-sheet'
import { Formik } from 'formik'
import { useEffect } from 'react'
import { View, Text, TextInput } from 'react-native'
import { Fieldset, H4, Label } from 'tamagui'
import * as Yup from 'yup'

import { useFetchAllOutpass } from '@app/api/hooks/useFetchAllOutpass'
import { useRejectOutpass } from '@app/api/hooks/useRejectOutpass'
import { useGlobalModal } from '@app/components/hooks/global-modal'
import { Button } from '@app/components/ui/button'
import { globalStyles } from '@app/constants/styles'

import { styles } from './styles'

interface FormValues {
	message: string
}

export const RejectOutpassModal = () => {
	const { closeModal, payload } = useGlobalModal()
	const { rejectOutpass, isSuccess, isLoading } = useRejectOutpass()
	const { refetch } = useFetchAllOutpass()

	useEffect(() => {
		if (isSuccess) {
			refetch()
			closeModal()
			payload.navigateOnAction()
			// navigation.navigate('warden-outpass-list')
		}
	}, [isSuccess])

	const initialValues: FormValues = {
		message: '',
	}

	const validationSchema = Yup.object().shape({
		message: Yup.string().required('Reason is required'),
	})

	const handleSubmit = (values: FormValues) => {
		rejectOutpass({ message: values.message, outpassUuid: payload.outpassUuid })
	}

	return (
		<View>
			<H4 style={styles.heading}>Reject outpass</H4>
			<Text>Please write the reason to proceed with rejection of this outpass request </Text>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
					<View>
						<Fieldset>
							<Label>{payload?.title}</Label>
							<TextInput
								multiline={true}
								numberOfLines={20}
								value={values.message}
								style={styles.textInput}
								onChangeText={handleChange('message')}
								onBlur={handleBlur('message')}
								keyboardType={payload.keyboardType}
							/>
							{errors.message && touched.message && (
								<Text style={globalStyles.errorText}>{errors.message}</Text>
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
								Reject
							</Button>
						</View>
					</View>
				)}
			</Formik>
		</View>
	)
}
