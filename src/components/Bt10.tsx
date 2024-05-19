import React, { Component } from 'react'
interface Props{

}
interface State{
    count:number
    timerId:number
}
export default class Bt10 extends Component<Props,State> {
    constructor(props:Props){
        super(props);
        this.state = {
            count: 0,
            timerId:0
        }
    }
    componentDidMount(): void {
        const timmerId = setInterval(()=>{ //hàm delay
        //     if(this.state.count === 10){
        //         this.setState({
        //             count: 0,
        //         })
        //     }else{
        //     this.setState({
        //         count: this.state.count + 1
        //     })
        // }
        this.setState({
            count: this.state.count === 10 ? 0 : this.state.count + 1
        })
        },1000)
        this.setState({
            timerId: timmerId
        })
    }
    // Hủy bỏ sự kiện
    componentWillUnmount(): void {
        clearInterval(this.state.timerId)
    }
  render() {
    return (
      <div>Bài tập 10 <br />
      Count: {this.state.count}
      </div>
    )
  }
}
