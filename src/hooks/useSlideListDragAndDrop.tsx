import { RefObject, useEffect } from 'react'
import { useAppActions } from '../redux/hooks'

const useSlideListDragAndDrop = (slideId: string, ref: RefObject<HTMLDivElement>, setPos: (y: number) => void) => {
  let posY: number
  let deltaY = 0
  
  const {createChangeOrderSlidesAction} = useAppActions()

  useEffect(() => {
    const height = ref.current!.clientHeight;
    const onMouseMove = (e: MouseEvent) => {
      deltaY = e.pageY - posY
      setPos(deltaY)
    }

    const onMouseUp = () => {
      if (deltaY < 0 && deltaY < -height) {
        createChangeOrderSlidesAction(slideId, Math.ceil(deltaY/height))
      }

      if (deltaY > 0 && deltaY > height) {
        createChangeOrderSlidesAction(slideId, Math.floor(deltaY/height))
      }

      setPos(0)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }

    const onMouseDown = (e: MouseEvent) => {
      posY = e.pageY
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    }

    ref.current!.addEventListener('mousedown', onMouseDown)

    return () => {
      ref.current && ref.current.removeEventListener('mousedown', onMouseDown)
    }
  })
}

export { useSlideListDragAndDrop }