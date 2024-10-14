import React from "react";
import Card from "../Components/Card";
import Card2 from "../Components/Card2";
function Home() {
  return (
    <div >
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
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",
        padding:"2rem 4rem"}}>

        <h1 style={{fontSize:"3.7rem",color:"white"}}>Our remarkable results in 2024</h1>
      </div>

      <div>
        
      </div>

    </div>
  );
}

export default Home;
