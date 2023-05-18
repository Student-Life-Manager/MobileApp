import { Text, View, Alert } from 'react-native'
import { H3 } from 'tamagui'

import { useDeleteGuardian } from '@app/api/hooks/useDeleteGuardian'
import { useFetchGuardians } from '@app/api/hooks/useFetchGuardians'
import { useFetchUser } from '@app/api/hooks/useFetchUser'
import AddPhone from '@app/assets/icons/add-phone.svg'
import Delete from '@app/assets/icons/delete.svg'
import EditPencil from '@app/assets/icons/edit-pencil.svg'
import InfoVerified from '@app/assets/icons/info-verified.svg'
import { useAuthentication } from '@app/components/hooks/authentication'
import { useGlobalModal } from '@app/components/hooks/global-modal'
import { Button } from '@app/components/ui/button'
import { InfoList, InfoListItemProps } from '@app/components/ui/info-list'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { KeyboardType } from '@app/constants/enums'

import { AddGuardianModal } from './@components/add-guardian-modal'
import { EditInfoModal } from './@components/edit-info-modal'
import { styles } from './styles'

// TODO: Add new select component inside the edit info form
// TODO: Refactor otp input component to include the resend functionality and then add it in modal
// TODO: Update react native version based on expo warning
// TODO: Replace types with interfaces
// TODO: Divide outpass-approved page into components and also in other pages

export const StudentProfile = ({ navigation }) => {
	const { renderModal } = useGlobalModal()
	const { logout } = useAuthentication()
	const { data: guardiansData, isLoading: fetchGuardiansLoading } = useFetchGuardians()
	const { deleteGuardian, isLoading: deleteGuardianLoading } = useDeleteGuardian()
	const { data: userData, isLoading: userDataLoading } = useFetchUser()

	console.log('user data', userData)

	const handleAddGuardian = () => {
		renderModal({
			modalContent: <AddGuardianModal />,
		})
	}

	const handleDeleteGuardianContact = (guardianUuid: string) => {
		Alert.alert('Delete contact', "Are you sure you want to delete this guardian's contact info", [
			{
				text: 'No',
				onPress: () => {},
			},
			{ text: 'Yes', onPress: () => console.log('guardian selected', guardianUuid) },
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
			{
				text: 'Yes',
				onPress: () => {
					logout()
					// navigation.navigate('AuthStack')
				},
			},
		])
	}

	const personalDetailsData: InfoListItemProps[] = [
		{
			title: 'Email',
			value: userData?.email ?? '',
			isAdornmentVisible: true,
		},
		{
			title: 'Phone number',
			value: userData?.phoneNumber ?? '',
			isAdornmentVisible: true,
			isListIconVisible: true,
			onClick: () => {
				handleEditInfo('Phone number', '+91 9274738482', KeyboardType.NUMERIC, 'phoneNumber')
			},
		},
		{
			title: 'Tower',
			value: userData?.hostelDetails.bldgName ?? '',
			isAdornmentVisible: true,
			isListIconVisible: false,
			onClick: () => {
				handleEditInfo('Tower', 'Ganga', KeyboardType.LETTER, 'select')
			},
		},
		{
			title: 'Room number',
			value: userData?.hostelDetails.roomNo ?? '',
			isAdornmentVisible: true,
			isListIconVisible: true,
			onClick: () => {
				handleEditInfo('Room number', '504', KeyboardType.NUMERIC, 'roomNumber')
			},
		},
		{
			title: 'Emergency phone number',
			value: userData?.phoneNumber ?? '',
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

	const guardiansList = guardiansData.map((guardian) => {
		return {
			title: guardian.relation,
			value: guardian.phoneNumber,
			isAdornmentVisible: false,
			isListIconVisible: true,
			onClick: () => {
				handleDeleteGuardianContact(guardian.uuid)
			},
		}
	})

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
					isLoading={userDataLoading}
				/>
				<InfoList
					heading='Guardian details'
					listData={guardiansList}
					listIconDirection='right'
					listIconCommon={Delete}
					listIconWrapperStyle={styles.deleteIconWrapper}
					itemAdornmentIcon={InfoVerified}
					headerIcon={AddPhone}
					headerIconOnClick={handleAddGuardian}
					headerIconWrapperStyle={styles.headerIconWrapper}
					emptyStateText='Please add at least 2 guardian contact numbers'
					isLoading={fetchGuardiansLoading || deleteGuardianLoading}
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
