import styles from './index.module.css'
// import visual1 from '../../../public/images/4.jpg.webp'
// import visual2 from '../../../public/images/5.jpg.webp'
// import visual3 from '../../../public/images/6.jpg.webp'

export default function Page() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Horizontal scroll with view timeline</h1>
      </section>
      <section className={styles.horizontal}>
        <div className={styles.body}>
          <div className={styles.scroller}>
            <hgroup className={styles.item}>
              <h2>Lignes et Formes</h2>
              <p>2025 Fall Winter</p>
            </hgroup>
            <div className={styles.item}><img src={`/images/4.jpg.webp`} width={1920} height={2560} alt="" /></div>
            <div className={styles.item}><img src={`/images/5.jpg.webp`} width={1920} height={2560} alt="" /></div>
            <div className={styles.item}><img src={`/images/6.jpg.webp`} width={1920} height={2560} alt="" /></div>
          </div>
        </div>
      </section>
      <section className={styles.footer}>
        <p>Some images used on this site are provided by Unsplash.</p>
      </section>
    </div>
  )
}
