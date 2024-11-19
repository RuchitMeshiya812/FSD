import React, { Component } from 'react'

class Welcome extends Component{
    constructor() {
        super()
            this.state = {
                message : "WELCOME TO CHARUSAT !!"
            }
    }
    changeMsg()
    {
        this.setState({
            message : "THANK YOU"
        })
    }
    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick = {()=>this.changeMsg()}>Click</button>
            </>
        )
    }
}

export default Welcome