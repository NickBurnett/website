import { RefObject, useRef } from 'react';
import styles from './style.module.css'
export interface IntroductionProps {
  learnMore: (container: RefObject<HTMLDivElement>, fade: string) => void;
}
export default function Introduction({ learnMore }: IntroductionProps) {
  const container = useRef<HTMLDivElement>(null)
  return (
    <div id={styles.introductionContainer} ref={container}>
      <div id={styles.introduction}>
        <div className={styles.hello}>Hello! My name is</div>
        <div className={styles.name}>Nicolas Burnett</div>
        <div className={styles.desc}>I&apos;m a software engineer and student.</div>
        <div className={styles.learnMore} onClick={() => learnMore(container, styles.fade)}>LEARN MORE</div>
      </div>
    </div>
  )
}