import { Link } from "react-router-dom";
import styles from './index.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.section}>
        <ul>
          <li><Link prefetch="viewport" to="/horizontal">Horizontal inline scroll</Link></li>
          <li><Link prefetch="viewport" to="/grid">Grid columns scroll</Link></li>
          <li><Link prefetch="viewport" to="/parallax">Parallax elements scroll</Link></li>
        </ul>
        <ul>
          <li><a href="https://github.com/5h0utat0t2uka/scroll-driven-animation" target="_blank">Source</a></li>
        </ul>
      </section>
    </>
  )

}
