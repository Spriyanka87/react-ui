import React from 'react'

const NecklaceCollection = (props) => {
    const{title,image1,image2,image3,image4,image5}=props.necklaces
  return (
    <div className="collectionSection">
      
      <div className="bannerBox2">
      <img src="assets/Banner1.jpg" alt='banner' height='150px' width="200px"/>
      </div>
      <h1>{title}</h1>
      <div className="necklaces">
        <img src={image1} alt={title}/>
        <img src={image2} alt={title}/>
        <img src={image3} alt={title}/>
        <img src={image4} alt={title}/>
        <img src={image5} alt={title}/>
    </div>
    </div>
  )
}

export default NecklaceCollection
