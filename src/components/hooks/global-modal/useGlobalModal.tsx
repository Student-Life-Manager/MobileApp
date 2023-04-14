import { useContext } from 'react'
import { GlobalModalContext } from './global-modal-provider'

export const useGlobalModal = () => {
	const context = useContext(GlobalModalContext)

	if (context === undefined) {
		throw new Error('useGlobalModal must be used within a GlobalModalProvider')
	}

	return context
}
