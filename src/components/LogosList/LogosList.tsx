import { useState } from 'react'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import logoBrand from '../../assets/logo.png'
import styles from './styles/LogosList.module.scss'

interface Logos {
  id: number
  logoURL: string
}

export const LogosList: React.FC = () => {
  const logos: Logos[] = [
    { id: 1, logoURL: 'logo.png' },
    { id: 2, logoURL: 'logo.png' },
    { id: 3, logoURL: 'logo.png' },
    { id: 4, logoURL: 'logo.png' }
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
  <button className={styles.button} onClick={previous}><img src={leftArrow}/></button>
  {logos.map(logo => <img className={`${styles.images} ${selectedIndexLogo === logo.id ? styles.active : styles.inactive}`} key={logo.id} src={logoBrand}/>)}
  <button className={styles.button} onClick={next}><img src={rightArrow}/></button>
  </div>
  </>
}

export default LogosList
