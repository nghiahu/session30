import React, { Component } from 'react'
interface State{
    company:string
}
export default class Bt3 extends Component<{},State>{
    constructor(props:{}){
        super(props)
        this.state = {
            company:"Rikkei Academy"
        }
    }
    handleClick=()=>{
        this.setState({company:"RikkeiSoft"})
    }
  render() {
    return (
      <div>Bài tập 3 <br />
        {this.state.company}
        <br />
        <button onClick={this.handleClick}>Change state</button>
      </div>
    )
  }
}
