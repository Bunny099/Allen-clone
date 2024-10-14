import React from 'react'
import { Link } from 'react-router-dom'

function Card3() {
  return (
    <div style={{display:"flex",padding:"5rem",justifyContent:"space-around"}}>

        <div>
        <img style={{width:470,borderRadius:15}} src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_600,f_auto,q_auto/v1727953163/oebyukgkusnrgafhi6kh.png?_upload_ref=ic_img_tool" alt="" />
        </div>
        <div style={{padding:"3rem"}}>
            <h1 style={{color:"white",fontSize:"2rem"}}>Allen online programs JEE Adavance 2024 results</h1>
            <h3 style={{fontSize:"1.4rem",color:"gray"}}>14 students have made it to the top 500 Air</h3>
            <Link style={{textDecoration:"none",color:"blue",fontSize:"1.1rem"}}>view Detail results</Link>
        </div>
        



    </div>
  )
}

export default Card3