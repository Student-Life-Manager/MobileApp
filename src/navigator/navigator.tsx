import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { routes } from './routes'

export const NativeNavigator = () => {
	const Stack = createNativeStackNavigator()

	return (
		<Stack.Navigator>
			{routes.map((route) => {
				return (
					<Stack.Screen
						options={route.options}
						name={route.name}
						component={route.component}
					/>
				)
			})}
		</Stack.Navigator>
	)
}
