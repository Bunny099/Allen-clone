import React from "react";
import Card from "../Components/Card";
import Card2 from "../Components/Card2";
import Card3 from "../Components/Card3";
import Card4 from "../Components/Card4";
function Home() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{
            marginTop: 60,
            width: "87%",
            marginBottom: "7rem",
            cursor: "pointer",
          }}
          src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1280,f_auto,q_auto/v1727944051/e8gk63cgiwlqg4dgtxmi.webp?_upload_ref=ic_img_tool"
          alt=""
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "4rem",
            marginRight: "4rem",
          }}
        >
          <h1 style={{ fontSize: "2.3rem", color: "white", margin: 0 }}>
            Your Dream.
          </h1>
          <h1 style={{ fontSize: "2.3rem", color: "white", margin: 0 }}>
            Our Expertise.
          </h1>
          <h3 style={{ fontSize: "1.3rem", color: "white", marginTop: "3rem" }}>
            What brings you to us today?
          </h3>
          <div className="homeBtn">
            <button>NEET</button>
            <button>JEE</button>
            <button>GRADE 6-10</button>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5rem",
          padding: "3rem",
        }}
      >
        <Card2 />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 4rem",
        }}
      >
        <h1 style={{ fontSize: "3.7rem", color: "white" }}>
          Our remarkable results in 2024
        </h1>
      </div>

      <div>
        <Card3 />
      </div>

      <div style={{display:"flex",justifyContent:"center",paddingBottom:"3rem"}}>
        <h1 style={{fontSize:"2.2rem",color:"white"}}>ALLEN App Advantage</h1>
      </div>

      <div style={{display:"flex",justifyContent:"space-between"}}>
        <div style={{padding:"2rem",width:"30%",paddingLeft:"2rem",paddingRight:"2rem"}}>
        <h1 style={{fontSize:"1.5rem",color:"white"}}>Achieve your dreams with the ALLEN App!</h1>
        <p style={{fontSize:"1.3rem",color:"gray"}}>Top Kota faculty, customised study tools, and AI-powered learning—all in one app.</p>
        <p style={{fontSize:"1.1rem",color:"GrayText"}}>All impact methodology &measurement validated by</p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1724133522/misc/allenworks-03_1_v3wu3m.svg" alt="" />
        </div>
      </div>

      <div style={{margin:"2rem"}}>
        <div>
          <h1 style={{fontSize:"2.3rem",color:"white"}}>Discover the perfect online program</h1>
        </div>
        <div>
        <Card4/>
        </div>
      </div>

      <div style={{margin:"4rem 2rem"}}>
        <h1 style={{fontSize:"2.2rem",color:"white"}}>Looking for a classroom based program?</h1>
        <div style={{display:"flex",justifyContent:"space-around",padding:"2rem",backgroundColor:"#1a2439",borderRadius:20,}}>
          <div style={{width:"30%"}}>
          <h1 style={{fontSize:"2.1rem",color:"white",fontWeight:"lighter"}}>Present in 53 cities with
          250+ classrooms</h1>
          <button style={{marginTop:"2rem",padding:"10px 24px",borderRadius:30,border:"none",fontSize:"1.3rem"}}>Find a Center</button>
          </div>
          <div>

          </div>
          <img style={{height:"250px",width:"520px"}} src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1707820846/Updated_size_classroom_ck4yjp.webp" alt="" />
          </div>
      </div>

    </div>
  );
}

export default Home;
