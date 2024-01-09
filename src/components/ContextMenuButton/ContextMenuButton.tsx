import styles from './ContextMenuButton.css'

type ContextMenuButtonProps = {
  text: string
  handler: () => void
}

const ContextMenuButton = ({text, handler}: ContextMenuButtonProps) => {
  return <div className={styles.menuButton} onClick={handler}>
    {text}
  </div>
}

export default ContextMenuButton
