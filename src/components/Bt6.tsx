import React, { Component } from 'react'
interface Props{
    mess:string
}

export default class Bt6 extends Component<Props>{

    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<{}>, nextContext: any): boolean {
        return false
    }
  render() {
    const {mess} = this.props
    return (
      <div>
        Bài tập 6 <br />
        Message: "{mess}" <br />
      </div>
    )
  }
}
