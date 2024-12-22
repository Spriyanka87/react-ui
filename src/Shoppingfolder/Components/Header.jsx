import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
        <div className='left'>
            <div className='title'>
                <h1>Rajesh Jewellers</h1>
            </div>
        </div>
        <div className='center'>
            <ul>
                <li>Earings</li>
                <li>Necklace</li>
                <li>FingerRings</li>
                <li>Haram</li>
                
            </ul>
        </div>
        <div className='search'>
         <input type="text" size="30" placeholder='Search....'/>
             
        </div>
        <div className='right'>
            <div className='signin'>
                Signin/Signup
            </div>
        <div className='cart'>
            
            Cart  
    
        </div>    

        </div>
    </div>
  )
}

export default Header
