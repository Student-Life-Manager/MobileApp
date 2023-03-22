import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	pageWrapper: {
		paddingHorizontal: 20,
		paddingTop: 20,
		backgroundColor: '#F7F9FF',
	},
})

export const PageWrapper = ({ children }) => {
	return (
		<KeyboardAwareScrollView
			extraHeight={200}
			style={styles.pageWrapper}
			extraScrollHeight={50}
		>
			{children}
		</KeyboardAwareScrollView>
	)
}
