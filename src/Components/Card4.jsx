import React from "react";
import { Link } from "react-router-dom";

function Card4() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>

      <div style={{ borderRadius: 10,height:180,width:280,backgroundColor:"#1a2439",padding:"20px",position: "relative" }}>
        <h1 style={{fontSize:"2rem",color:"white",position: "absolute", top: 0, left: 20 }}>JEE</h1>

        <Link style={{fontSize:"1.7rem",color:"blue",textDecoration:"none",position: "absolute", bottom: 10, left: 20}}>View</Link>
      </div>

      <div style={{ borderRadius: 10,height:180,width:280,backgroundColor:"#1a2439",padding:"20px",position: "relative" }}>
        <h1 style={{fontSize:"2rem",color:"white",position: "absolute", top: 0, left: 20 }}>NEET</h1>

        <Link style={{fontSize:"1.7rem",color:"blue",textDecoration:"none",position: "absolute", bottom: 10, left: 20}}>View</Link>
      </div>
      <div style={{ borderRadius: 10,height:180,width:280,backgroundColor:"#1a2439",padding:"20px",position: "relative" }}>
        <h1 style={{fontSize:"2rem",color:"white",position: "absolute", top: 0, left: 20 }}>Grade 6-10</h1>

        <Link style={{fontSize:"1.7rem",color:"blue",textDecoration:"none",position: "absolute", bottom: 10, left: 20}}>View</Link>
      </div>
      
    </div>
  );
}

export default Card4;
