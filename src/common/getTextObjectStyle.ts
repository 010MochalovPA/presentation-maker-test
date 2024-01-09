import { Color, Position, Size } from '../types'
import colorToString from './colorToString'
import getRotateString from './getRotateString'

const getTextObjectStyle = (
  position: Position,
  size: Size,
  angle: number,
  borderColor: Color,
  backgroundColor: Color,
) => {
  const { left, top } = position
  const { width, height } = size

  return {
    left: `${left}px`,
    top: `${top}px`,
    width: `${width}px`,
    height: `${height}px`,
    transform: getRotateString(angle),
    borderColor: colorToString(borderColor),
    backgroundColor: colorToString(backgroundColor),
  }
}

export default getTextObjectStyle
