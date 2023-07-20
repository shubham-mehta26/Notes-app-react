import React,{useRef} from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { useSidebar } from "../../context/sidebar";

export default function Navbar() {
  const { sidebar,setSidebar } = useSidebar();
  const inputRef = useRef(null);
  const toggleSidebar =()=>{
    setSidebar(!sidebar);
  }
  
  return (
    <div className="navbar">
      <div className="section s1">
        <div onClick={toggleSidebar} className="main-menu">
          <button className="button main-menu">
            <i className="bx bx-menu"></i>
          </button>
        </div>
        <div className="logo">
          <div className="logo-img">
            <img src={logo} alt="logo-img" />
          </div>
          <div className="logo-text">Notes</div>
        </div>
      </div>
      <div className="section s2">
        <div className="search">
          <div className="search-icon">
            <button onClick={()=>inputRef.current.focus()} className="button search">
              <i className="bx bx-search"></i>
            </button>
          </div>
          <div className="search-input">
            <input ref={inputRef} placeholder="Search" type="text" />
          </div>
        </div>
        <div className="settings">
          <button className="button theme">
            <i className="bx bx-sun sun"></i>
            <i className="bx bx-moon moon"></i>
          </button>
          <button className="button view">
            <i className="bx bx-list-minus list"></i>
            <i className="bx bx-grid-alt grid"></i>
          </button>
        </div>
      </div>
      <div className="section s3">
        <div className="account">
          <button className="button user">

        <i className='bx bx-user' ></i>
          </button>
        </div>
      </div>
    </div>
  );
}
