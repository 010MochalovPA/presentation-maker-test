import styles from './SlidesPanel.css'
import SlidePreview from '../SlidePreview/SlidePreview'
import SlideNewPlus from '../../icons/SlideNewPlus'
import { useAppActions } from '../../redux/hooks'

type SlidesListType = {
  id: string
  onClick: () => void
  isActive: boolean
}

type SlidesPanelPropsType = {
  slideList: SlidesListType[]
}

const SlidesPanel = ({ slideList }: SlidesPanelPropsType) => {
  const { createAddSlideAction } =
    useAppActions()

  return (
    <div className={styles.slidesPanel}>
      <div className={styles.slidesWrapper}>
        {slideList.map((slideItem, index) => (
          <SlidePreview
            key={slideItem.id}
            index={index}
            slideId={slideItem.id}
            onClick={slideItem.onClick}
            isActive={slideItem.isActive}
          />
        ))}
        <div className={styles.newSlideButton} title={'Add slide'} onClick={createAddSlideAction}>
          <SlideNewPlus />
        </div>
      </div>
    </div>
  )
}

export default SlidesPanel
