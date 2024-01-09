import styles from './PositionOptions.css'
import { useAppActions } from '../../redux/hooks'

type PositionOptionsProps = {
  id: string
  left: number
  top: number
}

const PositionOptions = ({ id, left, top }: PositionOptionsProps) => {
  const { createChangeObjectPositionAction } = useAppActions()
  return (
    <>
      <div className={styles.title}>Настройки расположения</div>
      <div className={styles.positionOptions}>
        <span>x:</span>
        <input
          className={styles.input}
          type="number"
          value={left}
          onChange={(e) => {
            createChangeObjectPositionAction(id, { top, left: Number(e.target.value) })
          }}
        />
        <span>y:</span>
        <input
          className={styles.input}
          type="number"
          value={top}
          onChange={(e) => {
            createChangeObjectPositionAction(id, { left, top: Number(e.target.value) })
          }}
        />
      </div>
    </>
  )
}

export default PositionOptions
