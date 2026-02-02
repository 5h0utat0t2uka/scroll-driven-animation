import styles from './index.module.css'

export default function Page() {
  return (
    <>
      <a href="https://github.com/5h0utat0t2uka/scroll-driven-animation/tree/main/src/pages/grid" target='_blank' className={styles.link}>Code</a>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1>Multi columns grid scroll with animation timeline</h1>
        </section>
        <section className={styles.grid}>
          <div className={styles.body}>
            <div className={styles.columns}>
              <div className={styles.column}>
                <img className={styles.item} src={`/images/4.jpg.webp`} width={1920} height={2560} alt="" />
                <img className={styles.item} src={`/images/5.jpg.webp`} width={1920} height={2560} alt="" />
                <img className={styles.item} src={`/images/6.jpg.webp`} width={1920} height={2560} alt="" />
                <img className={styles.item} src={`/images/7.jpg.webp`} width={1920} height={1280} alt="" />
                <img className={styles.item} src={`/images/8.jpg.webp`} width={1920} height={1280} alt="" />
                <img className={styles.item} src={`/images/9.jpg.webp`} width={1920} height={1280} alt="" />
              </div>
              <div className={styles.column}>
                <img className={styles.item} src={`/images/1.jpg.webp`} width={1920} height={2880} alt="" />
                <img className={styles.item} src={`/images/2.jpg.webp`} width={1920} height={2880} alt="" />
                <img className={styles.item} src={`/images/3.jpg.webp`} width={1920} height={2880} alt="" />
                <img className={styles.item} src={`/images/15.jpg.webp`} width={1920} height={1549} alt="" />
                <img className={styles.item} src={`/images/16.jpg.webp`} width={1920} height={2880} alt="" />
                <img className={styles.item} src={`/images/17.jpg.webp`} width={1920} height={2891} alt="" />
              </div>
              <div className={styles.column}>
                <img className={styles.item} src={`/images/10.jpg.webp`} width={1920} height={1920} alt="" />
                <img className={styles.item} src={`/images/11.jpg.webp`} width={1920} height={2560} alt="" />
                <img className={styles.item} src={`/images/12.jpg.webp`} width={1920} height={1280} alt="" />
                <img className={styles.item} src={`/images/13.jpg.webp`} width={1920} height={1080} alt="" />
                <img className={styles.item} src={`/images/14.jpg.webp`} width={1920} height={2880} alt="" />
                <img className={styles.item} src={`/images/18.jpg.webp`} width={1920} height={2758} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.footer}>
          <p>Some images used on this site are provided by Unsplash.</p>
        </section>
      </div>
    </>
  )
}
