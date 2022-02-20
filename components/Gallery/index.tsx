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
  const [selectedTab, setTab] = useState(0);
  const tabs = items.map((i, index) => <div key={i.name} className={styles.tab} onClick={() => setTab(index)}>
    <div className={styles.tabSelect} style={selectedTab === index ? { opacity: 1 } : {}} />
    <div>{i.name}</div>
  </div>)
  const cur = items[selectedTab]
  const stack = cur.stack.sort((a, b) => a.localeCompare(b)).map((i) => <div key={i} className={styles.stackItem} onClick={() => window.open(`https://google.com/search?q=${i}`, '_target')}>{i}</div>)
  const desc = cur.description.map((i) => <div key={i} className={styles.description}>{i}</div>)
  return (
    <div className={styles.gallery}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        <div className={styles.tabs}>{tabs}</div>
        <div key={selectedTab} className={styles.info}>
          <div className={styles.name}>{cur.name}</div>
          <div className={styles.stack}>{stack}</div>
          {desc}
        </div>
      </div>
    </div>
  )
}