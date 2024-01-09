import styles from './ContextMenu.css'
import ContextMenuButton from '../ContextMenuButton/ContextMenuButton'
import { createPortal } from 'react-dom'
import { Position } from '../../types'

type ContextMenuItem = {
  text: string,
  handler: () => void
}

type ContextMenuProps = {
  position: Position
  items: ContextMenuItem[]
  onClose: () => void
}

const contextMenu = document.getElementById('context-menu') as Element

const ContextMenu = ({ position, items, onClose }: ContextMenuProps) => {

  return createPortal(
    <>
      <div className={styles.menu} style={position}>
        {items.map((item, key) => <ContextMenuButton key={key} text={item.text} handler={item.handler} />)}
      </div>
      <div className={styles.overlay} onMouseDown={onClose}/>
    </>, contextMenu
  )
}

export {
  ContextMenu,
  ContextMenuItem
}
