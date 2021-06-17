import React from 'react'
import './Search.scss'
import {useEffect, useState } from 'react'

export default function Search({ data }) {

    const [info, setInfo] = useState('')



    let textInput = React.createRef();

    function func(e){
        e.preventDefault()

        let input = textInput.current.value
        console.log(input)
        //loop throgh data and set state and use effect 
        let i;
        for(i=0; i <data.length;i++){
            if(data[i].topic == input || data[i].title == input  || data[i].searchWords == input){
             setInfo(data[i])
            }
        }
    
    }
  console.log(info)
    return (
        <div className ='search' id='search'>
            <div className="right">
            <div className="text">
            <h1>{info.title}</h1>
                    <h2>{info.topic}</h2>
                    <p>
                        {info.description}
                    </p>
                    </div>
            </div>
            <div className="left">
          <form onSubmit={func}>
            <input ref={textInput} type='text' placeholder='Search for topics or titles'  />
            </form>

            <video controls>

            </video>
            </div>
        </div>
    )
}
