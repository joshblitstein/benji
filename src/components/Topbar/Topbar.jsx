import React from 'react'
import './Topbar.scss'


export default function Topbar({setMenuOpen, menuOpen}) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className='wrapper'>
                <div className="left">
                    <a href = '/' className='logo'>Benjamin A. Thall</a>
                    <div className="itemContainer">
                      Live Love Learn
                    </div> 
                    <div className="itemContainer">
                    
                    </div> 
                
                </div>  
                
               
                <div className="right">
                    <div className="container">
                       
                    </div>
                    <div className="hamburger" onClick ={()=> setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
          </div>
        </div>
    )
}