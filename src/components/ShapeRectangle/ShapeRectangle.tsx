import styles from './ShapeRectangle.css'
import getShapeObjectStyle from '../../common/getShapeObjectStyle'
import getRectangleShapeStyle from '../../common/getRectangleShapeStyle'
import { useEffect, useRef, useState } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import { ShapeObjectProps } from '../ObjectShape/ObjectShape'
import SelectedItem from '../SelectedItem/SelectedItem'
import getDNDFunctions from '../../common/getDNDFunctions'
import { useAppActions, useAppSelector } from '../../redux/hooks'
import { Position, Size } from '../../types'
import { ContextMenuType, useContextMenu } from '../../hooks/useContextMenu'
import { ContextMenu } from '../ContextMenu/ContextMenu'
import getObjectPosition from '../../common/getObjectPosition'

const ShapeRectangle = ({ id, position, size, angle, borderColor, backgroundColor, isSelected, isPreview }: ShapeObjectProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const {createChangeSelectedObjectIdAction } = useAppActions()
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
  
  const objectStyle = getShapeObjectStyle(objectPosition, objectSize, angle)
  const rectStyle = getRectangleShapeStyle(objectSize, borderColor, backgroundColor)

  return (
    <>
      <div
        ref={ref}
        className={styles.shape}
        style={{ ...objectStyle, top: objectPosition.top, left: objectPosition.left, width: objectSize.width, height: objectSize.height }}
        onMouseDown={(e) => {
          createChangeSelectedObjectIdAction(id)
          e.stopPropagation()
        }}
      >
        <svg width={objectSize.width} height={objectSize.height} xmlns="http://www.w3.org/2000/svg">
          <rect {...rectStyle} />
        </svg>
      </div>
      {!isPreview && isSelected && <SelectedItem id={id} targetRef={ref} position={objectPosition} size={objectSize} setPosition={setObjectPosition} setSize={setObjectSize} />}
      {!isPreview && isShowContextMenu && <ContextMenu position={contextMenuPosition} items={items} onClose={onClose}/>}
    </>
  )
}

export default ShapeRectangle
