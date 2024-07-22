# REACT NOTES 

# Why we Need React?
- Already thier is a javascript, why react are any other library/farmwork? Because those library and frameworks make our devlopment easy.
- Coming to the react it is very faster. But how? React using the virtual Dom to update the components on the Web page by using the Reconciliation, React fiber and Diff Algorithm make's React faster.

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

# Props 
- what is props?
- props is arugument's passing into the functional components. 
- Syntax 
  `const Card = (props)=> (`
  _We can also write like this_
  `const {name, sirname} = props` _This is destructer_

      _With descurting_
    `<h1>{name}</h1>`
    `<h1>{sirname}</h1>`

      _With out descurting_
  `<h1>{props.name}</h1>`
  `<h1>{props.sirname}</h1>`
  `)`
  _This is the way of passing aruguments into above cards as a Props_
  `<Card key={unique value} name="Narasimha", sirName="Konda"/>`
- Key property is more important for the functional components.
- WHY WE NEED TO USE KEY Property? KEY Property takes the unique value to render that component.
- EXAMPLE 
  There is a 100 cards rendering on the page we added 101 card without key Property, the react render all from 1 to 101 will get render but already 1 to 100 cards get render we need only render 101.
  To overcome this problem we using KEY propery, The React identify which component want to render. So the only 101 card get render.
- DON'T GIVE INDEX AS A key Property Value, Because we can remove component and add new components the   index's get mess up it cause performance issues, Use some unique value expect index.
- If in case there is no unique value then use index as key as a last last chance.

# What is Config Driven UI?
- config Driven UI(CDUI), This is way of configure the User InterFace(UI).
- EXAMPLE
  Using any food ordering app thier is some offer's based on the location. If the location is changed the offers and resturents are getting changed. 
  To Implement this functionality into UI, we are using the Config Drive UI(configure our UI).
  To Congfig the date was geting from the api. 

# Q1-Can i Write React code without JSX?
- Yes. We can write react code without using JSX(Javascript XML), using `by using createElement() method`.
- But it hard to maintain our react code for convenience using JSX.

# Q2-ES6 is Mandatory for React?
- NO. Without ES6 features we can build React application but good to use ES6 Features.

# Q3-How we write a comments in JSX.
- /* we can write comments like this in jsx */

# Q4-What is Virtual DOM.
- Virtual DOM is a lightweight copy of the real DOM that allows React to manage the changes into real DOM,
This process significantly enhances the performance of web UI.

# Import and Export ES6-Features
- Declartion of import and export
- Type 1(named import) -
  `export const name = 'Narasimha'`;
  `import { name } from 'filename.js'`;
  _File extension name is optional (.js)_
- Type 2 -
  `const name = 'Narasimha';`;
  `export default name`;
  _Here we declare it in two line to export;_
  `import name from 'filename.js'`
- Type 3
  `const sirName = 'Konda'; `
  `const name = 'Narasimha';`
  `export default {sirName,name}`
    _This way we can export hole js file_
  `import * As fullName from 'filename.js'`

# Hooks
- Hooks is a normal javaScript functions.
- Thier is two main types of Hooks
- useState();
- useEffect();

# Q5- What is Reconciliation, React fiber and Diff Algorithm?
- Reconciliation: 
  The process of updating the interface to match the latest data(sync with the data state in our React app).
  - Below things(react fiber,diff algorithm and state) those steps are involing in Reconciliation.

- React Fiber: 
  The modern, efficient way of performing reconciliation, allowing for smoother updates and better handling of priorities.
  - It knows which updates are more important and tackles those first. For example, responding to a user typing is more urgent than loading data in the background. 

- Diff Algorithm: 
  - A method used within the reconciliation process to compare virtual DOMs and identify the minimal changes needed for the real DOM.

# useEffect
- useEffect is a hook in react, by using this hook we can make a api call.
- useEffect will run onces the compent get render then the useEffect callback will get excuted.
- syntax
  `useEffect(()=> {`
    `fectingData()`
  `},[])`
  - It takes the two aruguments, callback functiona and array.

# What is Shimmer ?
- Shimmer a way to improve the UX, almost all web application follow this method.
- To get the data from api it takes some time, upto that the demo container with white are grey will display on the page.
- onces the Data get from api the shimmer will got remove and render the original data.
- Conditional rendering? To apply the shimmer to render on the page, we use condition to render the page onces the data get completed.
- loading(open web page) -> Render(with Shimmer) -> Api Data -> Again render(remove the shimmer and render with Api data).

# Q6 How the state variable const get changes?
- when we use the state variable we declare with a const, but we can change the value of const variable How?
  `const [name, setName]= UseState();`
  `setName('new value');`
-  when we change the value by using the state method`setName('new value')` the hole component get render and the `useState()` variable get change with new name with new value.
- `useState()` help us to render the element when the value get change.

# Q7 What is the differents between onKeyDown and onChange attributes
- When we type any letter in a input to access that letter or string using a onKeyDown and onChange but when we use the onKeyDown the last letter will getting missed because of the state mangement timing issue of updated before the input field includes the new key press, that's why use onChange attributes.
- syntax
  `<input onChange={(keys)=> {keys.target.value}} placeholder="search"/>`

# Q8 What is differents between expression and statement.
- expression returns the value here the example `const num = 10+5` so the output is `15` other example `const nums = getNums()` it will return the some value and store into the nums because it is a function expression.
- Coming to the Statement is a line by line instructions, Example `if(5 === num) {console.log('Not equal')}`. So here it cannot return any value.

# More Details About useEffect and useState hooks.
- useEffect and useState are coming from the react it is a javaScript functions.
- `useEffect(()=> {console.log('useEffect')})` It has no dependency array, so it called every time of component render.
- `useEffect(()=> {console.log('useEffect')},[])` It has a dependency array(empty), so it will call's only intial render of the component.
- `useEffect(()=> {console.log('useEffect')},[stateVariable])` It has a dependency, so it will call only when the stateVariable get change.

- `useState()` It was limited to the component, don't write statevariable outside of the components and it was top of inside component.
- don't write the `useState()` inside the condition statements and functions.

# Q9 Create a List.
- List mean's the combition of array values as a object is know as a list.
`const list = [{obj1},{obj2},{obj3}]`.

# Creating routes in react.
- What is a route the address of the page is know as a route, example home route "/home".
- In react we can create routes by using `react-route` package.
- syntax's to create a route 
  `import {createBrowserRoute, RouterProvider}` create help us to create the route urls and RouterProvider is component will help us to config the routes.
- Setup code 
  `const appRoute = createBrowserRoute([{`
  `path: '/',`
  `element: <AppLayout/>` 
  `}]);`

  `root.render(<RouterProvider router={appRouter}/>);`
- Implementing the error page using react router.
  `const appRoute = createBrowserRoute([{`
  `path: '/',`
  `element: <AppLayout/>,`
  `errorElement: <Error/>` 
  `}]);`
  - importing useRouteError hook from react router for the error message.
    `import {useRouteError} from 'react-router-dom'`
    `const err = useRouterError();`
    `console.log(err);`

# How to implement the child-routes.
- UseCase of Child routes - when i need header for every page of my website(different routes) in that case, We  using child route.
- step 1 - 
  `import {Outlet} from 'react-router-dom'`
- step 2 -
  `const AppLayout = ()=> {`
  `return(`
  `<div className='app'>`
    `<Header/>`
    `<Outlet/>`
  `</div>`
  `)}`
- step 3 -
  `const appRoutes = createBrowserRoute(`
  `[{`
    `path: /`,
    `Element: <AppLayout/>`,
    `children: [{`
      `path: '/',`
      `Element: <Body/>`
    `},{`
      `path: /contact,`
       `Element: <Contact/>`
    `}],`
    `errorElement: <Error />`
  `}]`
  `)`

# We Don't want to use `href={/contact}` inside button instade of that use Link from react-router-dom.
- syntax -
  `import {Link} from 'react-router-dom'`
  `<button><Link to="/contact">contact</Link><button/>`
  `<li><Link to="/">HOME</Link></li>`
- By using the Link the page can't re-load, It only refresh's(change) the components only.
# - That's why the react is a single application

# Types of routing
- There is two types of routing.
  1.client-side routing
  2.server-side routing
- In react we are doing client-side routing.
- In node we bulit a server for different routes to access the resource this is server-side routing.

# useParams Hook. 
- It is a Hook that help us to access the params from url.
- syntax 
  `import {useParams} from 'react-router-dom';`

# Class Based Component.
- Class based component is component as simliar as functional component.
- But in class base component we are using the javaScript class.
- syntax 
  `class componentName extend from react.Component{`
  `render() {`
    `return(`
      `<div>name</div>`
    `)}`
  `)};`
- To use the props in Functional Component.
- syntax 
  `class comonentName extend from react.Component{`
  `constructer(props) {`
    `super(props)`
    `//declaring a state here`
  `}`
    `render() {`
      `return(`
        `<div>{this.props.name}</div>` `//even we can destructer it`
      `)}`
    `)}`
- constructer is method use pass the arguments the super keyword help use to access the data of parent class.
- state Hook in class based component.
- syntax 
  `this.state={`
    `var1`:`value`,
    `var2`:`value`
  `}`
- There is no hooks in class based components, it has some reserved keywords like state.
- If we need to create the multiple state variables. Inside the state object need to define other property.
- how to set the value into state in class component.
- syntax
  `this.setState({`var1: this.state.var1 += 1`})` If we need to update are change the other state simple add the property name and the value into setState. 
- To access the state `this.state.propertyName`

# Class Based Render Cycle.
- Parent component have other component is know as child component.
- Parent class are Component(get render first)
    (first constructer will run)
    (second render method will run)
              |
  child class are Component(After parent render)
- `componentDidMount() {}` this a method to check the component get render are not, onces the component get render get sucess then the `componentDidMount() {}` will excuted.

# Usecase of `componentDidMount() {}`.
- To make a API call inside a class based component we use `componentDidMount() {}`(In functional component we use `useEffect()`).
- The react render component fast, So onces the class component get render after that the api call make by using the `componentGetMount()` in class component.
- `componentDidMount(){}` it was similar to the `useEffect()`.

# Rendring of Multiple child class components.
- Parent component
  1. constructer
  2. render
- child 1
  1. child 1 constructer
  2. child 1 render
- child 2
  1. child 2 constructer
  2. child 2 render

- Dom Get updated

- Child 1 componentGetMount will excute
- Child 2 componentGetMount will excute
- Parent ComponentGetMount will excute
- This is the way of render cycle work in multiple child class source 
 [Render Cycle Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ogimage.png);
 
# Custom Hooks
- By using modules feature in js, we Bulit a custom hooks to reuse the code in different files (or) pages of the code.
- Custom Hooks (or) hook is a javascript function.
- we need to declare the Custom hook using `use` as a starting keyword.

# How to Optimizing the App.
- Normaly the all components are combined into 1 javascript file inside a browser.
- If the file size increass the more the application get slow.
- To avoid the slow down of our application we split our code into different files.
- syntax
  `import react {lazy,suspense} from 'react'`
  `const component = lazy(()=> import('../filename'))`
  `<suspense fallback={shimmer ui}><component/></suspense>`
- In above code lazy load is a function coming from react, it help use to load slow to fetch the data in that files and supense is a component coming from react, it will display the data it wait till data was get.
- Using lazy function the import should be default other wise it through error.