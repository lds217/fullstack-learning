import React, { StrictMode }  from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// virtual DOM
// real DOM: browser understands only real DOM
// virtual dom -> real dom (rendering) thhrough create and render methods
// JSX code to transpile -> React.createElement() -> JS objects (virtual DOM) -> real DOM, this can be used Vite or Babel

createRoot(document.getElementById('root')).render(
    // this is JSX not React code
//   <p>
//     Hello World <strong>from React!</strong>
//   </p>

 // transpiler \/

// this is React code
    // React.createElement(
    //     "p",  // type (tag) (e.g., div, p, h1)
    //     null, // props (attributes) (e.g., className, id) 
    //     "Hello World ", // children
    //     React.createElement("strong", null, "from React!") // nested child
    // ) // hard to read and write so we use JSX

    // JSX to REACT code to real DOM?


    // exercise 1 JSX to React
   
    // <main>
    //     <Title>Welcome</Title>
    //     <Carousel images={6} />
    //     <a href="/blog">Go to the blog</a>
    // </main>
    
    // React.createElement(
    //     "main", // html tag need to be in string
    //     null,
    //     React.createElement(
    //         Title, // custom component no string
    //         null,
    //         "Welcome",
    //     ),  
    //     React.createElement(
    //         Carousel,
    //         {images:6},
    //     ),
    //     React.createElement(
    //             'a',
    //             {href:"/blog"},
    //             "Go to the blog"
    //         )
    // )

    //renderJSX()
    Main()
)
    // we can have  bracket for virable or math expression inside JSX ({}
    

    // For html it does not have error but in JSX its error 
    // if we have open tag we must have closing tag (e.g., <br></br>  or <br />


    // for special charcter it works noremally (e.g., &copy;) but not inside bracket ({}) (prevent injection attack
    
    //

function renderJSX() {
    const name = "React"
    const jsx = (
        <section>
            <h1>Hello {name.toUpperCase()}</h1>
            <p>This is a simple JSX example.</p>
            <p>2 + 2 = {2 + 2}</p>
            <p>Current Date and Time: {new Date().toLocaleString()}</p>
            <p>Special Character: &copy; 2024</p>
        </section>
    )
    return (jsx)
}

// we must aalways wrap multiple lines of JSX in a single parent element (e.g., div, section, fragment <></>), but the <></> 
// is preferred to avoid adding extra nodes to the DOM

// Benefits of JSX:
// Easier to read and write
// componet
// security (prevent injection attack)
// widely used in the React community

// Drawbacks of JSX:
// learning curve
// Slow (slight performance overhead due to transpilation
// require extra tooling (Babel, Vite

/*=============================*/ 
// export default vs export function
/*=============================*/


// export function is more efficient for tree shaking (optimize bundle size by removing unused code)
// but for small project default export is fine

// export default will allow us to import without curly braces {} ( the entire module is exported as a single entity not object with multiple properties)

/*=============================*/ 
// Componet and propoties
/*=============================*/

// There are 2 ways to create component in React:
// 1. Function component (most common)
// 2. Class component (less common, legacy)

function User({name, age}) {
    return <h1>Hello {name}, you are {age} years old.</h1>
}

function Main() {
    return (
        <main>
            <User name="Alice" age={30} />
            <User name="Bob" age={25} />
            <User name="Charlie" age={35} />
        </main>
    )
}

// class Uber extends React.Component {
//     render() {
//         return <h1>Welcome to Uber</h1>
//     }
// }

// The only reason use class comp is to log error boundary

