import React, {Component} from 'react';
import {Button, Input, Modal} from 'antd';
import './Counter.less';

class Counter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      list: [1, 2, 3, 4, 5],
    };

  }


  handleClick = (e) => {
    this.setState((prevState) => {
      return {count: prevState.count + 1};
    });

    const {list} = this.state;

    let num = Math.random() * 1000;
    num = Math.ceil(num);

    console.log(num);

    // list.push(num);

    // this.setState({
    //   list: [num, ...list],
    // });

    const tepList = [...list];


    this.setState({
      list: list.filter(num => (num % 2 != 0)),
    });

  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };


  render() {
    const Search = Input.Search;
    console.log('!');
    return (
      <div className='Counter'>
        <header className='App-header'>
          {this.state.count}

          {
            this.state.list.map((item, idx) => {
              return <div>{item}</div>;
            })
          }

          <Search
            className={'Search'}
            placeholder="input search text"
            onSearch={value => console.log(value)}
            enterButton
            style={{width: 320}}
          />
          <Button onClick={this.handleClick}>
            카운트
          </Button>
          <br/>
          <Button type="primary" onClick={this.showModal}>
            Open Modal
          </Button>

          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>


        </header>

      </div>


    );
  }
}

export default Counter;
