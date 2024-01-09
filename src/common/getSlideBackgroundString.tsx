import { Slide, SlideBackgroundType } from '../types'
import colorToString from './colorToString'
import getPicuteBackground from './getPicuteBackground'

const getSlideBackgroundString = (slide: Slide) => {
  switch (slide.background.type) {
    case SlideBackgroundType.SOLID_COLOR:
      return colorToString(slide.background.color)
    case SlideBackgroundType.PICTURE_BASE64:
    case SlideBackgroundType.PICTURE_URL:
      return `#ffffff ${getPicuteBackground(slide.background.data)} center/cover`
  }
}

export default getSlideBackgroundString
