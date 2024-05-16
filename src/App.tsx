import React, { Component } from 'react'
import Conponent from "./components/conponentMount"
import Bt1 from './components/baitap1/Bt1'
import Bt2 from './components/baitap2/Bt2'
import Bt3 from './components/Bt3'
import Bt4 from './components/Bt4'
import Bt5 from './components/Bt5'
import Bt6 from './components/Bt6'
import Bt7 from './components/Bt7'
import Bt8 from './components/Bt8'
interface Props{
  status:string
  message:string
}
export default class App extends Component<{},Props> {
  constructor(props:Props){
    super(props)
    this.state = {
      status:'Open the from',
      message:'Interface rendering'
    }
}
  haldelChange=()=>{
    this.setState({status:"Close the from"})
  }
  haldelChanges=()=>{
    this.setState({message:"hello"})
  }
  render() {
    return (
      <div>
        <Bt1></Bt1>
        <Bt2></Bt2>
        <Bt3></Bt3>
        <Bt4></Bt4>
        <div>
          <Bt5 status={this.state.status}></Bt5>
          <button onClick={this.haldelChange}>Change props</button>
        </div>
        <div>
        <Bt6 mess={this.state.message}></Bt6>
        <button onClick={this.haldelChanges}>Change props</button>
        </div>
        <Bt7></Bt7>
        <Bt8></Bt8>
      </div>  
    )
  }
}

