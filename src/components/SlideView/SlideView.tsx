import getSlideBackgroundString from '../../common/getSlideBackgroundString'
import { useAppActions, useAppSelector } from '../../redux/hooks'
import { SlideObject, SlideObjectType } from '../../types'
import ObjectPicture from '../ObjectPicture/ObjectPicture'
import { ObjectShape } from '../ObjectShape/ObjectShape'
import ObjectText from '../ObjectText/ObjectText'
import styles from './SlideView.css'

function getSlideObject(slideObject: SlideObject, isSelected: boolean, isPreview: boolean) {
  switch (slideObject.type) {
    case SlideObjectType.TEXT:
      return <ObjectText key={slideObject.id} {...slideObject} isSelected={isSelected} isPreview={isPreview} />
    case SlideObjectType.PICTURE:
      return <ObjectPicture key={slideObject.id} {...slideObject} isSelected={isSelected} isPreview={isPreview} />
    case SlideObjectType.SHAPE:
      return <ObjectShape key={slideObject.id} {...slideObject} isSelected={isSelected} isPreview={isPreview} />
  }
}

type SlideViewProps = {
  slideId: string
  scale: number
  isPreview: boolean
}

const SlideView = ({ slideId, scale, isPreview }: SlideViewProps) => {
  const slide = useAppSelector((state) => state.editor.document.slideList.find((slide) => slide.id === slideId))
  const objects = useAppSelector(
    (state) => state.editor.document.slideList.find((slide) => slide.id === slideId)?.objects,
  )
  const selectedId = useAppSelector((state) => state.editor.selected.selected)

  const { createChangeSelectedObjectIdAction } = useAppActions()

  if (!objects || !slide) {
    return
  }

  const background = getSlideBackgroundString(slide)
  const pointerEvents = isPreview ? 'none' : 'auto'

  return (
    <div className={styles.slide} style={{ background, transform: `scale(${scale})`, pointerEvents }}>
      {objects.map((slideObject) => getSlideObject(slideObject, slideObject.id === selectedId, isPreview))}
      <div className={styles.overlay} onMouseDown={() => createChangeSelectedObjectIdAction('')} />
    </div>
  )
}

export default SlideView
