import styles from './banner.module.css'


const Banner = ({ title }) => {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
    </div>
  )
}

export default Banner