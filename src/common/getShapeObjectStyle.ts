import { ObjectStyle, Position, Size } from '../types'
import getRotateString from './getRotateString'

const getShapeObjectStyle = (position: Position, size: Size, angle: number): ObjectStyle => {
  const { left, top } = position
  const { width, height } = size

  return { top, left, width, height, transform: getRotateString(angle) }
}

export default getShapeObjectStyle
