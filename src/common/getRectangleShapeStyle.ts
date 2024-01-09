import { Color, Size } from '../types'
import colorToString from './colorToString'

const getRectangleShapeStyle = (size: Size, borderColor: Color, backgroundColor: Color) => {
  let { width, height } = size
  width -= 6
  height -= 6
  const x = 3
  const y = 3

  const fill = colorToString(backgroundColor)
  const stroke = borderColor.a === 0 ? colorToString(backgroundColor) : colorToString(borderColor)

  return { x, y, width, height, fill, strokeWidth: '3', stroke }
}

export default getRectangleShapeStyle
