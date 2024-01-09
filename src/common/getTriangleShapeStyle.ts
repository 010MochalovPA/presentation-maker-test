import { Color, Size } from '../types'
import colorToString from './colorToString'

const getRectangleShapeStyle = (size: Size, borderColor: Color, backgroundColor: Color) => {
  const { width, height } = size

  const fill: string = colorToString(backgroundColor)
  const stroke: string = borderColor.a === 0 ? colorToString(backgroundColor) : colorToString(borderColor)

  const points = `3 ${height - 3}, ${(width) / 2} 3, ${width - 3} ${height - 3}`

  return { points, fill, strokeWidth: '3', stroke }
}

export default getRectangleShapeStyle
