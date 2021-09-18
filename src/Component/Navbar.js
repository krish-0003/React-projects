import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function Navbar(p) {
    const [text,updated_text]=useState("")
    let click=()=>{
        updated_text(text.toUpperCase())
    }
    return (
        <div>
<nav>
          <ul>
            <li>
              <Link to="/">MAin Page</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/home">home</Link>
            </li>
          </ul>
        </nav>
            {/* <textarea name="" id="" cols="30" value={text} onChange={(e)=>{
                updated_text(e.target.value)
            }} rows="10"></textarea>
        <button id="sub" onClick={click}>convert</button> */}

        </div>
    )
}
// Navbar.propTypes = {
//     name: PropTypes.string.isRequired
//   };