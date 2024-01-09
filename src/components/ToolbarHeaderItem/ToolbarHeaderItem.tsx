import { OptionItemType } from '../ToolbarObject/ToolbarObject'
import styles from './ToolbarHeaderItem.css'

const ToolbarHeaderItem = ({ icon: Icon, onClick, tooltip }: OptionItemType) => {
  return (
    <div title={tooltip} onClick={onClick} className={styles.toolbarItem}>
      <Icon />
    </div>
  )
}

export default ToolbarHeaderItem
