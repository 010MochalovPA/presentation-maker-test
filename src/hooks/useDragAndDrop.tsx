import { RefObject, useEffect, useState } from 'react'
import { Position, Size } from '../types'
import { useAppActions } from '../redux/hooks'

const useDragAndDrop = (
  id: string,
  targetRef: RefObject<HTMLDivElement>,
  ref: RefObject<HTMLDivElement>,
  position: Position,
  size: Size,
  fn: (
    e: MouseEvent,
    deltaX: number,
    deltaY: number,
    startPosLeft: number,
    startPosTop: number,
    posX: number,
    posY: number,
    startWidth: number,
    startHeight: number,
  ) => void,
) => {
  const { createChangeObjectSizeAndPositionAction } = useAppActions()
  let posX: number, posY: number
  const delta: { x: number; y: number } = { x: 0, y: 0 }

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      fn(e, delta.x, delta.y, position.left, position.top, posX, posY, size.width, size.height)
    }

    const onMouseUp = () => {
      const x = targetRef.current!.offsetLeft
      const y = targetRef.current!.offsetTop
      const {width, height} = targetRef.current!.getBoundingClientRect()

      createChangeObjectSizeAndPositionAction(id, {width, height}, {left: x, top: y})
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }

    const onMouseDown = (e: MouseEvent) => {
        posX = e.pageX
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

export { useDragAndDrop }
