import styles from './exhibit.module.css'

const Exhibit = ({ header, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>{header}</div>
      <br />
      {children}
    </div>
  )
}

export default Exhibit