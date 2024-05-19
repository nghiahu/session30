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
import Bt9 from './components/Bt9'
import Bt10 from './components/Bt10'
import BT11 from './components/Bai11_12/Todolist'

interface State{
  status:string
  message:string
  show:boolean
  inputVale:string
  jobs: Job[]
}
type Job = {
  id:number
  name:string
  status:boolean
}
export default class App extends Component<{},State> {
  constructor(props:{}){
    super(props)
    this.state = {
      status:'Open the from',
      message:'Interface rendering',
      show: false,
      inputVale:'',
      jobs: []
    }
}
componentDidMount(): void {
    const joblocal = localStorage.getItem("jobs");
    this.setState({
      jobs:joblocal? JSON.parse(joblocal) : []
    })

    
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
        {/* <Bt1></Bt1>
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
        <Bt9></Bt9>
        <Bt10></Bt10> */}
        <BT11></BT11>
      </div>  
    )
  }
}

