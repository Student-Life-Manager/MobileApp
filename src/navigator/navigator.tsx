import AsyncStorage from '@react-native-async-storage/async-storage'
import { ActivityIndicator } from 'react-native'

import { useAuthentication } from '@app/components/hooks/authentication'

import AppStack from './app-stack'
import AuthStack from './auth-stack'

export const NativeNavigator = () => {
	const { isAuthenticated, isLoading, userData } = useAuthentication()

	// if (isLoading) {
	// 	return <ActivityIndicator />
	// } else if (!isAuthenticated) {
	// 	return <AuthStack initialRoute='login' />
	// } else if (isAuthenticated && userData && !userData?.checklist.personalDetails) {
	// 	return <AuthStack initialRoute='personal-details' />
	// } else if (isAuthenticated && userData && !userData?.checklist.academicDetails) {
	// 	return <AuthStack initialRoute='academic-details' />
	// } else if (isAuthenticated && userData && !userData?.checklist.hostelDetails) {
	// 	return <AuthStack initialRoute='hostel-details' />
	// } else if (
	// 	isAuthenticated &&
	// 	userData &&
	// 	userData?.checklist.personalDetails &&
	// 	userData?.checklist.academicDetails &&
	// 	userData?.checklist.hostelDetails
	// ) {
	// 	return <AppStack />
	// }
	// AsyncStorage.clear()

	console.log('user type', userData?.accountType)

	if (isLoading) {
		return <ActivityIndicator />
	} else if (isAuthenticated) {
		return <AppStack />
	} else {
		return <AuthStack initialRoute='login' />
	}

	// if (isLoading) {
	// 	return <ActivityIndicator />
	// } else if (!isAuthenticated) {
	// 	return <AuthStack initialRoute='login' />
	// } else if (isAuthenticated && userData && !userData?.checklist.personalDetails) {
	// 	return <AuthStack initialRoute='personal-details' />
	// } else if (
	// 	isAuthenticated &&
	// 	userData &&
	// 	userData?.checklist.personalDetails &&
	// 	userData?.checklist.academicDetails &&
	// 	userData?.checklist.hostelDetails
	// ) {
	// 	return <AuthStack initialRoute='login' />
	// }

	// if (isLoading) {
	// 	return <ActivityIndicator />
	// } else if (
	// 	isAuthenticated &&
	// 	userData &&
	// 	userData?.checklist.personalDetails &&
	// 	userData?.checklist.academicDetails &&
	// 	userData?.checklist.hostelDetails
	// ) {
	// 	return <AppStack />
	// } else {
	// 	return <AuthStack />
	// }
}
