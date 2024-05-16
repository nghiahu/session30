import React, { Component } from 'react'
interface Title{
    title:string
}
export default class Bt7 extends Component<{},Title> {
    componentDidMount() {
        document.title = "Tiêu đề"
      }
      render() {
        return (
          <div>
            Bài tập 7 <br />
            <h1>Ummmmm</h1>
          </div>
        );
      }
    }
