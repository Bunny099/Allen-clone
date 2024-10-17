import React from 'react'

function ExamHero() {
  return (
    <div style={{padding:"3rem"}}>
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <div style={{width:"50%"}}>
                <h1 style={{fontSize:"2.6rem",color:"white"}}>NEET Online Coaching</h1>
                <p style={{fontSize:"1.05rem",color:"#e9e4e4",fontWeight:"20",lineHeight:2.5}}>Our NEET Online coaching programs prioritize the NCERT syllabus, a cornerstone for NEET success. You get access to exclusive study tools and techniques to enhance memory retention and boost your speed, two crucial factors in acing the NEET exam</p>
            </div>
            <div style={{padding:"4rem"}}>
                <img height={"270px"}  src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729081871/200_neet_nd7zeb.webp" alt="" />
            </div>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
            <img style={{width:"97%"}} src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1727444104/PLP_Ticker_tx7nvz.webp" alt="" />
        </div>
    </div>
  )
}

export default ExamHero