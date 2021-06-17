import React from 'react'
import './Menu.scss'

export default function Menu({setMenuOpen, menuOpen}) {
    return (
        <div className ={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li onClick={() =>setMenuOpen(false)}>
                    <a href='#intro'>Home</a>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                    <a href='#featured'>Todays Video</a>
                </li>
              
                <li onClick={() =>setMenuOpen(false)}>
                    <a href='#search'>Search</a>
                </li>
            </ul>
            
        </div>
    )
}