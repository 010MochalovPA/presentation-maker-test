import { Slide } from '../types'

const getSlideOrder = (slideList: Slide[], id: string) => {

  return slideList.findIndex((slide) => slide.id === id)
}

export default getSlideOrder
