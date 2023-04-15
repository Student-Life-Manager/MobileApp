import { createContext, useState } from 'react'
import { Modal } from './modal'

interface renderModal {
	modalContent: JSX.Element
	payload?: object
	defaultHeight?: string // in #%
}

export interface globalModal {
	modalState: boolean
	renderModal: (props: renderModal) => void
	closeModal: () => void
	payload: { [key: string]: any }
}

const modalInitialState = {
	modalState: false,
	modalContent: <></>,
	renderModal: () => {},
	closeModal: () => {},
	payload: {},
}

export const GlobalModalContext = createContext<globalModal>(modalInitialState)

export const GlobalModalProvider = (props) => {
	const [modalState, setModalState] = useState<boolean>(modalInitialState.modalState)
	const [modalContent, setModalContent] = useState<JSX.Element>(<></>)
	const [payload, setPayload] = useState(modalInitialState.payload)
	const [defaultHeight, setDefaultHeight] = useState<string>('50%')

	const renderModal = (props: renderModal) => {
		setModalState(true)
		setModalContent(props.modalContent)
		setPayload(props.payload || {})
		setDefaultHeight(props.defaultHeight || '50%')
	}

	const closeModal = () => {
		setModalState(modalInitialState.modalState)
		setModalContent(modalInitialState.modalContent)
		setPayload(modalInitialState.payload)
	}

	return (
		<GlobalModalContext.Provider value={{ modalState, renderModal, closeModal, payload }}>
			{props.children}
			<Modal
				modalContent={modalContent}
				onClose={closeModal}
				isOpen={modalState}
				defaultHeight={defaultHeight}
			/>
		</GlobalModalContext.Provider>
	)
}
