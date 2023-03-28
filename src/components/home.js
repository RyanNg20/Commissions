import styles from "@/styles/Home.module.css"

const Home = ({pageN}) => {

  return (
    <div className={styles.homeWrapper} style={{transition: 'height 1s, opacity 1s', opacity: pageN == 0?1:0}}>
    </div>
  )
}

export default Home