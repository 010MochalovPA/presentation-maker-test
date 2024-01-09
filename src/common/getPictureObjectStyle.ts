import { Color, Position, Size } from '../types'
import colorToString from './colorToString'
import getRotateString from './getRotateString'

const getPictureObjectStyle = (
  position: Position,
  size: Size,
  angle: number,
  borderColor: Color,
  backgroundColor: Color
) => {
  const { left, top } = position
  const { width, height } = size
  return {
    width,
    height,
    left: `${left}px`,
    top: `${top}px`,
    transform: getRotateString(angle),
    border: `1px solid ${colorToString(borderColor)}`,
    background: colorToString(backgroundColor),
  }
}

export default getPictureObjectStyle
