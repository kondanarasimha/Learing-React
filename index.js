import React from "react";
import ReactDOM from "react-dom/client";

const span = <span className="span-element">This is span</span>

const Heading = ()=> (
<h1 id="heading">This is a JSX Element {span}</h1>
);

const num = 10;

function testing() {
  console.log('function got excuted')
}

const FunComponent = ()=> (
  <div>
      <h1>{num + 10}</h1>
      <Heading/>
      <h1>This is Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<FunComponent/>);