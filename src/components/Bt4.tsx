import React, { Component } from 'react'
interface State{
    company:string
}
export default class Bt4 extends Component<{},State>{
    constructor(props:{}){
        super(props)
        this.state = {
            company:"Học code để đi làm"
        }
    }
    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<State>, nextContext: any): boolean {
        return false
    }
    handleClick=()=>{
        this.setState({company:"RikkeiSoft"})
    }
  render() {
    return (
      <div>Bài tập 4 <br />
        Slogan: "{this.state.company}"
        <br />
        <button onClick={this.handleClick}>Change state</button>
      </div>
    )
  }
}
