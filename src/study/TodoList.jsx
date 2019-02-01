import React, {Component} from 'react';
import TodoListItemCheckBox from './TodoListItemCheckBox';
import {Input} from 'antd';
import Button from 'antd/es/button';
import './TodoList.less';

const Search = Input.Search;

class TodoList extends Component {

  static defaultProps = {
    items: [
      {name: 'React 개발에 필요한 환경을 구축한다.', completed: true},
      {name: '새로운 자바스크립트 문법을 익힌다. ES2015(ES6), ES7, ES8', completed: false},
      {name: '개발 편의를 위한 VSCode IDE를 익힌다', completed: false},
      {name: '기본적인 Git 사용법을 익힌다.', completed: true},
      {name: 'PR 코드 리뷰를 응용한 개발 프로세스를 익힌다.', completed: false},
      {name: 'React 로 간단한 노트앱을 만들어본다', completed: true},
    ],
  };

  constructor(props) {
    super(props);

    // this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  handleTitleClick() {
    console.log('handleTitleClick');
    console.log(this);
  }

  handleClick = e => {

  };

  render() {
    const {title, items} = this.props;

    return (
      <div >
        <div>
          <Search
            className={'Search'}
            placeholder="input search text"
            onSearch={value => console.log(value)}
            enterButton
            style={{width: 320}}
          />
        </div>

        <div className="TodoList">
          <h2 onClick={() => this.handleTitleClick()}>{title}</h2>

          <ul type="none">
            {
              items.map((item, index) => {
                return (
                  <li key={index} className="TodoListItem"><TodoListItemCheckBox {...item}/></li>
                );
              })
            }
          </ul>
        </div>
        <div>
          <Button type="primary" onClick={this.handleClick}>전체 선택</Button>

          할일:{} 완료:{items.length}
        </div>
      </div>
    );
  }
}

export default TodoList;
