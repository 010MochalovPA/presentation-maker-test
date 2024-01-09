import { ComponentType } from 'react'
import styles from './ToolbarHistory.css'
import HistoryUndo from '../../icons/HistoryUndo'
import HistoryRedo from '../../icons/HistoryRedo'
import ToolbarHeaderItem from '../ToolbarHeaderItem/ToolbarHeaderItem'
import { useAppActions } from '../../redux/hooks'

export type OptionItemType = {
  icon: ComponentType
  onClick: () => void
  tooltip: string
  isDisabled: boolean
}

const ToolbarHistory = () => {
  const {createUndoAction, createRedoAction} = useAppActions()
  const options: OptionItemType[] = [
    {
      icon: HistoryUndo,
      onClick: createUndoAction,
      tooltip: 'Undo',
      isDisabled: false,
    },
    {
      icon: HistoryRedo,
      onClick: createRedoAction,
      tooltip: 'Redo',
      isDisabled: false,
    },
  ]

  return (
    <div className={styles.toolbar}>
      {options.map((option, index) => (
        <ToolbarHeaderItem key={index} {...option} />
      ))}
    </div>
  )
}

export { ToolbarHistory }
