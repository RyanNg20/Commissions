import styles from "../styles/Prices.module.css"
import Image from "next/image"
import { inria } from "./fonts"
import { useState } from "react"

const Prices = ({pageN, windowWidth, setClickedImage}) => {
  //ratio is width/height
  const bustImages = [
    {src:"3.webp", alt:"picture of Ryo Yamada", ratio: 1.11},
    {src:"4.webp", alt:"picture of orange-haired girl", ratio: 1},
    {src:"5.webp", alt:"picture of blue-haired girl", ratio: 1},
    {src:"6.webp", alt:"picture of neko girl", ratio: 1},
    {src:"10.webp", alt:"picture of girl in ocean", ratio: 1.06},
    {src:"11.webp", alt:"picture of hatsune", ratio: 1},
    {src:"13.webp", alt:"picture of brown-haired girl", ratio: 1},
  ]

  const thighImages = [
    {src:"1.webp", alt:"picture of girl in cape", ratio: 0.66},
    {src:"2.webp", alt:"picture of girl in sweater", ratio: 0.63},
    {src:"7.webp", alt:"picture of girl in bikini", ratio: 0.7},
    {src:"12.webp", alt:"picture of girl in bikini", ratio: 0.6},
  ]

  return (
    <div className={styles.pricesWrapper} style={{height: pageN == 1?'calc(100vh - 380px - 3rem)':0, opacity: pageN == 1?1:0}}>
      <h2 style={{marginBottom: 10}}>Prices</h2>
      <p style={{marginBottom: 20}}>These are base prices and may vary.</p>
      <h3 className={`${inria.className}`} style={{padding: '20px 0px'}}>Busts: $30</h3>
      <div className={styles.bustWrapper}>
        {bustImages.map((bustImage) => {
          return (
            <div className={styles.imageWrapper} key={bustImage.src} onClick={() => {setClickedImage(bustImage)}}>
              <Image
                src={'/' + bustImage.src}
                height={windowWidth >= 500?320:200}
                width={windowWidth >= 500?320:200}
                alt={bustImage.alt}
                style={{objectFit: 'cover'}}
                className={styles.priceImage}
                quality={60}
                sizes={320}
                blurDataURL="/blur4.png"
                loading="eager"
              />
            </div>
            // <div className={styles.bustImage} style={{backgroundImage: `url(/4.webp)`}}/>
          )
        })}
      </div>
      <h3 className={`${inria.className}`} style={{padding: '20px 0px'}}>Thigh-Up: $40</h3>
      <div className={`${styles.thighWrapper}`}>
        {thighImages.map((thighImage) => {
          return (
            <div className={styles.imageWrapper} key={thighImage.src} onClick={() => {setClickedImage(thighImage)}}>
              <Image
                src={'/' + thighImage.src}
                height={windowWidth >= 500?500:280}
                width={windowWidth >= 500?320:200}
                alt={thighImage.alt}
                style={{objectFit: 'cover'}}
                className={styles.priceImage}
                quality={75}
                sizes={500}
                loading="eager"
              />
            </div>
            // <div className={styles.bustImage} style={{backgroundImage: `url(/4.webp)`}}/>
          )
        })}
      </div>
    </div>
  )
}

export default Prices