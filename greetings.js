import React from 'react'

// functional Component
// const Greet = (props) =>
// {
//     console.log(props)
//     return(
//       <>
//         <h1>Welcome to CHARUSAT!!</h1>
//         <h2> {props.name} </h2>
//       </>
//     )
// }
// class component

// class Greetings extends Component{
//   render()
//   {
//     return <h1>WELCOME TO CHARUSAT !! , {this.props.deptName}</h1>
//   }
// }

const Greetings = props => {
  const {name, institute} = props
  return (
    <>
    <h1>Welcome to {institute}, Dear {name} !!</h1>
    </>
  )
}

export default Greetings