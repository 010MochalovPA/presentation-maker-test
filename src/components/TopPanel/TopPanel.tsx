import Header from '../Header/Header'
import styles from './TopPanel.css'
import { ToolbarSlides } from '../ToolbarSlides/ToolbarSlides'
import { ToolbarObject } from '../ToolbarObject/ToolbarObject'

const TopPanel = () => (
  <div className={styles.topPanel}>
    <Header />
    <div className={styles.toolbars}>
      <ToolbarSlides />
      <ToolbarObject />
    </div>
  </div>
)

export default TopPanel
