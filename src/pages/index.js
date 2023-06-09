import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Index.module.css'
import Deviant from '@/components/svg/deviant'
import Instagram from '@/components/svg/instagram'
import Twitter from '@/components/svg/twitter'
import HomeIcon from '@/components/svg/homeIcon.js'
import PriceIcon from '@/components/svg/priceIcon.js'
import TOSIcon from '@/components/svg/tosIcon.js'
import { inter } from '@/components/fonts'
import { useEffect, useState, useRef, Fragment } from 'react'
import Prices from '@/components/prices'
import TOS from '@/components/tos'
import Modal from '@/components/modal'


export default function Index() {
  const pages = [
    {
      name: "Home",
      ref: useRef(null),
      icon: HomeIcon,
    },
    {
      name: "Prices",
      ref: useRef(null),
      icon: PriceIcon,
    },
    {
      name: "Terms of Service",
      ref: useRef(null),
      icon: TOSIcon,
    },
  ]

  const [pageN, setPageN] = useState(0)
  const [navPosition, setNavPosition] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  //size of the white background box
  const [navSize, setNavSize] = useState(55)
  //x coordinate of where white bar in nav should be
  const [positions, setPositions] = useState(Array(pages.length).fill(0))
  const [clickedImage, setClickedImage] = useState(0)


  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    let tempPositions = Array(pages.length).fill(0)
    for (let i = 0; i < pages.length; i++) {
      for (let j = 0; j < pages.length; j++) {
        if (j < i) {
          tempPositions[i] += pages[j].ref.current.offsetWidth
        }
      }
    }
    setPositions(tempPositions)
  }, [pages[0].ref, windowWidth])

  useEffect(() => {
    for (let i = 0; i < pages.length; i++) {
      if (pageN == i) {
        setNavSize(pages[i].ref.current.offsetWidth)
        setNavPosition(positions[i])
      }
    }
  }, [pageN, windowWidth])

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <>
      <Head>
        <title>Ferrero Ropher</title>
        <meta
          name="description"
          content="Small programming project by @FerreroRopher, check it out for more information on art commissions. Includes details about pricing and terms of service."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <Modal clickedImage={clickedImage} setClickedImage={setClickedImage}/>
        <div className={styles.midground} style={{width: pageN == 0?470:pageN == 1?1800:1100}}>
          <div className={styles.box}/>
          <header>
            <Image
              src={"/4.webp"}
              alt="picture of a girl"
              width={windowWidth >= 500?250:200}
              height={windowWidth >= 500?250:200}
              priority
              className={styles.logo}
              quality={100}
              loading="eager"
            />
            <div className={styles.social}>
              <a rel='noreferrer noopener' target='_blank' href='https://www.instagram.com/ferreroropher/' className={styles.instagramWrapper}>
                <Instagram/>
              </a>
              <a rel='noreferrer noopener' target='_blank' href='https://twitter.com/FerreroRopher' className={styles.twitterWrapper}>
                <Twitter/>
              </a>
              <a rel='noreferrer noopener' target='_blank' href='https://www.deviantart.com/ropher20' className={styles.deviantWrapper}>
                <Deviant/>
              </a>
            </div>
            <div 
              className={styles.titleWrapper} 
              style={{height: pageN == 0?(windowWidth >= 500?120:90):0, opacity: pageN == 0?1:0, marginBottom: pageN == 0?'1rem':'1rem', marginTop: pageN == 0?(windowWidth >= 500?'3rem': '1.5rem'):'1rem'}}>
              <h1>@FerreroRopher</h1>
              <h4>Commissions Open</h4>
            </div>
          </header>
          <nav 
            className={`${styles.nav}`}
            style={{backgroundPosition: navPosition, backgroundSize: navSize}}
          >
            <div className={styles.navBackground}/>
            <div className={styles.navTextWrapper}>
              {pages.map((page,index) => {
                return (
                  <Fragment key={page.name}>
                    {windowWidth >= 500?
                      <button onClick={() => {setPageN(index)}} className={styles.navButtons} ref={page.ref}>
                        <h5 className={styles.navText} style={{fontWeight: pageN == index?'700':'300'}}>{page.name}</h5>
                      </button>:
                      <button onClick={() => {setPageN(index)}} className={styles.navButtons} ref={page.ref}>
                        <page.icon style={{fill: pageN == index?'white':'rgba(255,255,255,0.3)'}}/>
                      </button>

                    }
                  </Fragment>
                )
              })}
            </div>
            <div className={styles.navLine}/>
            <div className={styles.navBox} style={{width: navSize, left: navPosition}}/>
          </nav>

          <div className={styles.contentWrapper}>
            <Prices pageN={pageN} windowWidth={windowWidth} setClickedImage={setClickedImage}/>
            <TOS pageN={pageN} windowWidth={windowWidth}/>
          </div>
        </div>
      </main>
    </>
  )
}
