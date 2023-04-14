import { H3 } from 'tamagui'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { Text, StyleSheet, View } from 'react-native'
import { InfoList } from '@app/components/ui/info-list'
import AddPhone from '@app/assets/icons/add-phone.svg'
import InfoVerified from '@app/assets/icons/info-verified.svg'
import EditPencil from '@app/assets/icons/edit-pencil.svg'
import Delete from '@app/assets/icons/delete.svg'
import { EditInfoModal } from './@components/edit-info-modal'
import { useGlobalModal } from '@app/components/hooks/global-modal'

const personalDetailsData = [
	{
		title: 'Location',
		value: 'Hyderabad',
		adornmentVisible: true,
	},
	{
		title: 'Out date',
		value: '15th March',
	},
	{
		title: 'In date',
		value: '17th March',
	},
]

const guardianDetailsData = [
	{
		title: 'Mother',
		value: '+91 9876543210',
		adornmentVisible: true,
	},
	{
		title: 'Father',
		value: '+91 9876543210',
	},
]

export const StudentProfile = ({ navigation }) => {
	const { renderModal } = useGlobalModal()

	const handleButtonClick = () => {
		renderModal({
			modalContent: <EditInfoModal />,
			defaultHeight: '20%',
			payload: {
				test1: '11111',
				test2: '22222',
			},
		})
	}

	return (
		<PageWrapper>
			<View>
				<H3 style={styles.studentName}>Pulkit Jasti</H3>
				<Text style={styles.rollNumber}>AP19110010491</Text>
			</View>
			<Button
				variant='primary'
				onTouchEnd={handleButtonClick}
			>
				Modal test
			</Button>
			<View>
				<InfoList
					heading='Personal details'
					listData={personalDetailsData}
					listIconDirection='right'
					itemAdornment={InfoVerified}
					listIconCommon={EditPencil}
				/>
				<InfoList
					heading='Guardian details'
					listData={guardianDetailsData}
					listIconDirection='right'
					listIconCommon={Delete}
					headerIcon={AddPhone}
					headerIconOnClick={() => {
						console.log('clicked')
					}}
					itemAdornment={InfoVerified}
					emptyStateText='Please add at least 2 guardian contact numbers'
				/>
			</View>
		</PageWrapper>
	)
}

const styles = StyleSheet.create({
	studentName: {
		fontSize: 20,
		marginBottom: 8,
	},
	rollNumber: {
		fontSize: 16,
	},
})
