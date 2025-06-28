import React from 'react'
import Herosection from '../components/Herosection'
import Featuredsection from '../components/Featuredsection'
import TrailersSection from '../components/TrailersSection'
import HeroPart from '../components/HeroPart'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <>
     {/* <Herosection/>   */}
     <HeroPart />
     <Featuredsection /> 
     <Banner /> 
     <TrailersSection />
    </>
  )
}

export default Home