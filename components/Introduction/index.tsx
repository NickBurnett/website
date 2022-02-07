import styles from './style.module.css'
export interface IntroductionProps {

}
export default function Introduction({ }: IntroductionProps) {
  return (
    <div id={styles.introduction}>
      <div className='text-small'>Hello! My name is</div>
      <div className='text-mega'>Nicolas Burnett</div>
      <div className='text-large'>I&apos;m a software engineer and student.</div>
    </div>
  )
}