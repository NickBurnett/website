import GitHubSVG from '../svg/GitHubSVG'
import LinkedInSVG from '../svg/LinkedInSVG'
import styles from './styles.module.css'
export interface ToolbarProps {

}
export default function Toolbar({ }: ToolbarProps) {
  const size = '2.5rem';
  return (
    <div id={styles.toolbar}>
      <div className={styles.toolbarList}>
        <GitHubSVG className={styles.toolbarItem} width={size} height={size} />
        <LinkedInSVG className={styles.toolbarItem} width={size} height={size} />
      </div>
      <div className={styles.line} />
    </div>
  )
}