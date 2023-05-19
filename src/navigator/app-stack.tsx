import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { RootStackParamList } from '@app/types/navigation'

import { routes } from './routes'

export default function AppStack() {
	const Stack = createNativeStackNavigator()
	const initialRoute = 'student-home'

	return (
		<Stack.Navigator initialRouteName={initialRoute}>
			{routes
				.filter((route) => route.isAuthProtected)
				.map((route) => {
					return (
						<Stack.Screen
							key={route.name}
							options={route.options}
							name={route.name}
							component={route.component}
						/>
					)
				})}
		</Stack.Navigator>
	)
}
