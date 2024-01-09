import { RefObject, useEffect, useState } from 'react'
import { ContextMenuItem } from '../components/ContextMenu/ContextMenu'
import { Position } from '../types'
import { useAppActions } from '../redux/hooks'

enum ContextMenuType {
    SLIDE,
    OBJECT,
}

enum ObjectPosition {
    LAST,
    TOP,
    CENTER,
    BOTTOM,
}

const useContextMenu = (id: string, ref: RefObject<HTMLDivElement>, type: ContextMenuType, objectPosition: number): { contextMenuPosition: Position, isShowContextMenu: boolean, items: ContextMenuItem[], onClose: () => void } => {
    const [contextMenuPosition, setContextMenuPosition] = useState<Position>({ top: 0, left: 0 })
    const [isShowContextMenu, setShowContextMenu] = useState(false)

    const {
        createChangeOrderObjectsAction,
        createDeleteObjectAction,
        createMoveDownObjectAction,
        createMoveUpObjectAction,
        createChangeSelectedObjectIdAction
    } = useAppActions()

    const menuItemTop = {
        text: 'Поместить наверх',
        handler: () => {
            createMoveUpObjectAction(id)
            setShowContextMenu(false)
        },
    }

    const menuItemUp = {
        text: 'Переместить выше',
        handler: () => {
            createChangeOrderObjectsAction(id, 1)
            setShowContextMenu(false)
        },
    }

    const menuItemDown = {
        text: 'Переместить ниже',
        handler: () => {
            createChangeOrderObjectsAction(id, -1)
            setShowContextMenu(false)
        },
    }

    const menuItemBottom = {
        text: 'Поместить вниз',
        handler: () => {
            createMoveDownObjectAction(id)
            setShowContextMenu(false)
        },
    }

    const objectMenuItems: ContextMenuItem[] = [
        {
            text: 'Удалить',
            handler: () => {
                createDeleteObjectAction(id)
                setShowContextMenu(false)
            }
        },
    ]

    switch (objectPosition) {
        case ObjectPosition.CENTER:
            objectMenuItems.unshift(menuItemBottom)
            objectMenuItems.unshift(menuItemDown)
            objectMenuItems.unshift(menuItemUp)
            objectMenuItems.unshift(menuItemTop)
            break;
        case ObjectPosition.TOP:
            objectMenuItems.unshift(menuItemBottom)
            objectMenuItems.unshift(menuItemDown)
            break;
        case ObjectPosition.BOTTOM:
            objectMenuItems.unshift(menuItemUp)
            objectMenuItems.unshift(menuItemTop)
            break;
    }

    const handleContextMenu = (e: Event) => {
        createChangeSelectedObjectIdAction(id)
        e.preventDefault()
        setContextMenuPosition({ top: (e as MouseEvent).pageY, left: (e as MouseEvent).pageX })
        setShowContextMenu(true)
    }

    useEffect(() => {
        if (ref.current) {
            ref.current?.addEventListener('contextmenu', handleContextMenu)
        }
        return () => {
            ref.current?.removeEventListener('contextmenu', handleContextMenu)
        }

    })

    switch (type) {
        case ContextMenuType.OBJECT:
            return { contextMenuPosition, isShowContextMenu, items: objectMenuItems, onClose: () => {setShowContextMenu(false)} }
        default:
            return { contextMenuPosition, isShowContextMenu, items: objectMenuItems, onClose: () => {setShowContextMenu(false)} }
    }
}

export { useContextMenu, ContextMenuType, ObjectPosition }
