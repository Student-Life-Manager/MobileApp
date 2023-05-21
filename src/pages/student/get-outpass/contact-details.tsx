import { Formik } from 'formik'
import { useEffect } from 'react'
import { Text, Alert } from 'react-native'
import { H3, YStack, Fieldset, Input, Label } from 'tamagui'
import * as Yup from 'yup'

import { useCreateOutpass } from '@app/api/hooks/useCreateOutpass'
import { useFetchGuardians } from '@app/api/hooks/useFetchGuardians'
import { useFetchUserOutpasses } from '@app/api/hooks/useFetchUserOutpasses'
import { useFetchWardens } from '@app/api/hooks/useFetchWardens'
import { Button } from '@app/components/ui/button'
import { Loader } from '@app/components/ui/loader'
import { NativeSelect } from '@app/components/ui/native-select'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { globalStyles } from '@app/constants/styles'
import { CreateOutpass } from '@app/types/outpass'

interface FormValues {
	guardian: string
	warden: string
	alternatePhone: string
}

export const ContactDetails = ({ route, navigation }) => {
	const { refetch } = useFetchUserOutpasses()
	const { data: wardensData, isLoading: isWardensLoading } = useFetchWardens()
	const { data: guardiansData, isLoading: isGuardiansLoading } = useFetchGuardians()
	const outpassDetails = route.params.outpassDetails
	const { createOutpass, isLoading, isSuccess } = useCreateOutpass()

	useEffect(() => {
		if (isSuccess) {
			refetch()
			Alert.alert(
				'Request sent',
				"Your outpass request has been sent. You will receive a notification when it's approved",
				[{ text: 'Continue', onPress: () => navigation.navigate('student-home') }],
			)
		}
	}, [isSuccess])

	const wardensList = wardensData
		? wardensData.map((warden) => ({
				label: `${warden.firstName} ${warden.lastName}`,
				value: warden.uuid,
		  }))
		: []

	const guardiansList = guardiansData
		? guardiansData.map((guardian) => ({
				label: guardian.relation,
				value: guardian.uuid,
		  }))
		: []

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
		createOutpass({
			outDate: outpassDetails.outDate,
			expectedReturnAt: outpassDetails.returnDate,
			location: outpassDetails.location,
			reason: outpassDetails.reason,
			wardenUuid: values.warden,
			guardianUuid: values.guardian,
			alternatePhoneNumber: values.alternatePhone,
		})
	}

	return (
		<PageWrapper>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<H3>Enter contact details</H3>
				{isGuardiansLoading || isWardensLoading ? (
					<Loader />
				) : (
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={onSubmit}
					>
						{({
							handleChange,
							handleBlur,
							handleSubmit,
							values,
							errors,
							touched,
							setFieldValue,
						}) => (
							<YStack space='$4'>
								<Fieldset>
									<Label>Guardian to verify</Label>
									<NativeSelect
										id='guardian'
										onChange={setFieldValue}
										options={guardiansList}
									/>
									{errors.guardian && touched.guardian && (
										<Text style={globalStyles.errorText}>{errors.guardian}</Text>
									)}
								</Fieldset>
								<Fieldset>
									<Label>Warden</Label>
									<NativeSelect
										id='warden'
										onChange={setFieldValue}
										options={wardensList}
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
									isLoading={isLoading}
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
				)}
			</YStack>
		</PageWrapper>
	)
}
