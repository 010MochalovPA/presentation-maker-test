import { Color } from '../../types'
import styles from './ColorOptions.css'
import ColorPicker from '../ColorPicker/ColorPicker'
import { ColorResult } from 'react-color'
import { useAppActions } from '../../redux/hooks'

type ColorOptionsProps = {
  id: string
  backgroundColor: Color
  borderColor: Color
}

const ColorOptions = ({ id, backgroundColor, borderColor }: ColorOptionsProps) => {
  const { createChangeObjectBackgroundColorAction, createChangeObjectBorderColorAction } = useAppActions()

  const handleChangeBackgroundColor = (color: ColorResult) => {
    createChangeObjectBackgroundColorAction(id, { ...color.rgb } as Color)
  }

  const handleChangeBorderColor = (color: ColorResult) => {
    createChangeObjectBorderColorAction(id, { ...color.rgb } as Color)
  }

  return (
    <>
      <div className={styles.title}>Настройки цвета</div>
      <div className={styles.colorOptions}>
        <span>Цвет фона:</span>
        <ColorPicker color={backgroundColor} onChange={handleChangeBackgroundColor} />
        <span>Цвет границы:</span>
        <ColorPicker color={borderColor} onChange={handleChangeBorderColor} />
      </div>
    </>
  )
}

export default ColorOptions
