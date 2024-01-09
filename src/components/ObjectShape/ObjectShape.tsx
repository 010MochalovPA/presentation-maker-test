import { ShapeType, ShapeObjectType } from '../../types'
import ShapeRectangle from '../ShapeRectangle/ShapeRectangle'
import ShapeEllipse from '../ShapeEllipse/ShapeEllipse'
import ShapeTriangle from '../ShapeTriangle/ShapeTriangle'

type ShapeObjectProps = ShapeObjectType & {
  isSelected: boolean
  isPreview: boolean
}

const ObjectShape = (shapeObjectProps: ShapeObjectProps) => {
  switch (shapeObjectProps.shapeType) {
    case ShapeType.ELLIPSE:
      return <ShapeEllipse {...shapeObjectProps} />
    case ShapeType.RECTANGLE:
      return <ShapeRectangle {...shapeObjectProps} />
    case ShapeType.TRIANGLE:
      return <ShapeTriangle {...shapeObjectProps} />
    default:
      throw Error('unknown shape type')
  }
}

export { ObjectShape, ShapeObjectProps }
