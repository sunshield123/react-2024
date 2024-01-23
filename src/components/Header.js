import { useState,useEffect } from "react";

const Header = () => {

  [btnName, setBtnName] = useState("login");

  // useEffect(()=>{
  //   console.log("called every time when component is rendered ")
  // })

  // useEffect(()=>{
  //   console.log("called just ones and on initiail load")
  // },[])


  // useEffect(()=>{
  //   console.log("called whenever btnName changes")
  // },[btnName])

  const handleLogin = (btnName) => {
    setBtnName(btnName === "login" ? "logOut" : "login");
  };

  useEffect(()=>{
    console.log("use Effect called")
  },[])

  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://i.etsystatic.com/21215114/r/il/d0c7bd/4104680841/il_fullxfull.4104680841_hxug.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={() => handleLogin(btnName)}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
