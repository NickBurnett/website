import GitHubSVG from '../svg/GitHubSVG'
import LinkedInSVG from '../svg/LinkedInSVG'
import styles from './styles.module.css'
import info from '../../info.json'
import SunSVG from '../svg/SunSVG';
import MoonSVG from '../svg/MoonSVG';
import { getTheme, toggleTheme } from '../../util/theme';
import { useState } from 'react';
export interface ToolbarProps {

}
export default function Toolbar({ }: ToolbarProps) {
  const [theme, setTheme] = useState(false)
  const size = '2rem';
  return (
    <div id={styles.toolbar} key={theme ? '0' : '1'}>
      <div className={styles.toolbarList}>
        <GitHubSVG className={styles.toolbarItem} width={size} height={size} onClick={() => window.open(info.links.github)} />
        <LinkedInSVG className={styles.toolbarItem} width={size} height={size} onClick={() => window.open(info.links.linkedin)} />
        {getTheme() === 'dark' ? <SunSVG className={styles.sunItem} width={size} height={size} onClick={() => {
          toggleTheme()
          setTheme(!theme)
        }} /> : <MoonSVG className={styles.moonItem} width={size} height={size} onClick={() => {
          toggleTheme()
          setTheme(!theme)
        }} />}
      </div>
      <div className={styles.line} />
    </div>
  )
}