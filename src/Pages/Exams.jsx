import React from 'react'
import ExamHero from '../Components/ExamHero'
import Card4 from '../Components/Card4'

function Exams() {
  return (
    <div >

      <div>
      <ExamHero/>
      </div>

     <div >
      <div style={{paddingLeft:"3rem"}}>
      <h1 style={{fontSize:"2.5rem",color:"white"}}>Online Coaching for NEET</h1>
      </div>
      
      <Card4/>
     </div>

     <div style={{margin:"2rem",display:"flex",justifyContent:"center",paddingTop:"3rem"}}>
      <img style={{cursor:"pointer"}} width={"97%"} src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1727296954/Carousel_j1svii.webp" alt="" />
     </div>

     
    </div>
  )
}

export default Exams