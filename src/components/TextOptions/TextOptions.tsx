import { Color, FontStyles } from '../../types'
import ColorPicker from '../ColorPicker/ColorPicker'
import styles from './TextOptions.css'
import { ColorResult } from 'react-color'
import { useAppActions } from '../../redux/hooks'

type FontElement = {
  name: string
  fontFamily: string
}

const fontList: FontElement[] = [
  {
    name: 'Roboto',
    fontFamily: 'Roboto',
  },
  {
    name: 'Arial',
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  {
    name: 'Arial Black',
    fontFamily: '"Arial Black", Gadget, sans-serif',
  },
  {
    name: 'Comic Sans MS',
    fontFamily: 'Comic Sans MS", cursive',
  },
  {
    name: 'Georgia',
    fontFamily: 'Georgia, serif',
  },
  {
    name: 'Impact',
    fontFamily: 'Impact,Charcoal, sans-serif',
  },
  {
    name: 'Lucida Console',
    fontFamily: '"Lucida Console", Monaco, monospace',
  },
] // TODO: https://habr.com/ru/articles/68189/

function getFontName(fontFamily: string) {
  return fontList.find((font) => font.fontFamily === fontFamily)?.name ?? ''
}

type TextOptionsProps = FontStyles & {
  id: string
  text: string
}

const TextOptions = ({ id, fontFamily, fontSize, bold, cursive, fontColor, text }: TextOptionsProps) => {
  const { createChangeTextFontStylesAction, createChangeTextAction } = useAppActions()

  const handleText = (text: string) => {
    createChangeTextAction(id, text)
  }

  const handleColor = (color: ColorResult) => {
    createChangeTextFontStylesAction(id, {
      fontFamily,
      fontSize,
      bold,
      cursive,
      fontColor: { ...color.rgb } as Color,
    })
  }

  const handleFont = (font: string) => {
    createChangeTextFontStylesAction(id, {
      fontFamily: font,
      fontSize,
      bold,
      cursive,
      fontColor,
    })
  }

  const handleFontSize = (size: number) => {
    createChangeTextFontStylesAction(id, {
      fontFamily,
      fontSize: size,
      bold,
      cursive,
      fontColor,
    })
  }

  const handleFontStyle = (bold: boolean, cursive: boolean) => {
    createChangeTextFontStylesAction(id, {
      fontFamily,
      fontSize,
      bold: bold,
      cursive: cursive,
      fontColor,
    })
  }

  return (
    <>
      <div className={styles.title}>Настройки формата текста</div>
      <div className={styles.textOptions}>
        <span>Текст:</span>
        <input className={styles.input} type="text" value={text} onChange={(e) => handleText(e.target.value)} />
        <span>Цвет текста:</span>
        <ColorPicker color={fontColor} onChange={handleColor} />
        <span>Шрифт:</span>
        <select
          className={styles.input}
          defaultValue={getFontName(fontFamily)}
          onChange={(e) => handleFont(fontList[Number(e.target.value)].fontFamily)}
        >
          {fontList.map((font, index) => (
            <option key={index} value={index}>
              {font.name}
            </option>
          ))}
        </select>
        <span>Размер шрифта:</span>
        <input
          className={styles.input}
          type="number"
          value={fontSize}
          onInput={(e) => handleFontSize(Number(e.currentTarget.value))}
        />
        <span>Жирный:</span>
        <input
          className={styles.input}
          type="checkbox"
          checked={bold}
          onChange={(e) => handleFontStyle(e.target.checked, cursive)}
        />
        <span>Курсив:</span>
        <input
          className={styles.input}
          type="checkbox"
          checked={cursive}
          onChange={(e) => handleFontStyle(bold, e.target.checked)}
        />
      </div>
    </>
  )
}

export default TextOptions
