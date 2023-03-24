import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Deviant from '@/components/svg/deviant'
import Instagram from '@/components/svg/instagram'
import Twitter from '@/components/svg/twitter'
import { inter } from '@/components/fonts'
import { useEffect, useState, useRef } from 'react'
import Prices from '@/components/prices'
import TOS from '@/components/tos'
import Home from '@/components/home'



export default function Index() {
  const [pageN, setPageN] = useState(0)
  const homeRef = useRef(null)
  const pricesRef = useRef(null)
  const tosRef = useRef(null)
  // const pages = [
  //   {
  //     name: "Home",
  //     ref: useRef(null),

  //   }
  // ]

  useEffect(() => {
    console.log(homeRef?homeRef.current.offsetWidth:0)
    console.log(pricesRef?pricesRef.current.offsetWidth:0)
    console.log(tosRef?tosRef.current.offsetWidth:0)
  }, [homeRef.current, pricesRef.current, tosRef.current])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <div className={styles.midground}>
          <header>
            <Image src={"/4.png"} alt="picture of a girl" width={250} height={250} priority className={styles.logo}/>
            <h1 className={styles.title}>@FerreroRopher</h1>
            <h3>[Commissions Open]</h3>
            <div className={styles.social}>
              <Instagram/>
              <Twitter/>
              <Deviant/>
            </div>
          </header>
          <nav className={`${styles.nav} ${pageN == 0 && styles.navSlideHome} ${pageN == 1 && styles.navSlidePrices} ${pageN == 2 && styles.navSlideTOS}`}>
            <div className={styles.navText}>
              <button onClick={() => {setPageN(0)}} className={styles.homeBut} ref={homeRef}>
                <h4 className={styles.homeText}>Home</h4>
              </button>
              <button onClick={() => {setPageN(1)}} className={styles.pricesBut} ref={pricesRef}>
                <h4 className={styles.pricesText}>Prices</h4>
              </button>
              <button onClick={() => {setPageN(2)}} className={styles.tosBut} ref={tosRef}>
                <h4 className={styles.tosText}>Terms of Service</h4>
              </button>
            </div>
            <div className={styles.navLine}/>
          </nav>
          {/* {pageN == 0 &&
            <Home/>
          }
          {pageN == 1 &&
            <Prices/>
          }
          {pageN == 2 &&
            <TOS/>
          } */}
        </div>
      </main>
    </>
  )
}
