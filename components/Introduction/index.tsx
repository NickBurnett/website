import styles from './style.module.css'
export interface IntroductionProps {
  learnMore: () => void;
}
export default function Introduction({ learnMore }: IntroductionProps) {
  return (
    <div id={styles.introduction}>
      <div className={styles.hello}>Hello! My name is</div>
      <div className={styles.name}>Nicolas Burnett</div>
      <div className={styles.desc}>I&apos;m a software engineer and student.</div>
      <div className={styles.learnMore} onClick={learnMore}>LEARN MORE</div>
    </div>
  )
}