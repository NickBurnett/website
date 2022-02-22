import styles from './style.module.css'
export interface InfoBlockProps {
  title: string
  info: string[]
}
export default function InfoBlock({ title, info }: InfoBlockProps) {
  const information = info.map((i) => <div key={i} className={styles.info}>{i}</div>)
  return (
    <div className={styles.infoBlock}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{information}</div>
    </div>
  )
}