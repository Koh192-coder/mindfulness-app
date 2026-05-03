import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrap}>
        <img
          src="/logo.png"
          alt="Mindfulness logo"
          className={styles.logo}
        />
      </div>
      <div className={styles.titleWrap}>
        <div className={styles.title}>MINDFULNESS</div>
        <div className={styles.sub}>自分に合ったマインドフルネスを見つける</div>
      </div>
    </header>
  )
}
