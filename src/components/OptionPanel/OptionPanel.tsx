import { useAppSelector } from '../../redux/hooks'
import { SlideObjectType } from '../../types'
import ColorOptions from '../ColorOptions/ColorOptions'
import DeleteOptions from '../DeleteOptions/DeleteOptions'
import PictureOptions from '../PictureOptions/PictureOptions'
import PositionOptions from '../PositionOptions/PositionOptions'
import SizeOptions from '../SizeOptions/SizeOptions'
import TextOptions from '../TextOptions/TextOptions'
import styles from './OptionPanel.css'

const OptionPanel = () => {
  const object = useAppSelector((state) => {
    const slide = state.editor.document.slideList.find((slide) => slide.id == state.editor.currentSlide)

    const selected = state.editor.selected.selected

    if (!slide) {
      return
    }

    return slide.objects.find((object) => object.id === selected)
  })

  if (!object) {
    return
  }

  switch (object?.type) {
    case SlideObjectType.TEXT:
      return (
        <div className={styles.optionPanel}>
          <ColorOptions {...object} />
          <SizeOptions {...object.size} id={object.id} />
          <PositionOptions {...object.position} id={object.id} />
          <TextOptions {...object.style} text={object.text} id={object.id} />
          <DeleteOptions id={object.id} />
        </div>
      )
    case SlideObjectType.SHAPE:
      return (
        <div className={styles.optionPanel}>
          <ColorOptions {...object} />
          <SizeOptions {...object.size} id={object.id} />
          <PositionOptions {...object.position} id={object.id} />
          <DeleteOptions id={object.id} />
        </div>
      )
    case SlideObjectType.PICTURE:
      return (
        <div className={styles.optionPanel}>
          <ColorOptions {...object} />
          <SizeOptions {...object.size} id={object.id} />
          <PositionOptions {...object.position} id={object.id} />
          <PictureOptions id={object.id} />
          <DeleteOptions id={object.id} />
        </div>
      )
  }
}

export default OptionPanel
