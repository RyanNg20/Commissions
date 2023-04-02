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
            width={600}
            height={600/clickedImage.ratio}
            src={'/large' + clickedImage.src}
            style={{maxHeight: `min(${90/clickedImage.ratio}vw, 90vh)`, maxWidth: `min(90vw, ${90 * clickedImage.ratio}vh)`, backgroundColor: 'black', objectFit: 'cover'}}
            loading="eager"
            priority={true}
            quality={100}
            sizes={Math.max(600, 600 * clickedImage.ratio)}
            blurDataURL="/blur4"
            alt={clickedImage.alt}
          />
        </div>
      }
    </>
  )
}

export default Modal