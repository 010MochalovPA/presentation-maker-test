import { Color } from '../types'

const colorToString = (color: Color) => {
  return `rgba(${color.r},${color.g},${color.b}, ${color.a})`
}

export default colorToString
