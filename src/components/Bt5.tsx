import React, { Component } from 'react'
interface Props{
    status:string
  }
export default class Bt5 extends Component<Props> {
  render() {
    const { status }  = this.props
    return (
      <div>Bài tập 5 <br/>
        Status: "{status}"
      </div>
    )
  }
}
