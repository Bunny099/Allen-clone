import React from "react";

function Testimonial() {
  return (
    <div style={{display:"flex",columnGap:"2rem"}}>
      <div
        style={{
          width: "300px",
          height: "460px",
          backgroundColor: "#1a2439",
          padding: "20px",
          margin:"2px",
          borderRadius:"15px"
        }}
      >
        <p style={{ fontSize: "1.35rem", color: "gray",paddingBottom:"2rem",lineHeight:1.2 }}>
          I chose ALLEN Online Programs because I wanted to balance my NEET prep
          with my school schedule. The program's structure, from daily homework
          to post-class handouts, was well-organized & my teachers were always
          available in case I had any doubts.
        </p>
        
          <div style={{ display: "flex" , columnGap:"2rem",marginTop:"5rem"}}>
            <img style={{width:"75px",borderRadius:"50%",height:"75px"}}
              src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1725858116%2FSarth-128x128_wrp1pw.webp&w=64&q=100"
              alt=""
            />
            <div style={{display:"flex",flexDirection:"column",gap:0,}}>
              <h3 style={{margin:0,fontSize:"1.3rem",color:"white"}}>SARTH PATIL</h3>
              <p style={{ fontSize:"1rem",color:"gray"}}>NEET-UG 2024, Score 710/720</p>
            </div>
          </div>
       
      </div>
      <div
        style={{
          width: "300px",
          height: "460px",
          backgroundColor: "#1a2439",
          padding: "20px",
          margin:"2px",
          borderRadius:"15px"
        }}
      >
        <p style={{ fontSize: "1.35rem", color: "gray",paddingBottom:"2rem",lineHeight:1.2 }}>
        I took NEET in 2023 but didn’t achieve my desired score, so I reattempted in 2024 with ALLEN Online Programs. The top-quality faculty, study material, & personalised experience on the ALLEN app helped me improve my score by 100 marks from my previous attempt.
        </p>
        
          <div style={{ display: "flex" , columnGap:"2rem",marginTop:"5rem"}}>
            <img style={{width:"75px",borderRadius:"50%",height:"75px"}}
              src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1725858116%2FGalib-128x128_1_ktw4sw.webp&w=64&q=100"
              alt=""
            />
            <div style={{display:"flex",flexDirection:"column",gap:0,}}>
              <h3 style={{margin:0,fontSize:"1.3rem",color:"white"}}>SEKH GALIB RAZA</h3>
              <p style={{ fontSize:"1rem",color:"gray"}}>NEET-UG 2024, Score 695/720</p>
            </div>
          </div>
       
      </div>
    </div>
  );
}

export default Testimonial;
