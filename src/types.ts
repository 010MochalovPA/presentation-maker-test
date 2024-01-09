enum SlideBackgroundType {
  SOLID_COLOR,
  PICTURE_BASE64,
  PICTURE_URL,
}

enum SlideObjectType {
  TEXT,
  PICTURE,
  SHAPE,
}

enum ShapeType {
  RECTANGLE,
  TRIANGLE,
  ELLIPSE,
}

enum PictureType {
  BASE64,
  URL,
}

enum SelectedType {
  OBJECT,
  SLIDE,
}

type SelectedObject = {
  selectedType: SelectedType.OBJECT
  selected: string
}

type HistoryItem = {
  // hist item props
}

type Position = {
  left: number
  top: number
}

type Size = {
  width: number
  height: number
}

type Color = {
  r: number
  g: number
  b: number
  a: number
}

type BackgroundSolid = {
  type: SlideBackgroundType.SOLID_COLOR
  color: Color
}

type BackgroundPicture = {
  type: SlideBackgroundType.PICTURE_BASE64 | SlideBackgroundType.PICTURE_URL
  data: string
}

type SlideObjectBase = {
  id: string
  size: Size
  position: Position
  angle: number
  backgroundColor: Color
  borderColor: Color
}

type FontStyles = {
  fontFamily: string
  fontSize: number
  bold: boolean
  cursive: boolean
  fontColor: Color
}

type TextObjectType = SlideObjectBase & {
  type: SlideObjectType.TEXT
  style: FontStyles
  text: string
}

type PictureObjectType = SlideObjectBase & {
  type: SlideObjectType.PICTURE
  pictureType: PictureType
  data: string
}

type ShapeObjectType = SlideObjectBase & {
  type: SlideObjectType.SHAPE
  shapeType: ShapeType
}

type SlideObject = TextObjectType | PictureObjectType | ShapeObjectType

type ObjectStyle = {
  top: number
  left: number
  width: number
  height: number
  transform: string
}

type Slide = {
  id: string
  background: BackgroundSolid | BackgroundPicture
  objects: SlideObject[]
}

type Document = {
  title: string
  slideList: Slide[]
}

type Editor = {
  document: Document
  history: HistoryItem[]
  currentSlide: string
  selected: SelectedObject
}

export {
  SelectedType,
  ObjectStyle,
  SlideObject,
  SlideObjectType,
  SlideBackgroundType,
  ShapeType,
  PictureType,
  ShapeObjectType,
  PictureObjectType,
  TextObjectType,
  Slide,
  Document,
  Editor,
  Color,
  SlideObjectBase,
  FontStyles,
  Position,
  Size,
}
