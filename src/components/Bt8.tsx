import React, { Component } from 'react';

export default class Bt8 extends Component<{},any> {
  constructor(props:{}) {
    super(props);
    this.state = {
      title: ''
    };
  }

  componentDidMount() {
    const titElement = document.getElementById('tit') as HTMLInputElement;
    if (titElement) {
      document.title = titElement.value;
    }
  }

  handleChange = (event:any) => {
    this.setState({ title: event.target.value }, () => {
      document.title = this.state.title;
    });
  };

  render() {
    return (
      <div>
        Bài tập 8 <br />
        <h3>Thay đổi tiêu đề</h3> <br />
        <input
          id="tit"
          type="text"
          placeholder='Thay đổi tiêu đề'
          value={this.state.title}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

