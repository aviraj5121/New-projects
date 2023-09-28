import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import image1 from "./delete/hole.jpg"
const Parallaximg = () => {
  return (
    <>
    <ParallaxBanner 
    layers={[{image:image1,amount:0.5}]}
    style={{height:500}}
    >
    </ParallaxBanner>
    </>
  )
}

export default Parallaximg
