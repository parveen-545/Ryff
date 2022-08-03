import React from 'react'
import '../components/Nav.css'
import navIcon1 from '../images/nav-icon-1.svg'
import navIcon2 from '../images/nav-icon-2.svg'
import navIcon3 from '../images/nav-icon-3.svg'
import navIcon4 from '../images/nav-icon-4.svg'
import navIcon5 from '../images/nav-icon-5.svg'
import navIcon6 from '../images/nav-icon-6.svg'
import navIcon7 from '../images/nav-icon-7.svg'

function LeftNav() {
    return ( <div className = "leftNav" >
        <ul>
        <li> <img src = { navIcon1 } alt = "img" /> </li> 
        <li className = "active" > < img src = { navIcon2 } alt = "img" /> </li> 
        <li> < img src = { navIcon3 } alt = "img" /> </li> 
        <li > < img src = { navIcon4 }
        alt = "img"/> </li> 
        <li > < img src = { navIcon5 }
        alt = "img"/> </li> 
        <li> <img src = { navIcon6 }
        alt = "img"/> </li> 
        <li> <img src = { navIcon7 }
        alt = "img"/> 
        </li>

        </ul>

        </div>
    )
}

export default LeftNav