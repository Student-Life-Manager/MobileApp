import { H3, YStack, Fieldset, Input, Label } from 'tamagui'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Text } from 'react-native'
import { globalStyles } from '@app/constants/styles'

type FormValues = {
	year: string
	course: string
	branch: string
	section: string
}

export const AcademicDetails = ({ navigation }) => {
	const initialValues: FormValues = {
		year: '',
		course: '',
		branch: '',
		section: '',
	}
	const validationSchema = Yup.object({
		year: Yup.string()
			.required('Year of study is required')
			.min(4, 'Year of study has to be at least 4 characters long')
			.matches(/^[0-9]{4}$/, 'Year of study should be 4 digits long'),

		course: Yup.string()
			.required('Course is required')
			.matches(/^[A-Za-z\s]+$/, 'Course should only contain letters and spaces'),

		branch: Yup.string()
			.required('Branch is required')
			.matches(/^[A-Za-z\s]+$/, 'Course should only contain letters and spaces'),

		section: Yup.string()
			.required('Section is required')
			.matches(/^[A-Za-z\s]+$/, 'Section should only contain letters'),
	})

	const handleFormSubmit = (values: FormValues) => {
		console.log(values)
	}
	return (
		<PageWrapper>
			<YStack maxWidth={600}>
				<H3>Academic details</H3>
				<Formik
					initialValues={initialValues}
					onSubmit={handleFormSubmit}
					validationSchema={validationSchema}
				>
					{({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
						<YStack space='$4'>
							<Fieldset>
								<Label>Year of study</Label>
								<Input
									id='year'
									fontSize={16}
									height={50}
									keyboardType='numeric'
									onChangeText={handleChange('year')}
									onBlur={handleBlur('year')}
									value={values.year}
								/>
								{errors.year && touched.year ? (
									<Text style={globalStyles.errorText}>{errors.year}</Text>
								) : null}
							</Fieldset>
							<Fieldset>
								<Label>Course</Label>
								<Input
									id='course'
									fontSize={16}
									height={50}
									onChangeText={handleChange('course')}
									onBlur={handleBlur('course')}
									value={values.course}
								/>
								{errors.course && touched.course ? (
									<Text style={globalStyles.errorText}>{errors.course}</Text>
								) : null}
							</Fieldset>
							<Fieldset>
								<Label>Branch</Label>
								<Input
									id='branch'
									fontSize={16}
									height={50}
									onChangeText={handleChange('branch')}
									onBlur={handleBlur('branch')}
									value={values.branch}
								/>
								{errors.branch && touched.branch ? (
									<Text style={globalStyles.errorText}>{errors.branch}</Text>
								) : null}
							</Fieldset>
							<Fieldset>
								<Label>Section</Label>
								<Input
									id='section'
									fontSize={16}
									height={50}
									onChangeText={handleChange('section')}
									onBlur={handleBlur('section')}
									value={values.section}
								/>
								{errors.section && touched.section ? (
									<Text style={globalStyles.errorText}>{errors.section}</Text>
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
