import React,{useState} from 'react'
import Header from '../Header'
import Banner from '../Banner'
import Collections from '../Collections'
import Footer from '../Footer'
import{Earings,Necklaces} from '../../data'
import NecklaceCollection from '../NecklaceCollection'
const Mainpage = () => {
  const[earings,setEarings]=useState(Earings)
  const[necklaces,setNecklaces]=useState(Necklaces)
  console.log(Earings)
  return (
    <div>
      <Header/>
      <Banner/>
      <Collections earings={earings}/>
      
      <NecklaceCollection necklaces={necklaces}/>
      <Footer/>
    </div>
  )
}

export default Mainpage
