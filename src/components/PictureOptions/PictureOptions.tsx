import { useState } from 'react'
import styles from './PictureOptions.css'
import { Modal } from '../Modal/Modal'
import { AddImage } from '../AddImage/AddImage'
import { useAppActions } from '../../redux/hooks'
import { PictureType } from '../../types'

type PictureOptionsProps = {
  id: string
}

const PictureOptions = ({ id }: PictureOptionsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { createChangeImageDataAction } = useAppActions()

  const onSave = (url: string, type: PictureType) => {
    createChangeImageDataAction(id, url, type)
    setIsModalOpen(false)
  }

  return (
    <div className={styles.pictureOptions}>
      <button onClick={() => setIsModalOpen(true)}>Изменить</button>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <AddImage onSave={onSave} />
        </Modal>
      )}
    </div>
  )
}

export default PictureOptions
