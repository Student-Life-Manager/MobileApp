import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { routes } from './routes'

export default function AuthStack({ initialRoute }: { initialRoute: string }) {
	const Stack = createNativeStackNavigator()

	return (
		<Stack.Navigator initialRouteName={initialRoute}>
			{routes
				.filter((route) => !route.isAuthProtected)
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
