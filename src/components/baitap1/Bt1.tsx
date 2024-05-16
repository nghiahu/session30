import React, { Component } from 'react';
interface State{
  userName:string
}
export default class Bt1 extends Component<{},State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userName: "Duy Bùi"
    };
  }
  componentWillMount(): void {
      
  }
  componentDidMount(): void {
      
  }
  render() {
    return (
      <div>Bài tập 1
        <p>{this.state.userName}</p>
      </div>
    );
  }
}