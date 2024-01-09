import { useRef } from 'react'
import { useAppSelector } from '../../redux/hooks'
import SlideView from '../SlideView/SlideView'
import styles from './PreviewPDF.css'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const PreviewPDF = () => {
  const itemsRef = useRef<Array<HTMLDivElement | null>>([])
  const slideList = useAppSelector((state) => state.editor.document.slideList)

  const downloadPDF = async () => {
    const pdf = new jsPDF('l', 'mm', 'a4', true)
    
    for (const element of itemsRef.current)  {
      if (!element) {
        return
      }

      await html2canvas(element,{
        imageTimeout: 0,
        allowTaint: true,
        useCORS: true,
      }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png")
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = pdf.internal.pageSize.getHeight()
        const imgWidth = canvas.width
        const imgHeight = canvas.height
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight, imgHeight)
        pdf.addImage(imgData, 'png', 0, 0, imgWidth * ratio, imgHeight * ratio)
        pdf.addPage()
      })
    }
    pdf.deletePage(itemsRef.current.length + 1)
    pdf.save('test.pdf')
  }

  return (
    <>
      <div className={styles.preview}>
        {slideList.map((slide, index) => (
          <div key={index} ref={el => itemsRef.current[index] = el}>
            <SlideView slideId={slide.id} scale={1} isPreview={true} />
          </div>
        ))}
      </div>
      <button className={styles.button} onClick={downloadPDF}>export</button>
    </>
  )
}

export default PreviewPDF
