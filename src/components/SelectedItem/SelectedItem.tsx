import { RefObject, useRef, useState } from 'react'
import { Position, Size } from '../../types'
import styles from './SelectedItem.css'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import getDNDFunctions from '../../common/getDNDFunctions'

type SelectedItemProps = {
  targetRef: RefObject<HTMLDivElement>
  id: string
  position: Position
  size: Size
  setPosition: (position: Position) => void
  setSize: (size: Size) => void
}

const SelectedItem = ({id, targetRef, position, size, setPosition, setSize }: SelectedItemProps) => {
  const leftRef = useRef<HTMLDivElement>(null)
  const leftTopRef = useRef<HTMLDivElement>(null)
  const topRef = useRef<HTMLDivElement>(null)
  const rightTopRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const rightBottomRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const leftBottomRef = useRef<HTMLDivElement>(null)

  const [
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _,
    leftResize,
    leftTopResize,
    topResize,
    rightTopResize,
    rightResize,
    rightBottomResize,
    bottomResize,
    leftBottomResize,
  ] = getDNDFunctions(setPosition, setSize)

  useDragAndDrop(id, targetRef, leftRef, position, size, leftResize)
  useDragAndDrop(id, targetRef, leftTopRef, position, size, leftTopResize)
  useDragAndDrop(id, targetRef, topRef, position, size, topResize)
  useDragAndDrop(id, targetRef, rightTopRef, position, size, rightTopResize)
  useDragAndDrop(id, targetRef, rightRef, position, size, rightResize)
  useDragAndDrop(id, targetRef, rightBottomRef, position, size, rightBottomResize)
  useDragAndDrop(id, targetRef, bottomRef, position, size, bottomResize)
  useDragAndDrop(id, targetRef, leftBottomRef, position, size, leftBottomResize)

  return (
    <>
      <div
        ref={leftRef}
        className={styles.selected}
        style={{
          top: position.top - 3,
          left: position.left - 3,
          width: 6,
          height: size.height + 6,
          cursor: 'ew-resize',
        }}
      >
        <svg className={styles.selected} style={{ top: 0, left: 0, width: 6, height: size.height + 6 }}>
          <path
            d={`m 3,3 0,${size.height}`}
            style={{ fill: 'none', stroke: '#000000', strokeWidth: '2', strokeDasharray: '3,3' }}
          />
        </svg>
      </div>
      <div
        ref={topRef}
        className={styles.selected}
        style={{
          top: position.top - 3,
          left: position.left - 3,
          width: size.width + 6,
          height: 6,
          cursor: 'ns-resize',
        }}
      >
        <svg className={styles.selected} style={{ top: 0, left: 0, width: size.width + 6, height: 6 }}>
          <path
            d={`m 3,3 ${size.width}, 0`}
            style={{ fill: 'none', stroke: '#000000', strokeWidth: '2', strokeDasharray: '3,3' }}
          />
        </svg>
      </div>
      <div
        ref={bottomRef}
        className={styles.selected}
        style={{
          top: position.top + size.height - 3,
          left: position.left - 3,
          width: size.width + 6,
          height: 6,
          cursor: 'ns-resize',
        }}
      >
        <svg className={styles.selected} style={{ top: 0, left: 0, width: size.width + 6, height: 6 }}>
          <path
            d={`m 3,3 ${size.width}, 0`}
            style={{ fill: 'none', stroke: '#000000', strokeWidth: '2', strokeDasharray: '3,3' }}
          />
        </svg>
      </div>
      <div
        ref={rightRef}
        className={styles.selected}
        style={{
          top: position.top - 3,
          left: position.left + size.width - 3,
          width: 6,
          height: size.height + 6,
          cursor: 'ew-resize',
        }}
      >
        <svg className={styles.selected} style={{ top: 0, left: 0, width: 6, height: size.height + 6 }}>
          <path
            d={`m 3,3 0,${size.height}`}
            style={{ fill: 'none', stroke: '#000000', strokeWidth: '2', strokeDasharray: '3,3' }}
          />
        </svg>
      </div>
      <div
        ref={leftTopRef}
        className={styles.selected}
        style={{ top: position.top - 3, left: position.left - 3, width: 6, height: 6, cursor: 'nwse-resize' }}
      >
        <svg className={styles.selected} style={{ top: 0, left: 0, width: 6, height: 6 }}>
          <circle r="3" cx="3" cy="3" fill="yellow" stroke="black" strokeWidth="1" />
        </svg>
      </div>
      <div
        ref={leftBottomRef}
        className={styles.selected}
        style={{
          top: position.top + size.height - 3,
          left: position.left - 3,
          width: 6,
          height: 6,
          cursor: 'nesw-resize',
        }}
      >
        <svg className={styles.selected} style={{ top: 0, left: 0, width: 6, height: 6 }}>
          <circle r="3" cx="3" cy="3" fill="yellow" stroke="black" strokeWidth="1" />
        </svg>
      </div>
      <div
        ref={rightBottomRef}
        className={styles.selected}
        style={{
          top: position.top + size.height - 3,
          left: position.left + size.width - 3,
          width: 6,
          height: 6,
          cursor: 'nwse-resize',
        }}
      >
        <svg className={styles.selected} style={{ top: 0, left: 0, width: 6, height: 6 }}>
          <circle r="3" cx="3" cy="3" fill="yellow" stroke="black" strokeWidth="1" />
        </svg>
      </div>
      <div
        ref={rightTopRef}
        className={styles.selected}
        style={{
          top: position.top - 3,
          left: position.left + size.width - 3,
          width: 6,
          height: 6,
          cursor: 'nesw-resize',
        }}
      >
        <svg className={styles.selected} style={{ top: 0, left: 0, width: 6, height: 6 }}>
          <circle r="3" cx="3" cy="3" fill="yellow" stroke="black" strokeWidth="1" />
        </svg>
      </div>
    </>
  )
}

export default SelectedItem
