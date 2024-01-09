import getPictureBackground from './getPicuteBackground'

const getObjectPictureBackground = (pictureData: string) => {
  return `transparent ${getPictureBackground(pictureData)} top left`
}

export default getObjectPictureBackground
