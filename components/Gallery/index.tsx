import { useState } from 'react'
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
  const [selectedTab, setTab] = useState('Project');
  const tabs = items.map((i) => <div key={i.name} className={styles.tab} onClick={() => setTab(i.name)}>
    <div className={styles.tabSelect} style={selectedTab === i.name ? { opacity: 1 } : {}} />
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