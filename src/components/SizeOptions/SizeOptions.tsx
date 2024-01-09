import styles from './SizeOptions.css'
import { useAppActions } from '../../redux/hooks'

type SizeOptionsProps = {
  id: string
  width: number
  height: number
}

const SizeOptions = ({ id, width, height }: SizeOptionsProps) => {
  const { createChangeObjectSizeAction } = useAppActions()
  return (
    <>
      <div className={styles.title}>Настройки размера</div>
      <div className={styles.sizeOptions}>
        <span>Ширина:</span>
        <input
          className={styles.input}
          type="number"
          value={width}
          onChange={(e) => {
            createChangeObjectSizeAction(id, { height, width: Number(e.target.value) })
          }}
        />
        <span>Высота:</span>
        <input
          className={styles.input}
          type="number"
          value={height}
          onChange={(e) => {
            createChangeObjectSizeAction(id, { width, height: Number(e.target.value) })
          }}
        />
      </div>
    </>
  )
}

export default SizeOptions
