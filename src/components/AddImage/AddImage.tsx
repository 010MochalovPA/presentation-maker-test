import { ChangeEvent, useState } from 'react'
import styles from './AddImage.css'
import { PictureType } from '../../types'
import { checkImgSrc } from '../../common/checkImgSrc'
import { convertBase64 } from '../../common/convertBase64'

type AddImageProps = {
  onSave: (url: string, type: PictureType) => void
}

const AddImage = ({ onSave }: AddImageProps) => {
  const [type, setType] = useState<PictureType>(PictureType.URL)
  const [data, setData] = useState<string>('')
  const [isDone, setDone] = useState<boolean>(false)

  const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.length ? await convertBase64(e.target.files[0]) : ''
    image && setData(image as string);
  }

  return (
    <div className={styles.addImage}>
      <div>
        <button onClick={() => setType(PictureType.URL)}>URL</button>
        <button onClick={() => setType(PictureType.BASE64)}>base64</button>
      </div>
      {type === PictureType.URL ? (
        <input
          type="text"
          value={data}
          onInput={(e) => setData(e.currentTarget.value)}
          onChange={(e) => checkImgSrc(e.currentTarget.value, () => setDone(true), () => setDone(false))}
        />
      ) : (
        <input type="file" onChange={(e) => uploadImage(e)} />
      )}
      <button
        onClick={() => onSave(data, type)}
      >
        Добавить
      </button>
    </div>
  )
}

export { AddImage }
