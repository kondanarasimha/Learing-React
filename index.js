import React from "react";
import ReactDOM from "react-dom/client";

const Logo = ()=> (
  <div className="company-Logo">
    <img className="logo" src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" alt=""></img>
    <h2>Click Me</h2>
  </div>
)

const SearchBar = ()=> (
  <div className="input-container">
    <input type="search" placeholder="Search"></input>
  </div>
)

const Profile = ()=> (
  <div>
    <img class="logo" src="https://img.freepik.com/free-photo/smiley-man-holding-camera-front-view_23-2149915895.jpg" alt=""></img>
  </div>
)
  

const HeaderCompountent = ()=> (
  <div className="main-container">
    <Logo/>
    <SearchBar/>
    <Profile/>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderCompountent/>);