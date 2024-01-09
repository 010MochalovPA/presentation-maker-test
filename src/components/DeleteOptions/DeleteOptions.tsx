import { useAppActions } from '../../redux/hooks'
import styles from './DeleteOptions.css'

type DeleteOptionsProps = {
  id: string
}

const DeleteOptions = ({ id }: DeleteOptionsProps) => {
  const { createDeleteObjectAction } = useAppActions()

  return (
    <div className={styles.deleteOptions}>
      <button onClick={() => createDeleteObjectAction(id)}>Удалить</button>
    </div>
  )
}

export default DeleteOptions
