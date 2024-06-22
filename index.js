import React from "react";
import ReactDOM from "react-dom/client";

//This JSX code will convert into react with the help of bable this is package coming with parcel.
//Bable is a transpiler which convert into React element. React element is a object by using render method object into html. 
const heading = <h1 id="heading">This is a JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);