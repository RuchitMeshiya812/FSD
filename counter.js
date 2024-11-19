// import React, {Component} from 'react'

// class Counter extends Component{
//     constructor(){
//         super()
//         this.state = {count : 0}
//     }
//     increment()
//     {
//         this.setState({
//             count : this.state.count + 1
//         })
//         console.log(this.state.count)
//     }
//     render()
//     {
//         return (
//             <>
//                 <div>count - {this.state.count}</div>
//                 <button onClick = {()=>this.increment()}>Increment</button>
//             </>
//         )
//     }
// }
// export default Counter

import React,{Component} from "react";



class counter extends Component{
constructor(){
    super()
    this.state={
        count:0
    }
}

// increment(){
//     this.setState({
//         count :this.state.count +1
//     },
//     ()=>{
//         console.log('Callback value is : ',this.state.count)
//     }
// )
//     console.log(this.state.count)
// }

reset(){
    this.setState({
        count:0
    })
    console.log(this.state.count)
}

increment(){
    this.setState(prevState => ({
        count :prevState.count+1
    }))
    console.log(this.state.count)
}

decrement(){
    this.setState(prevState => ({
        count :prevState.count-1
    }))
    console.log(this.state.count)
}

increment_by_five(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
}
render(){
    return(
        <div id="btn">
            <div>count : {this.state.count}</div>
            <button onClick={()=>this.reset()}>Reset</button>
            <button onClick={()=>this.increment()}>Increment</button>
            <button onClick={()=>this.decrement()}>decrement</button>
            <button onClick={()=>this.increment_by_five()}>Increment by 5</button>
        </div>
    )
}
}
export default counter