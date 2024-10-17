import React from "react";
import { Outlet } from "react-router";
import { BrowserRouter, Link, NavLink, Router } from "react-router-dom";
import Footer from "./Components/Footer";
function Allen() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          
          textAlign: "center",
          marginTop: 20,
        }}
      >
        <div className="header" style={{ display: "flex" }}>
          <NavLink to={"/"}>
            <img
              style={{ height: 28, margin: 3, marginBottom: 15 }}
              src="https://allen.in/logo_dark.svg"
              alt=""
            />
          </NavLink>

          <NavLink className={"NavLink"} to={"/exams"}>
            Exams
          </NavLink>
          <NavLink className={"NavLink"} to={"/programs"}>
            Programs
          </NavLink>
          <NavLink className={"NavLink"} to={"/scholarships"}>
            Scholarships
          </NavLink>
          <NavLink className={"NavLink"} to={"/testseries"}>
            Test series
          </NavLink>
          <NavLink className={"NavLink"} to={"/studymaterial"}>
            Study material
          </NavLink>
        </div>
        <div className="headerb">
          <button
            style={{
              backgroundColor: "white",
              color: "#0f1825",
              border: "none",
            }}
          >
            Talk to us
          </button>
          <button>login</button>
        </div>
      </div>
      <Outlet />
      <div>
      <Footer/>
      </div>
    </>
  );
}

export default Allen;
