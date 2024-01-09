import FileExport from '../../icons/FileExport'
import ButtonHeader from '../ButtonHeader/ButtonHeader'
import Logo from '../Logo/Logo'
import PresentationTitle from '../PresentationTitle/PresentationTitle'
import styles from './Header.css'
import { ToolbarFile } from '../ToolbarFile/ToolbarFile'
import { ToolbarHistory } from '../ToolbarHistory/ToolbarHistory'
import { useState } from 'react'
import { Modal } from '../Modal/Modal'
import PreviewPDF from '../PreviewPDF/PreviewPDF'

const Header = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  
  return (
    <div className={styles.header}>
      <div className={`${styles.equalBlockWrapper} ${styles.equalBlockWrapperStart}`}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <ToolbarFile />
        <ToolbarHistory />
      </div>
      <PresentationTitle />
      <div className={`${styles.equalBlockWrapper} ${styles.equalBlockWrapperEnd}`}>
        <ButtonHeader icon={FileExport} text={'Экспорт в PDF'} onClick={() => setIsPreviewOpen(true)} />
        {isPreviewOpen && (
          <Modal onClose={() => setIsPreviewOpen(false)}>
            <PreviewPDF/>
          </Modal>
        )}
      </div>
    </div>
  )
}

export default Header
