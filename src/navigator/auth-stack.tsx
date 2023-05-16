import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { routes } from './routes'

export default function AuthStack() {
	const Stack = createNativeStackNavigator()
	const initialRoute = 'login'

	return (
		<Stack.Navigator initialRouteName={initialRoute}>
			{routes
				.filter((route) => !route.authProtected)
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
