const TOS = ({pageN}) => {
  return (
    <div style={{height: pageN == 2?20:0, transition: 'height 1s, opacity 1s', opacity: pageN == 2?1:0}}>
      <p>
        TOS
      </p>

    </div>
  )
}

export default TOS