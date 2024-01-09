import React, { useRef } from 'react'
import styles from './TitleInput.css'

type TitleInputProps = {
  text: string
  setText: (title: string) => void
}

const TitleInput = ({ text, setText }: TitleInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!inputRef.current) {
        return
      }

      inputRef.current!.blur()
    }
  }

  return (
    <input
      ref={inputRef}
      className={styles.input}
      value={text}
      onInput={(event: React.FormEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value)
      }}
      onKeyDown={handleKeyDown}
    />
  )
}

export default TitleInput
