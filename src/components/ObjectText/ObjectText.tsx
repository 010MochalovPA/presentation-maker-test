import styles from './ObjectText.css'
import { getTextStyle } from '../../common/getTextStyle'
import { Position, Size, TextObjectType } from '../../types'
import getTextObjectStyle from '../../common/getTextObjectStyle'
import { useEffect, useRef, useState } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import getDNDFunctions from '../../common/getDNDFunctions'
import SelectedItem from '../SelectedItem/SelectedItem'
import { useAppActions, useAppSelector } from '../../redux/hooks'
import { ContextMenuType, useContextMenu } from '../../hooks/useContextMenu'
import { ContextMenu } from '../ContextMenu/ContextMenu'
import getObjectPosition from '../../common/getObjectPosition'

type TextObjectProps = TextObjectType & {
  isSelected: boolean
  isPreview: boolean
}

const ObjectText = ({
  id,
  position,
  size,
  angle,
  style,
  text,
  borderColor,
  backgroundColor,
  isSelected,
  isPreview
}: TextObjectProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const {createChangeSelectedObjectIdAction, createChangeTextAction } = useAppActions()
  const [objectPosition, setObjectPosition] = useState<Position>(position)
  const [objectSize, setObjectSize] = useState<Size>(size)
  const slideList = useAppSelector((state) => state.editor.document.slideList)
  const currentSlideId = useAppSelector((state) => state.editor.currentSlide)
  const objects = slideList.find((slide) => slide.id === currentSlideId)?.objects
  
  useEffect(()=> {
    setObjectPosition(position)
    setObjectSize(size)
  },[position, size])

  const [moveFn] = getDNDFunctions(setObjectPosition, setObjectSize)
  useDragAndDrop(id, ref, ref, objectPosition, objectSize, moveFn)
  const {contextMenuPosition, isShowContextMenu, items, onClose} = useContextMenu(id, ref, ContextMenuType.OBJECT, getObjectPosition(objects!, id))

  const setText = (text: string) => {
    createChangeTextAction(id, text)
  }

  const textStyle = getTextStyle(style)
  const objectStyle = getTextObjectStyle(objectPosition, objectSize, angle, borderColor, backgroundColor)

  return (
    <>
      <div
        ref={ref}
        className={styles.text}
        style={{ ...objectStyle, top: `${objectPosition.top}px`, left: `${objectPosition.left}px` }}
        onMouseDown={() => {
          createChangeSelectedObjectIdAction(id)
        }}
      >
        <textarea
          style={textStyle}
          className={styles.input}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      {!isPreview && isSelected && <SelectedItem id={id} targetRef={ref} position={objectPosition} size={objectSize} setPosition={setObjectPosition} setSize={setObjectSize} />}
      {!isPreview && isShowContextMenu && <ContextMenu position={contextMenuPosition} items={items} onClose={onClose} />}
    </>
  )
}

export default ObjectText
