import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { LoaderPage } from '@app/pages/loader-page'

import { routes } from './routes'

export default function LoaderStack() {
	const Stack = createNativeStackNavigator()
	const initialRoute = 'student-home'

	return (
		<Stack.Navigator initialRouteName={initialRoute}>
			{routes
				.filter((route) => route.isAuthProtected)
				.map((route) => {
					return (
						<Stack.Screen
							key={'loader'}
							name={'loader-page'}
							component={LoaderPage}
						/>
					)
				})}
		</Stack.Navigator>
	)
}
