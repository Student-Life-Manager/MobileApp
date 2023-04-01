import {
	KeyboardAwareScrollView,
	KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view'
import { StyleSheet } from 'react-native'
import { View, SafeAreaView } from 'react-native'

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
		backgroundColor: '#F7F9FF',
	},
	pageWrapper: {
		paddingHorizontal: 20,
		backgroundColor: '#F7F9FF',
	},
	innerView: {
		paddingVertical: 20,
	},
})

export const PageWrapper = (props: KeyboardAwareScrollViewProps) => {
	const { children } = props

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<KeyboardAwareScrollView
				style={styles.pageWrapper}
				extraScrollHeight={60}
				{...props}
			>
				<View style={styles.innerView}>{children}</View>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	)
}
