import TitleInput from '../TitleInput/TitleInput'
import styles from './PresentationTitle.css'
import { useAppActions, useAppSelector } from '../../redux/hooks'

const PresentationTitle = () => {
  const title = useAppSelector((state) => state.editor.document.title)
  const { createChangeTitleAction } = useAppActions()

  return <div className={styles.presentationTitle}>
    <TitleInput text={title} setText={ createChangeTitleAction }/>
  </div>
}

export default PresentationTitle
