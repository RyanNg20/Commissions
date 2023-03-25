const Home = ({pageN}) => {

  return (
    <div style={{height: pageN == 0?20:0, transition: 'height 1s, opacity 1s', opacity: pageN == 0?1:0}}>
      <p>
        Welcome to my art commissions page!
      </p>

    </div>
  )
}

export default Home