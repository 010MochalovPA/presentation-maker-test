import { Color } from '../types'
import colorToString from './colorToString'

const getPictureBackground = (
  pictureData: string,
  backgroundColor: Color,
) => {
  
  const background = `${colorToString(backgroundColor)} url('${pictureData}') center/cover`

  return {
    background,
  }
}

export default getPictureBackground
