import { createPortal } from 'react-dom'
import styles from './Modal.css'

type ModalProps = {
  children: string | JSX.Element | JSX.Element[]
  onClose: () => void
}

const layer = document.getElementById('layer') as Element

const Modal = ({ children, onClose }: ModalProps) => {
  return createPortal(
    <div className={styles.modal}>
      <button onClick={() => onClose()} className={styles.close}>
        x
      </button>
      {children}
    </div>,
    layer,
  )
}

export { Modal }
