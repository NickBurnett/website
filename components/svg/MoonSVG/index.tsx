import styles from './style.module.css'
export interface MoonSVGProps {
  className?: string;
  onClick?: () => void;
  width?: string | number;
  height?: string | number;
}
export default function MoonSVG({ className, onClick, width, height }: MoonSVGProps) {
  return (
    <svg className={className} onClick={onClick} width={width} height={height} viewBox="0 0 69 87">
      <path className={styles.moon} fillRule="evenodd" clipRule="evenodd" d="M56.1836 1.87813C52.1708 0.656864 47.9121 0 43.5 0C19.4756 0 0 19.4756 0 43.5C0 67.5244 19.4756 87 43.5 87C53.0215 87 61.8284 83.9409 68.9917 78.7519C48.7459 76.5096 33 59.3436 33 38.5C33 22.328 42.4787 8.36984 56.1836 1.87813Z" />
    </svg>
  )
}