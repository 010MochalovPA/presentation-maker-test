import { useEffect, useRef, useState } from 'react'
import styles from './ColorPicker.css'
import { Color, Position } from '../../types'
import { ColorResult, SketchPicker } from 'react-color'
import colorToString from '../../common/colorToString'

type ColorPickerProps = {
  color: Color
  onChange: (color: ColorResult) => void
}

const ColorPicker = ({ color, onChange }: ColorPickerProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isShow, setShow] = useState<boolean>(false)
  const [position, setPosition] = useState<Position>({ left: 0, top: 0 })

  useEffect(() => {
    if (!ref.current) {
      return
    }

    setPosition({ left: ref.current.offsetLeft, top: ref.current.offsetTop })
  }, [])

  const sketchPickerStyle = { top: position.top + 25, left: position.left }

  return (
    <div className={styles.colorPicker}>
      {isShow && (
        <div style={sketchPickerStyle} className={styles.sketchPicker}>
          <SketchPicker color={color} onChange={onChange} />
        </div>
      )}
      {isShow && <div className={styles.layout} onClick={() => setShow(false)} />}
      <div ref={ref} onClick={() => setShow(!isShow)}>
        <div
          style={{ backgroundColor: colorToString(color), border: `${isShow ? 3 : 2}px solid black` }}
          className={styles.color}
        />
        <div className={styles.substrate} />
      </div>
    </div>
  )
}

export default ColorPicker
