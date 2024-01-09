import { OptionItemType } from '../ToolbarObject/ToolbarObject'
import styles from './ToolbarItem.css'

const ToolbarItem = ({ icon: Icon, onClick, tooltip, isDisabled }: OptionItemType) => {
  return isDisabled
    ? (
        <div title={tooltip} className={`${styles.toolbarItem} ${styles.toolbarItemNoactive}`}>
          <Icon />
        </div>
    )
    : (
      <div title={tooltip} onClick={onClick} className={`${styles.toolbarItem} ${styles.toolbarItemActive}`}>
        <Icon />
      </div>
    )
}

export default ToolbarItem
