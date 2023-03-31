import styles from "@/styles/TOS.module.css"
import { inria } from "./fonts"

const TOS = ({pageN}) => {
  return (
    <div className={styles.tosWrapper} style={{height: pageN == 2?500:0, opacity: pageN == 2?1:0}}>
      <h2 style={{marginBottom: '1rem', marginTop: '2rem'}}>
        Terms of Service
      </h2>
      <p className={`${inria.className}`} style={{marginBottom: '2rem'}}>
        If you want to commission me, send me a message on twitter <span style={{color: '#10A2D0'}}>@FerreroRopher</span>!
      </p>
      <h3 className={`${inria.className}`} style={{marginBottom: '1rem'}}>
        Commissioning Process:
      </h3>
      <p className={`${inria.className}`} style={{marginBottom: '2rem'}}>
        1. Message me the following: <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a. Type of commission (Full Body, Head, Bust, etc..) <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b. Who you want me to draw <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c. References <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; d. Details about the drawing (Pose, shading, other objects) <br/><br/>
        2. Once I receive a commission I will quote a price. If you accept I will send you a paypal invoice and you will pay upfront. <br/><br/>
        3. Drawings can take up to 2-3 months depending on how busy I am. DM if you want an update.  <br/>
      </p>
      <h3 className={`${inria.className}`} style={{marginBottom: '1rem'}}>
        Conditions:
      </h3>
      <p className={`${inria.className}`} style={{marginBottom: '2rem'}}>
        1. I do not draw NSFW nor Furry. <br/>
        2. I own all rights to art I draw and may use commissioned art however I want. <br/>
        3. I do not give refunds. <br/>
      </p>
    </div>
  )
}

export default TOS