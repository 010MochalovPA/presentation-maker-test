import { ComponentType } from 'react'
import styles from './ToolbarSlides.css'
import SlideNew from '../../icons/SlideNew'
import SlideDelete from '../../icons/SlideDelete'
import SlideMoveUp from '../../icons/SlideMoveUp'
import SlideMoveDown from '../../icons/SlideMoveDown'
import SlideEditBackground from '../../icons/SlideEditBackground'
import ToolbarItem from '../ToolbarItem/ToolbarItem'
import { useAppActions, useAppSelector } from '../../redux/hooks'

export type OptionItemType = {
  icon: ComponentType
  onClick: () => void
  tooltip: string
  isDisabled: boolean
}

const ToolbarSlides = () => {
  const { createAddSlideAction, createDeleteSlideAction, createMoveDownSlideAction, createMoveUpSlideAction } =
    useAppActions()

  const slideList = useAppSelector((state) => state.editor.document.slideList)
  const currentSlideId = useAppSelector((state) => state.editor.currentSlide)

  const options: OptionItemType[] = [
    {
      icon: SlideNew,
      onClick: () => {
        createAddSlideAction()
      },
      tooltip: 'Add slide',
      isDisabled: false,
    },
    {
      icon: SlideDelete,
      onClick: () => {
        createDeleteSlideAction()
      },
      tooltip: 'Delete slide',
      isDisabled: slideList.length < 2,
    },
    {
      icon: SlideMoveUp,
      onClick: () => {
        createMoveUpSlideAction()
      },
      tooltip: 'Move up slide',
      isDisabled: slideList[0].id === currentSlideId,
    },
    {
      icon: SlideMoveDown,
      onClick: () => {
        createMoveDownSlideAction()
      },
      tooltip: 'Move down slide',
      isDisabled: slideList[slideList.length - 1].id === currentSlideId,
    },
    {
      icon: SlideEditBackground,
      onClick: () => {
        console.log('change background')
      },
      tooltip: 'Change background',
      isDisabled: false,
    },
  ]

  return (
    <div className={styles.toolbar}>
      {options.map((option, index) => (
        <ToolbarItem key={index} {...option} />
      ))}
    </div>
  )
}

export { ToolbarSlides }
