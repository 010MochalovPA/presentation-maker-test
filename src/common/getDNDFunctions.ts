import { Position, Size } from '../types'

const getDNDFunctions = (setPos: (position: Position) => void, setNewSize: (size: Size) => void) => {
  const MIN_SIZE = 15

  const moveFn = (
    e: MouseEvent,
    deltaX: number,
    deltaY: number,
    startPosLeft: number,
    startPosTop: number,
    posX: number,
    posY: number,
    startWidth: number,
    startHeight: number,
  ) => {
    let newPos = { left: startPosLeft, top: startPosTop }
    const objectSize = { width: startWidth, height: startHeight }
    deltaX = e.pageX - posX
    deltaY = e.pageY - posY

    newPos = { left: newPos.left + deltaX, top: newPos.top + deltaY }

    setPos(newPos)
    setNewSize(objectSize)
  }

  const moveVerticalFn = (
    e: MouseEvent,
    deltaX: number,
    deltaY: number,
    startPosLeft: number,
    startPosTop: number,
    posX: number,
    posY: number,
    startWidth: number,
    startHeight: number,
  ) => {
    let newPos = { left: startPosLeft, top: startPosTop }
    const objectSize = { width: startWidth, height: startHeight }

    deltaY = e.pageY - posY

    newPos = { left: newPos.left, top: newPos.top + deltaY }

    setPos(newPos)
    setNewSize(objectSize)
  }

  const leftResizeFn = (
    e: MouseEvent,
    deltaX: number,
    deltaY: number,
    startPosLeft: number,
    startPosTop: number,
    posX: number,
    posY: number,
    startWidth: number,
    startHeight: number,
  ) => {
    let newPos = { left: startPosLeft, top: startPosTop }
    const objectSize = { width: startWidth, height: startHeight }
    deltaX = e.pageX - posX
    deltaX = deltaX > objectSize.width - MIN_SIZE ? objectSize.width - MIN_SIZE : deltaX

    newPos = { left: (newPos.left + deltaX), top: newPos.top }
    objectSize.width -= deltaX

    setNewSize(objectSize)
    setPos(newPos)
  }

  const leftTopResizeFn = (
    e: MouseEvent,
    deltaX: number,
    deltaY: number,
    startPosLeft: number,
    startPosTop: number,
    posX: number,
    posY: number,
    startWidth: number,
    startHeight: number,
  ) => {
    let newPos = { left: startPosLeft, top: startPosTop }
    let objectSize = { width: startWidth, height: startHeight }
    deltaX = e.pageX - posX
    deltaY = e.pageY - posY
    deltaX = deltaX > objectSize.width - MIN_SIZE ? objectSize.width - MIN_SIZE : deltaX
    deltaY = deltaY > objectSize.height - MIN_SIZE ? objectSize.height - MIN_SIZE : deltaY

    objectSize = { width: objectSize.width - deltaX, height: objectSize.height - deltaY }
    newPos = { left: newPos.left + deltaX, top: newPos.top + deltaY }

    setNewSize(objectSize)
    setPos(newPos)
  }

  const topResizeFn = (
    e: MouseEvent,
    deltaX: number,
    deltaY: number,
    startPosLeft: number,
    startPosTop: number,
    posX: number,
    posY: number,
    startWidth: number,
    startHeight: number,
  ) => {
    let newPos = { left: startPosLeft, top: startPosTop }
    const objectSize = { width: startWidth, height: startHeight }
    deltaY = e.pageY - posY
    deltaY = deltaY > objectSize.height - MIN_SIZE ? objectSize.height - MIN_SIZE : deltaY

    objectSize.height -= deltaY
    newPos = { left: newPos.left, top: newPos.top + deltaY }

    setNewSize(objectSize)
    setPos(newPos)
  }

  const rightTopResizeFn = (
    e: MouseEvent,
    deltaX: number,
    deltaY: number,
    startPosLeft: number,
    startPosTop: number,
    posX: number,
    posY: number,
    startWidth: number,
    startHeight: number,
  ) => {
    const newPos = { left: startPosLeft, top: startPosTop }
    let objectSize = { width: startWidth, height: startHeight }
    deltaX = e.pageX - posX
    deltaY = e.pageY - posY
    deltaX = deltaX < MIN_SIZE - objectSize.width ? MIN_SIZE - objectSize.width : deltaX
    deltaY = deltaY > objectSize.height - MIN_SIZE ? objectSize.height - MIN_SIZE : deltaY

    newPos.top += deltaY
    objectSize = { width: objectSize.width + deltaX, height: objectSize.height - deltaY }

    setNewSize(objectSize)
    setPos(newPos)
  }

  const rightResizeFn = (
    e: MouseEvent,
    deltaX: number,
    deltaY: number,
    startPosLeft: number,
    startPosTop: number,
    posX: number,
    posY: number,
    startWidth: number,
    startHeight: number,
  ) => {
    const newPos = { left: startPosLeft, top: startPosTop }
    const objectSize = { width: startWidth, height: startHeight }
    deltaX = e.pageX - posX
    deltaX = deltaX < MIN_SIZE - objectSize.width ? MIN_SIZE - objectSize.width : deltaX

    objectSize.width += deltaX

    setNewSize(objectSize)
    setPos(newPos)
  }

  const rightBottomResizeFn = (
    e: MouseEvent,
    deltaX: number,
    deltaY: number,
    startPosLeft: number,
    startPosTop: number,
    posX: number,
    posY: number,
    startWidth: number,
    startHeight: number,
  ) => {
    const newPos = { left: startPosLeft, top: startPosTop }
    let objectSize = { width: startWidth, height: startHeight }
    deltaX = e.pageX - posX
    deltaY = e.pageY - posY
    deltaX = deltaX < MIN_SIZE - objectSize.width ? MIN_SIZE - objectSize.width : deltaX
    deltaY = deltaY < MIN_SIZE - objectSize.height ? MIN_SIZE - objectSize.height : deltaY

    objectSize = { width: objectSize.width + deltaX, height: objectSize.height + deltaY }

    setNewSize(objectSize)
    setPos(newPos)
  }

  const bottomResizeFn = (
    e: MouseEvent,
    deltaX: number,
    deltaY: number,
    startPosLeft: number,
    startPosTop: number,
    posX: number,
    posY: number,
    startWidth: number,
    startHeight: number,
  ) => {
    const newPos = { left: startPosLeft, top: startPosTop }
    const objectSize = { width: startWidth, height: startHeight }
    deltaY = e.pageY - posY
    deltaY = deltaY < MIN_SIZE - objectSize.height ? MIN_SIZE - objectSize.height : deltaY

    objectSize.height += deltaY

    setNewSize(objectSize)
    setPos(newPos)
  }

  const leftBottomResizeFn = (
    e: MouseEvent,
    deltaX: number,
    deltaY: number,
    startPosLeft: number,
    startPosTop: number,
    posX: number,
    posY: number,
    startWidth: number,
    startHeight: number,
  ) => {
    const newPos = { left: startPosLeft, top: startPosTop }
    let objectSize = { width: startWidth, height: startHeight }
    deltaX = e.pageX - posX
    deltaY = e.pageY - posY
    deltaX = deltaX > objectSize.width - MIN_SIZE ? objectSize.width - MIN_SIZE : deltaX
    deltaY = deltaY < MIN_SIZE - objectSize.height ? MIN_SIZE - objectSize.height : deltaY

    objectSize = { width: objectSize.width - deltaX, height: objectSize.height + deltaY }
    newPos.left += deltaX

    setNewSize(objectSize)
    setPos(newPos)
  }

  return [
    moveFn,
    leftResizeFn,
    leftTopResizeFn,
    topResizeFn,
    rightTopResizeFn,
    rightResizeFn,
    rightBottomResizeFn,
    bottomResizeFn,
    leftBottomResizeFn,
    moveVerticalFn,
  ]
}

export default getDNDFunctions
