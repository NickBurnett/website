import styles from './style.module.css'
export interface GalleryProps {
  title: string;
}
export default function Gallery({ title }: GalleryProps) {
  return (
    <div className={styles.gallery}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        <div className={styles.items}></div>
        <div className={styles.info}></div>
      </div>
    </div>
  )
}