import { useState } from 'react'
import styles from './styles/LogosList.module.scss'

interface Logos {
  id: number
  logoURL: string
}

export const LogosList: React.FC = () => {
  const logos: Logos[] = [
    { id: 1, logoURL: 'logo1.png' },
    { id: 2, logoURL: 'logo2.png' },
    { id: 3, logoURL: 'logo3.png' },
    { id: 4, logoURL: 'logo4.png' }
  ]
  const [selectedIndexLogo, setSelectedIndexLogo] = useState<number>(1)

  const next = (): void => {
    const nextIndex = selectedIndexLogo < logos.length ? selectedIndexLogo + 1 : 1
    setSelectedIndexLogo(nextIndex)
  }

  const previous = (): void => {
    const previousIndex = selectedIndexLogo > 1 ? selectedIndexLogo - 1 : logos.length
    setSelectedIndexLogo(previousIndex)
  }

  return <>
  <div className={styles.container}>
  <button onClick={previous}><img src={'./src/assets/L-arrow.png'}/></button>
  {logos.map(logo => <img className={`${styles.images} ${selectedIndexLogo === logo.id ? styles.active : styles.inactive}`} key={logo.id} src={`./src/assets/${logo.logoURL}`}/>)}
  <button onClick={next}><img src={'./src/assets/R-arrow.png'}/></button>
  </div>
  </>
}

export default LogosList
