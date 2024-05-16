import React, { Component, useState } from 'react'
import A from './A'
interface Props{

}
interface State{
  name:string
  age:number
  count:number
 
}
export default class App extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state={
          //chứa dữ liệu 
          name:"Minh thu",
          age:20,
          count:0,
          
        }
        console.log("giai đoạn khởi tạo")
    }
    // phương thức thay đổi state
    // khi muốn cập nhật thì dùng setstate
    handleClick = () =>{
      this.setState({count:this.state.count + 1})
    }
    componentWillMount(): void {
        console.log("component willmount được gọi")
    }
    componentDidMount(): void {
      console.log("component didmount được gọi")
    }
    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
        return true
    }
    componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void {
        console.log("phương thức componentWillUpdate được gọi");
        
    }
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
      console.log("phương thức componentDidUpdate được gọi");
    }
    componentWillUnmount(): void {
        console.log("phương thức componentWillUnmount ");
        
    }
  
  render(){
    console.log("component bắt đầu re-render")
    return (
      <div>
              {/* 
        tạo class component
        life cycle(vòng đời của 1 component => chỉ áp dụng với class)
        trải qua 4 giai đoạn
        1.giai đoạn khởi tạo(initial)
        khởi tạo state,props
        2.giai đoạn mounting (gắn vào thêm vào)
        cung cấp các phương thức mặc định (có sẵn)
        (
          -componentWillUnmount
          -componentDidMount
          luồng chạy willmount => reder => didmount
        )
        sau khi giai đoạn khởi tạo xong thì chạy vào phương thức componentWillMont => reder => didmount
        3.giai đoạn update (thay đổi)
        -Xảy ra khi state hoặc props thay đổi thì chạy vào giai đoạn update 
        -cung cấp các phương thức :
            1. shouldComponentUpdate => bắt buộc phải return true hoặc false,nếu không khai báo thì mặc định là true
            2. componentWillUpdate
            3. componentDidUpdate
        4.giai đoạn unmounting (gỡ bỏ xóa bỏ)
          -Xảy ra khi component bị xóa khỏi dom
      */}
      <p>Giá trị biến count: {this.state.count}</p>
      <button onClick={this.handleClick}>count</button>

      </div>
    )
  }

}


