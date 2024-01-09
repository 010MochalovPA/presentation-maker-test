import { FontStyles } from '../types'
import colorToString from './colorToString'

export const getTextStyle = ({ fontFamily, fontSize, bold, cursive, fontColor }: FontStyles) => {
  return {
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeight: bold ? 'bold' : 'normal',
    fontStyle: cursive ? 'italic' : 'normal',
    color: colorToString(fontColor),
  }
}
