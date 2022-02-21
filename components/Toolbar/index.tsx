import GitHubSVG from '../svg/GitHubSVG'
import LinkedInSVG from '../svg/LinkedInSVG'
import styles from './styles.module.css'
import info from '../../info.json'
export interface ToolbarProps {

}
export default function Toolbar({ }: ToolbarProps) {
  const size = '2rem';
  return (
    <div id={styles.toolbar}>
      <div className={styles.toolbarList}>
        <GitHubSVG className={styles.toolbarItem} width={size} height={size} onClick={() => window.open(info.links.github)} />
        <LinkedInSVG className={styles.toolbarItem} width={size} height={size} onClick={() => window.open(info.links.linkedin)} />
      </div>
      <div className={styles.line} />
    </div>
  )
}