import Image from "next/image"

const Modal = ({clickedImage, setClickedImage}) => {
  return (
    <>
      {clickedImage != 0 &&
        <div
          style={{
            height: '100vh',
            width: '100vw',
            position: 'absolute',
            top: 0,
            backgroundColor:'rgba(0,0,0,0.3)',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={(e) => {setClickedImage(0)}}
        >
          <Image
            width={500}
            height={500/clickedImage.ratio}
            src={'/large' + clickedImage.src}
            style={{maxHeight: `${90/clickedImage.ratio}vw`, maxWidth: '90vw', backgroundColor: 'black',}}
            onClick={(e) => {e.stopPropagation()}}
            loading="eager"
          />
        </div>
      }
    </>
  )
}

export default Modal