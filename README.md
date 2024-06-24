# REACT NOTES 

# Parcel Features
- Dev Bulid
- Local Server
- HMR = HOT MODULE REPLACEMENT
- File Watching Algorithm - written in C++
- Caching
- Image Optimization
- Minification
- Bundling
- Compress
- code Splitting
- Differential Bundling - Support older Browsers
- Good Error handling
- HTPPS
- different dev and production(prod) bundles

# JSX
- JSX is a javascript XML, JSX is not a html or xml, it sepeart syntax
- JSX is not understand by browers.

# BABLE
- Bable is transpiler or Compailer, it converts the jsx into React element.
- The React Element is object that object will convert into html with the help of ReactDOM(render Method).
- This is Example how it work - 'const heading = `<h1>hello world</h1>` BABLE CONVERT INTO 'const heading = React.createElement('h1',{},'hello world')'
- Bable package coming from parcel.

# Componets 
- In react thier, we can create two way's of compent's one class based compent and other one is function based compent.
- class based compents are old, function based compents are new version of react.
- what is a compent? compent contain's a element like h1,div this are elements. Component's like cards, footer, header this are all compents.
- syntaxs 
  `const FunComponent = ()=> (` 
  `<div>`
      `<h1>This is Functional Component</h1>`
 `</div>`
 `);`
- Inside a function we are returing the jsx element.
- function name should start with capital letter, because to understand by the bable.
- shorter way of declaring the functional component's 
  `const Heading = ()=> (<h1 id="heading">This is a JSX Element</h1>);`
- If you need to write the js inside JSX we should declare it inside {JAVASCRIPT} curly brackets.
- syntaxs 
  `const num = 10;`
  `const FunComponent = ()=> (`
  `<div>`
      `<h1>{num + 10}</h1>`
      `<h1>This is Functional Component</h1>`
  `</div>`
  `const root = ReactDOM.createRoot(document.getElementById('root'));`
  `root.render(<FunComponent/>); Here the functional component should be writen as self closing tag. But we can also write normal tag root.render(<FunComponent><FunComponent/>);`
`);`
- What is a component compostion? A component inside a other component that is a component compostion.
- If i use Api data into the JSX as javascript.
  LIKE THIS 
  `const data = ap.getData();`
  `const funCom = () => (`
    `return {data}`
   ` _<h1>Above text coming from API<h2>_`
  `)`
- The above code accesing the data from api if the data was danger(hacking) the js will stop using are excuting the date.