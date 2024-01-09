import { Action, EditorActions } from './actions'
import { combineReducers } from 'redux'
import { editor1 } from '../mock'
import {
  Editor,
  PictureObjectType,
  PictureType,
  SelectedType,
  ShapeObjectType,
  ShapeType,
  Slide,
  SlideBackgroundType,
  SlideObjectType,
  TextObjectType,
} from '../types'
import generateUUID from '../common/generateUUID'
import { createHistory } from '../history/History'
import getSlideOrder from '../common/getSlideOrder'

const history = createHistory<Editor>(structuredClone(editor1))

const editorReducer = (state: Editor = editor1, action: Action) => {
  switch (action.type) {
    case EditorActions.CHANGE_TITLE: {
      const newState = { ...state, document: { ...state.document, title: action.payload.newTitle } }
      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.CHANGE_OBJECT_POSITION: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      const newState = {
        ...state,
        document: {
          ...state.document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              slide.objects = slide.objects.map((object) => {
                if (object.id === action.payload.objectId) {
                  object.position = action.payload.position
                }
                return object
              })
            }
            return slide
          }),
        },
      }

      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.CHANGE_OBJECT_SIZE: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      const newState = {
        ...state,
        document: {
          ...state.document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              slide.objects = slide.objects.map((object) => {
                if (object.id === action.payload.objectId) {
                  object.size = action.payload.size
                }

                return object
              })
            }
            return slide
          }),
        },
      }

      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.CHANGE_OBJECT_SIZE_AND_POSITION: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      const newState = {
        ...state,
        document: {
          ...state.document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              slide.objects = slide.objects.map((object) => {
                if (object.id === action.payload.objectId) {
                  object.size = action.payload.size
                  object.position = action.payload.position
                }

                return object
              })
            }
            return slide
          }),
        },
      }

      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.CHANGE_OBJECT_BACKGROUND_COLOR: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      const newState = {
        ...state,
        document: {
          ...state.document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              slide.objects = slide.objects.map((object) => {
                if (object.id === action.payload.objectId) {
                  object.backgroundColor = action.payload.backgroundColor
                }

                return object
              })
            }
            return slide
          }),
        },
      }

      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.CHANGE_OBJECT_BORDER_COLOR: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      const newState = {
        ...state,
        document: {
          ...state.document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              slide.objects = slide.objects.map((object) => {
                if (object.id === action.payload.objectId) {
                  object.borderColor = action.payload.borderColor
                }

                return object
              })
            }
            return slide
          }),
        },
      }

      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.CHANGE_TEXT_FONT_STYLES: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      const newState = {
        ...state,
        document: {
          ...state.document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              slide.objects = slide.objects.map((object) => {
                if (object.id === action.payload.objectId && object.type === SlideObjectType.TEXT) {
                  object.style = action.payload.fontStyles
                }

                return object
              })
            }
            return slide
          }),
        },
      }

      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.CHANGE_IMAGE_DATA: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      const newState = {
        ...state,
        document: {
          ...state.document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              slide.objects = slide.objects.map((object) => {
                if (object.id === action.payload.objectId && object.type === SlideObjectType.PICTURE) {
                  object.data = action.payload.data
                }

                return object
              })
            }
            return slide
          }),
        },
      }

      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.INSERT_IMAGE: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList
      const {width, height} = action.payload.size

      const newState = {
        ...state,
        document: {
          ...state.document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              const newImage: PictureObjectType = {
                id: generateUUID(),
                size: { width: 300, height: Math.round(300 * height / width) },
                position: { top: 0, left: 0 },
                angle: 0,
                backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
                borderColor: { r: 255, g: 255, b: 255, a: 0 },
                type: SlideObjectType.PICTURE,
                pictureType: PictureType.URL,
                data: action.payload.data,
              }
              slide.objects = [...slide.objects, newImage]
            }
            return slide
          }),
        },
      }

      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.INSERT_RECTANGLE: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      const newState = {
        ...state,
        document: {
          ...state.document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              const rect: ShapeObjectType = {
                id: generateUUID(),
                size: { width: 100, height: 100 },
                position: { top: 0, left: 0 },
                angle: 0,
                backgroundColor: { r: 255, g: 255, b: 255, a: 1 },
                borderColor: { r: 0, g: 0, b: 0, a: 1 },
                type: SlideObjectType.SHAPE,
                shapeType: ShapeType.RECTANGLE,
              }
              slide.objects = [...slide.objects, rect]
            }
            return slide
          }),
        },
      }

      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.INSERT_TRIANGLE: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      const newState = {
        ...state,
        document: {
          ...state.document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              const rect: ShapeObjectType = {
                id: generateUUID(),
                size: { width: 100, height: 100 },
                position: { top: 0, left: 0 },
                angle: 0,
                backgroundColor: { r: 255, g: 255, b: 255, a: 1 },
                borderColor: { r: 0, g: 0, b: 0, a: 1 },
                type: SlideObjectType.SHAPE,
                shapeType: ShapeType.TRIANGLE,
              }
              slide.objects = [...slide.objects, rect]
            }
            return slide
          }),
        },
      }

      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.INSERT_ELLIPSE: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      const newState = {
        ...state,
        document: {
          ...state.document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              const rect: ShapeObjectType = {
                id: generateUUID(),
                size: { width: 100, height: 100 },
                position: { top: 0, left: 0 },
                angle: 0,
                backgroundColor: { r: 255, g: 255, b: 255, a: 1 },
                borderColor: { r: 0, g: 0, b: 0, a: 1 },
                type: SlideObjectType.SHAPE,
                shapeType: ShapeType.ELLIPSE,
              }
              slide.objects = [...slide.objects, rect]
            }
            return slide
          }),
        },
      }

      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.INSERT_TEXT: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      const newState = {
        ...state,
        document: {
          ...state.document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              const textObject: TextObjectType = {
                id: generateUUID(),
                size: { width: 100, height: 100 },
                position: { top: 0, left: 0 },
                angle: 0,
                backgroundColor: { r: 255, g: 255, b: 255, a: 1 },
                borderColor: { r: 0, g: 0, b: 0, a: 1 },
                type: SlideObjectType.TEXT,
                style: {
                  fontFamily: 'Arial',
                  fontSize: 18,
                  bold: false,
                  cursive: false,
                  fontColor: { r: 0, g: 0, b: 0, a: 1 },
                },
                text: 'Text',
              }
              slide.objects = [...slide.objects, textObject]
            }
            return slide
          }),
        },
      }

      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.CHANGE_TEXT: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      const newState = {
        ...state,
        document: {
          ...state.document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              slide.objects = slide.objects.map((object) => {
                if (object.id === action.payload.objectId && object.type === SlideObjectType.TEXT) {
                  object.text = action.payload.text
                }

                return object
              })
            }
            return slide
          }),
        },
      }

      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.DELETE_OBJECT: {
      const currentSlideId = state.currentSlide
      const slideList = state.document.slideList

      const newState = {
        ...state,
        document: {
          ...state.document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlideId) {
              slide.objects = slide.objects.filter((object) => object.id !== action.payload.objectId)
            }
            return slide
          }),
        },
      }

      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.ADD_SLIDE: {
      const slideList = state.document.slideList

      const newSlide: Slide = {
        id: generateUUID(),
        background: {
          type: SlideBackgroundType.SOLID_COLOR,
          color: { r: 255, g: 255, b: 255, a: 1 },
        },
        objects: [],
      }

      const newState = {
        ...state,
        document: {
          ...state.document,
          slideList: [...slideList, newSlide],
        },
        currentSlide: newSlide.id,
      }

      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.DELETE_SLIDE: {
      const slideList = state.document.slideList
      const currentSlideId = state.currentSlide
      const currentSlideOrder = getSlideOrder(slideList, currentSlideId)
      const newSlideOrder = currentSlideOrder === slideList.length - 1 ? slideList.length - 2 : currentSlideOrder + 1

      const newState = {
        ...state,
        document: {
          ...state.document,
          slideList: slideList.filter((slide) => slide.id !== state.currentSlide),
        },
        currentSlide: slideList[newSlideOrder].id,
      }

      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.MOVE_DOWN_SLIDE: {
      const slideList = state.document.slideList

      const newIndex = slideList.findIndex((slide) => slide.id === state.currentSlide) + 1

      const MoveSlide = slideList.find((slide) => slide.id === state.currentSlide)

      if (newIndex <= 0 || newIndex >= slideList.length || !MoveSlide) {
        return state
      }

      const newSlideList = slideList.filter((slide) => slide.id !== state.currentSlide)

      newSlideList.splice(newIndex, 0, { ...MoveSlide })
      const newState = {
        ...state,
        document: {
          ...state.document,
          slideList: [...newSlideList],
        },
      }

      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.MOVE_UP_SLIDE: {
      const slideList = state.document.slideList

      const newIndex = slideList.findIndex((slide) => slide.id === state.currentSlide) - 1

      const MoveSlide = slideList.find((slide) => slide.id === state.currentSlide)

      if (newIndex < 0 || newIndex >= slideList.length || !MoveSlide) {
        return state
      }

      const newSlideList = slideList.filter((slide) => slide.id !== state.currentSlide)

      newSlideList.splice(newIndex, 0, { ...MoveSlide })

      const newState = {
        ...state,
        document: {
          ...state.document,
          slideList: [...newSlideList],
        },
      }

      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.CHANGE_CURRENT_SLIDE_ID: {
      const newState = { ...state, currentSlide: action.payload.slideId }
      return newState
    }

    case EditorActions.CHANGE_SELECTED_OBJECT_ID: {
      const newState = { ...state, selected: { ...state.selected, selected: action.payload.objectId } }
      return newState
    }

    case EditorActions.CHANGE_ORDER_SLIDES: {
      const slideList = state.document.slideList
      const newIndex = slideList.findIndex((slide) => slide.id === state.currentSlide) + action.payload.newIndex
      const MoveSlide = slideList.find((slide) => slide.id === state.currentSlide)

      if (newIndex < 0 || newIndex >= slideList.length || !MoveSlide) {
        return state
      }

      const newSlideList = slideList.filter((slide) => slide.id !== state.currentSlide)

      newSlideList.splice(newIndex, 0, { ...MoveSlide })
      const newState = {
        ...state,
        document: {
          ...state.document,
          slideList: [...newSlideList],
        },
      }

      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.CHANGE_ORDER_OBJECTS: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      const objects = slideList.find((slide) => slide.id === currentSlide)?.objects
      const moveObject = objects?.find((object) => object.id === action.payload.objectId)


      if (!objects || !moveObject) {
        return state
      }

      const index = objects.findIndex((object) => object.id === action.payload.objectId)

      if (index === -1 || index + action.payload.newIndex < 0 || index + action.payload.newIndex >= slideList.length) {
        return state
      }


      const newObjects = objects.filter((object) => object.id !== action.payload.objectId)
      newObjects.splice(index + action.payload.newIndex, 0, { ...moveObject })

      const newState = {
        ...state,
        document: {
          ...state.document,
          slideList: state.document.slideList.map((slide) => {
            return slide.id === currentSlide ? { ...slide, objects: newObjects } : { ...slide }
          }),
        },
      }

      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.MOVE_UP_OBJECT: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      const objects = slideList.find((slide) => slide.id === currentSlide)?.objects
      const moveObject = objects?.find((object) => object.id === action.payload.objectId)

      if (!objects || !moveObject) {
        return state
      }

      const index = objects.findIndex((object) => object.id === action.payload.objectId)

      if (index < 0 || index >= slideList.length) {
        return state
      }

      const newObjects = objects.filter((object) => object.id !== action.payload.objectId)
      newObjects.splice(newObjects.length, 0, { ...moveObject })

      const newState = {
        ...state,
        document: {
          ...state.document,
          slideList: state.document.slideList.map((slide) => {
            return slide.id === currentSlide ? { ...slide, objects: newObjects } : { ...slide }
          }),
        },
      }

      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.MOVE_DOWN_OBJECT: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      const objects = slideList.find((slide) => slide.id === currentSlide)?.objects
      const moveObject = objects?.find((object) => object.id === action.payload.objectId)

      if (!objects || !moveObject) {
        return state
      }

      const index = objects.findIndex((object) => object.id === action.payload.objectId)

      if (index < 0 || index >= slideList.length) {
        return state
      }

      const newObjects = objects.filter((object) => object.id !== action.payload.objectId)
      newObjects.splice(0, 0, { ...moveObject })

      const newState = {
        ...state,
        document: {
          ...state.document,
          slideList: state.document.slideList.map((slide) => {
            return slide.id === currentSlide ? { ...slide, objects: newObjects } : { ...slide }
          }),
        },
      }

      history.addHistoryItem(newState)
      return newState
    }

    case EditorActions.UNDO: {
      const prevState = history.undo()
      if (prevState) {
        return prevState
      }
      return state
    }

    case EditorActions.REDO: {
      const nextState = history.redo()
      if (nextState) {
        return nextState
      }
      return state
    }

    case EditorActions.NEW_EDITOR: {
      const newState: Editor = {
        document: {
          title: 'Новая презентация',
          slideList: [{
            id: '90b877d2b36b454e820378127e8b9f7e',
            background: {
              type: SlideBackgroundType.SOLID_COLOR,
              color: {
                r: 255,
                g: 255,
                b: 255,
                a: 1,
              },
            },
            objects: [],
          }],
        },
        history: [],
        currentSlide: '90b877d2b36b454e820378127e8b9f7e',
        selected: {
          selectedType: SelectedType.OBJECT,
          selected: '',
        },
      }
      
      history.addHistoryItem(newState)
      return newState
    }

    default:
      return state
  }
}

const rootReducer = combineReducers({
  editor: editorReducer,
})

export { rootReducer }
