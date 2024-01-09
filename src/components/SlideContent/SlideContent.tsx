import styles from './SlideContent.css'
import classNames from 'classnames'
import SlideView from '../SlideView/SlideView'

type SlideContentProps = {
  slideId: string
}

const SlideContent = ({ slideId }: SlideContentProps) => {
  return (
    <div className={classNames(styles.slideContainer)}>
      <SlideView slideId={slideId} scale={1} isPreview={false}/>
    </div>
  )
}

export default SlideContent
