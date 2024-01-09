const checkImgSrc = (src: string, onLoad: () => void, onError: () => void) => {
  const img = new Image()
  img.onload = onLoad
  img.onerror = onError
  img.src = src
}

export { checkImgSrc }
