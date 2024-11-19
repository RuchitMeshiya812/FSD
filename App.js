// import React, { Component } from 'react';
// import './App.css';
// import Greet from './components/greetings';
// import Welcome from './components/welcome';
// import Greetings from './components/greetings';
// import Counter from './components/counter';




// function Header(){
//   return <h1>Hello World!!!</h1>;
// }
// function App() { 
//   return <Header/>;
// }
// export default App



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Greetings name="Ruchit" institute="Counter"/>
//         <Counter />
//       </div>
//     );
//   }
// }
// export default App;



// import WelcomeMessage from "./components/WelcomeMessage";
// function App() {
//    return (
//       <div className="App">
//          <WelcomeMessage />
//       </div>
//    );
// }
// export default App;




// import React, {Component} from "react";
// import "./App.css";
// import Hookcounter from "./components/hookcounter";

// class App extends Component {
//    render(){
//      return (
//        <div className = "App">
//        <Hookcounter />
//        </div>
//      )
//    }
//  }
//  export default App;



// import React, {Component} from "react";
// import "./App.css";
// import HookMouse from './components/HookMouse';
// class App extends Component {
//    render(){
//      return (
//        <div className = "App">
//        <HookMouse />
//        </div>
//      )
//    }
//  }
//  export default App;



// import React, {Component} from "react";
// import "./App.css";
// import MouseContainer from './components/MouseContainer.js';

// class App extends Component {
//    render(){
//      return (
//        <div className = "App">
//        <MouseContainer></MouseContainer>
//        </div>
//      )
//    }
//  }
//  export default App;





// function component
// function App() {
//   return (
//     <Greet></Greet>
//   );
// };
// export default App;




// class App extends Component {
//   render(){
//     return (
//       <div className = "App">
//          { <Greetings name="Ruchit" />}
//         <Counter/>
        
//       </div>
//     )
//   }
// }
// export default App;



// function App(){
//   return(
//     <div className="app">
//         <h1>Hello World!!!</h1>
//     </div>
//   )
// }

// export default App;



// function Mybutton() {
//     return(
//         <button>I am button</button>
//     );
// }
// export default function MyApp() {
//     return (
//         <div>
//             <h1>
//                 welcome to my app
//             </h1>
//             <Mybutton/>   
//         </div>
//     );
// }




//FORM IN REACT
//
// import ReactDOM from 'react-dom/client';
// function MyForm() {
//     return(
//         <label>Enter your Name:
//             <input type='text' placeholder='name here'/>
//         </label>
//     )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);
// export default MyForm;





// import { useState } from "react";
// import ReactDOM from 'react-dom/client';

// function MyForm() {
//   const [name, setName] = useState("");

//   return (
//     <form>
//       <label>Enter your name:
//         <input
//           type="text" 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//     </form>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);
// export default MyForm;





import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`the name you enter is ${name}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit"/>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
export default MyForm;                             