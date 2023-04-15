import BottomSheet from '@gorhom/bottom-sheet'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Keyboard, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from './styles'

interface ModalProps {
	modalContent: JSX.Element
	onClose: () => void
	isOpen: boolean
	defaultHeight: string
}

// TODO: Add a prop for initial snap point and get it working properly or even better, check how to change the height based on the content inside, that's the best solution
// TODO: Add a slight background behind the modal

export const Modal = (props: ModalProps) => {
	const { onClose, isOpen, modalContent, defaultHeight } = props
	const modalRef = useRef<BottomSheet>(null)
	const inset = useSafeAreaInsets()
	const topInsetFallback = 90 // in px
	const topInset = inset.top > topInsetFallback ? inset.top : topInsetFallback

	// This is for passing height through renderModal function but this isn't working at the moment because the modal component isn't re-rendering when the value is updated. Try ot get this working in future
	const [initialHeight, setInitialHeight] = useState('57%')
	const snapPoints = useMemo(() => [initialHeight, '100%'], [])
	useEffect(() => {
		// setInitialHeight(defaultHeight)
	}, [defaultHeight])

	useEffect(() => {
		if (isOpen) {
			modalRef.current?.snapToIndex(0)
			// modalRef.current?.snapToPosition(initialHeight)
		} else {
			Keyboard.dismiss()
			modalRef.current?.close()
		}
	}, [isOpen])

	return (
		<BottomSheet
			ref={modalRef}
			snapPoints={snapPoints}
			enablePanDownToClose
			topInset={topInset}
			index={-1}
			onChange={(index) => {
				if (index === -1) onClose()
			}}
			style={styles.sheetContainer}
			contentHeight={200}
		>
			<View style={styles.contentContainer}>{modalContent}</View>
		</BottomSheet>
	)
}
