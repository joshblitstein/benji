import React from 'react'
import { useState, useEffect } from 'react'
import './Lobby.scss'

export default function Lobby({ data }) { 

    //const [info, setInfo] = useState('')
    
    //useEffect()

    return (
        <div className='lobby' id='featured'>
            <div className="left">
                <div className="video">
                <video width="100%" height="100%" controls >
            <source src='public/assests/pexels-olya-kobruseva-6907151.mp4' type="video/mp4"/>
            </video>
                </div>
                <div className="text">
                    <h1>{data[data.length-1].title}</h1>
                    <h2>{data[data.length-1].topic}</h2>
                    <p>
                      {data[data.length-1].description}
                    </p>
                </div>
            </div>
            <div className="right">

            </div>
        </div>
    )
}
