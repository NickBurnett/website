import styles from './style.module.css'
export interface GalleryItem {
  name: string
  stack: string[]
  description: string[]
}
export interface GalleryProps {
  title: string
  items: GalleryItem[]
}
export default function Gallery({ title, items }: GalleryProps) {
  const tabs = items.map((i) => <div key={i.name} className={styles.tab}>
    <div className={styles.tabSelect} />
    <div>{i.name}</div>
  </div>)
  return (
    <div className={styles.gallery}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        <div className={styles.tabs}>{tabs}</div>
        <div className={styles.info}></div>
      </div>
    </div>
  )
}