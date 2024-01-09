import styles from './SlidePreview.css'
import classNames from 'classnames'
import SlideView from '../SlideView/SlideView'
import { useRef, useState } from 'react'
import { useSlideListDragAndDrop } from '../../hooks/useSlideListDragAndDrop'

type SlidePreviewProps = {
  index: number
  slideId: string
  onClick: () => void
  isActive: boolean
}

const SlidePreview = ({ index, slideId, onClick, isActive }: SlidePreviewProps) => {
  const [offset, setOffset] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useSlideListDragAndDrop(slideId, ref, setOffset)

  return (
    <div ref={ref} className={classNames(styles.slidePreview, isActive && styles.active)} onMouseDown={onClick} style={{top: `${offset}px`}}>
      <SlideView slideId={slideId} scale={0.25} isPreview={true}/>
    </div>
  )
}

export default SlidePreview
