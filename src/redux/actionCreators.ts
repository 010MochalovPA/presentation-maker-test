import { Color, FontStyles, PictureType, Position, Size } from '../types'
import { EditorActions } from './actions'

function createChangeTitleAction(newTitle: string) {
  return {
    type: EditorActions.CHANGE_TITLE,
    payload: {
      newTitle,
    },
  }
}

function createChangeObjectPositionAction(objectId: string, position: Position) {
  return {
    type: EditorActions.CHANGE_OBJECT_POSITION,
    payload: {
      objectId,
      position,
    },
  }
}

function createChangeObjectSizeAction(objectId: string, size: Size) {
  return {
    type: EditorActions.CHANGE_OBJECT_SIZE,
    payload: {
      objectId,
      size,
    },
  }
}

function createChangeObjectSizeAndPositionAction(objectId: string, size: Size, position: Position) {
  return {
    type: EditorActions.CHANGE_OBJECT_SIZE_AND_POSITION,
    payload: {
      objectId,
      size,
      position,
    },
  }
}

function createChangeObjectBackgroundColorAction(objectId: string, backgroundColor: Color) {
  return {
    type: EditorActions.CHANGE_OBJECT_BACKGROUND_COLOR,
    payload: {
      objectId,
      backgroundColor,
    },
  }
}

function createChangeObjectBorderColorAction(objectId: string, borderColor: Color) {
  return {
    type: EditorActions.CHANGE_OBJECT_BORDER_COLOR,
    payload: {
      objectId,
      borderColor,
    },
  }
}

function createChangeTextFontStylesAction(objectId: string, fontStyles: FontStyles) {
  return {
    type: EditorActions.CHANGE_TEXT_FONT_STYLES,
    payload: {
      objectId,
      fontStyles,
    },
  }
}

function createChangeTextAction(objectId: string, text: string) {
  return {
    type: EditorActions.CHANGE_TEXT,
    payload: {
      objectId,
      text,
    },
  }
}

function createChangeImageDataAction(objectId: string, data: string, type: PictureType) {
  return {
    type: EditorActions.CHANGE_IMAGE_DATA,
    payload: {
      objectId,
      data,
      type,
    },
  }
}

function createChangeCurrentSlideIdAction(slideId: string) {
  return {
    type: EditorActions.CHANGE_CURRENT_SLIDE_ID,
    payload: {
      slideId,
    },
  }
}

function createChangeSelectedObjectIdAction(objectId: string) {
  return {
    type: EditorActions.CHANGE_SELECTED_OBJECT_ID,
    payload: {
      objectId,
    },
  }
}

function createInsertImageAction(data: string, size: Size) {
  return {
    type: EditorActions.INSERT_IMAGE,
    payload: {
      data,
      size,
    },
  }
}

function createInsertRectangleAction() {
  return {
    type: EditorActions.INSERT_RECTANGLE,
  }
}

function createInsertTriangleAction() {
  return {
    type: EditorActions.INSERT_TRIANGLE,
  }
}

function createInsertEllipseAction() {
  return {
    type: EditorActions.INSERT_ELLIPSE,
  }
}

function createInsertTextAction() {
  return {
    type: EditorActions.INSERT_TEXT,
  }
}

function createDeleteObjectAction(objectId: string) {
  return {
    type: EditorActions.DELETE_OBJECT,
    payload: {
      objectId,
    },
  }
}

function createAddSlideAction() {
  return {
    type: EditorActions.ADD_SLIDE,
  }
}

function createDeleteSlideAction() {
  return {
    type: EditorActions.DELETE_SLIDE,
  }
}

function createMoveDownSlideAction() {
  return {
    type: EditorActions.MOVE_DOWN_SLIDE,
  }
}

function createMoveUpObjectAction(objectId: string) {
  return {
    type: EditorActions.MOVE_UP_OBJECT,
    payload: {
      objectId
    }
  }
}

function createMoveDownObjectAction(objectId: string) {
  return {
    type: EditorActions.MOVE_DOWN_OBJECT,
    payload: {
      objectId
    }
  }
}

function createMoveUpSlideAction() {
  return {
    type: EditorActions.MOVE_UP_SLIDE,
  }
}

function createChangeOrderSlidesAction(slideId: string, newIndex: number) {
  return {
    type: EditorActions.CHANGE_ORDER_SLIDES,
    payload: {
      slideId,
      newIndex,
    },
  }
}

function createChangeOrderObjectsAction(objectId: string, newIndex: number) {
  return {
    type: EditorActions.CHANGE_ORDER_OBJECTS,
    payload: {
      objectId,
      newIndex,
    },
  }
}

function createUndoAction() {
	return {
		type: EditorActions.UNDO,
	}
}

function createRedoAction() {
	return {
		type: EditorActions.REDO,
	}
}

function createNewEditorAction() {
	return {
		type: EditorActions.NEW_EDITOR,
	}
}

export {
  createChangeTitleAction,
  createChangeObjectPositionAction,
  createChangeCurrentSlideIdAction,
  createChangeSelectedObjectIdAction,
  createChangeObjectSizeAction,
  createChangeObjectSizeAndPositionAction,
  createChangeObjectBackgroundColorAction,
  createChangeObjectBorderColorAction,
  createChangeTextFontStylesAction,
  createChangeTextAction,
  createInsertImageAction,
  createChangeImageDataAction,
  createInsertRectangleAction,
  createInsertTriangleAction,
  createInsertEllipseAction,
  createInsertTextAction,
  createDeleteObjectAction,
  createAddSlideAction,
  createDeleteSlideAction,
  createMoveDownSlideAction,
  createMoveUpSlideAction,
  createChangeOrderSlidesAction,
  createChangeOrderObjectsAction,
  createMoveUpObjectAction,
  createMoveDownObjectAction,
  createUndoAction,
  createRedoAction,
  createNewEditorAction
}
