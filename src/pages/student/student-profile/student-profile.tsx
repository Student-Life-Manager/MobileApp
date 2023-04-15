import { H3 } from 'tamagui'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { Text, View, Alert } from 'react-native'
import { InfoList } from '@app/components/ui/info-list'
import AddPhone from '@app/assets/icons/add-phone.svg'
import InfoVerified from '@app/assets/icons/info-verified.svg'
import EditPencil from '@app/assets/icons/edit-pencil.svg'
import Delete from '@app/assets/icons/delete.svg'
import { EditInfoModal } from './@components/edit-info-modal'
import { useGlobalModal } from '@app/components/hooks/global-modal'
import { AddGuardianModal } from './@components/add-guardian-modal'
import { InfoListItemProps } from '@app/components/ui/info-list/info-list'
import { KeyboardType } from '@app/constants/enums'
import { styles } from './styles'

// TODO: Add new select component inside the edit info form
// TODO: Refactor otp input component to include the resend functionality and then add it in modal
// TODO: Styling refactor
// TODO: Update react native version based on expo warning
// TODO: Replace types with interfaces
// TODO: Format all code using eslint
// TODO: Divide outpass-approved page into components and also in other pages

export const StudentProfile = ({ navigation }) => {
	const { renderModal } = useGlobalModal()

	const handleAddGuardian = () => {
		renderModal({
			modalContent: <AddGuardianModal />,
		})
	}

	const handleDeleteGuardianContact = () => {
		Alert.alert('Cancel outpass', 'Are you sure you want to cancel this outpass', [
			{
				text: 'No',
				onPress: () => console.log('no pressed'),
			},
			{ text: 'Yes', onPress: () => console.log('yes pressed') },
		])
	}

	const handleEditInfo = (
		title: string,
		value: string,
		keyboardType: KeyboardType,
		dataType: string,
	) => {
		renderModal({
			modalContent: <EditInfoModal />,
			payload: {
				title,
				value,
				keyboardType,
				dataType,
			},
		})
	}

	const handleLogout = () => {
		Alert.alert('Logout', 'Are you sure you want to log out of this application', [
			{
				text: 'No',
				onPress: () => console.log('no logout'),
			},
			{ text: 'Yes', onPress: () => console.log('yes logout') },
		])
	}

	const personalDetailsData: InfoListItemProps[] = [
		{
			title: 'Email',
			value: 'pulkit_jasti@srmap.edu.in',
			isAdornmentVisible: true,
		},
		{
			title: 'Phone number',
			value: '+91 9274738482',
			isAdornmentVisible: true,
			isListIconVisible: true,
			onClick: () => {
				handleEditInfo('Phone number', '+91 9274738482', KeyboardType.NUMERIC, 'phoneNumber')
			},
		},
		{
			title: 'Tower',
			value: 'Ganga',
			isAdornmentVisible: true,
			isListIconVisible: false,
			onClick: () => {
				handleEditInfo('Tower', 'Ganga', KeyboardType.LETTER, 'select')
			},
		},
		{
			title: 'Room number',
			value: '504',
			isAdornmentVisible: true,
			isListIconVisible: true,
			onClick: () => {
				handleEditInfo('Room number', '504', KeyboardType.NUMERIC, 'roomNumber')
			},
		},
		{
			title: 'Emergency phone number',
			value: '+91 9274738482',
			isListIconVisible: true,
			onClick: () => {
				handleEditInfo(
					'Emergency phone number',
					'+91 9274738482',
					KeyboardType.NUMERIC,
					'phoneNumber',
				)
			},
		},
	]

	const guardianDetailsData: InfoListItemProps[] = [
		{
			title: 'Mother',
			value: '+91 9876543210',
			isAdornmentVisible: true,
			isListIconVisible: true,
			onClick: () => {
				handleDeleteGuardianContact()
			},
		},
		{
			title: 'Father',
			value: '+91 9876543210',
			isListIconVisible: true,
			onClick: () => {
				handleDeleteGuardianContact()
			},
		},
	]

	return (
		<PageWrapper>
			<View>
				<H3 style={styles.studentName}>Pulkit Jasti</H3>
				<Text style={styles.rollNumber}>AP19110010491</Text>
			</View>
			<View>
				<InfoList
					heading='Personal details'
					listData={personalDetailsData}
					listIconDirection='right'
					listIconCommon={EditPencil}
					itemAdornmentIcon={InfoVerified}
					listIconWrapperStyle={styles.editIconWrapper}
					emptyStateText='No data, please contact the admin'
				/>
				<InfoList
					heading='Guardian details'
					listData={guardianDetailsData}
					listIconDirection='right'
					listIconCommon={Delete}
					listIconWrapperStyle={styles.deleteIconWrapper}
					itemAdornmentIcon={InfoVerified}
					headerIcon={AddPhone}
					headerIconOnClick={handleAddGuardian}
					headerIconWrapperStyle={styles.headerIconWrapper}
					emptyStateText='Please add at least 2 guardian contact numbers'
				/>
				<Button
					variant='secondary'
					onPress={handleLogout}
				>
					Logout
				</Button>
			</View>
		</PageWrapper>
	)
}
