import { SlideObject } from '../types'
import { ObjectPosition } from '../hooks/useContextMenu'

const getObjectPosition = (objects: SlideObject[], id: string) => {

  const index = objects.findIndex((object) => object.id === id)

  return objects.length === 1
    ? ObjectPosition.LAST
    :(index === 0
      ? ObjectPosition.BOTTOM
      : (index === objects.length - 1
        ? ObjectPosition.TOP
        : ObjectPosition.CENTER))
}

export default getObjectPosition
