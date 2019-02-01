import React, {Component} from 'react';
import './App.css';
import TodoList from './study/TodoList';
import Timer from './study/Timer';
import Toggle from './study/Toggle';
import Header from './study/Header';
import MarkEdior from './study/MarkEdior';
import Counter from './study/Counter';
import AppRouter from './study/AppRouter';
import AppRouter2 from './study/AppRouter2';

class App extends Component {
  state = {
    isUnmount: false,
    isTimerUnmount: false,
    data: [
      {name: 'React 개발에 필요한 환경을 구축한다.', completed: true},
      {name: '새로운 자바스크립트 문법을 익힌다. ES2015(ES6), ES7, ES8', completed: false},
      {name: '개발 편의를 위한 VSCode IDE를 익힌다', completed: false},
      {name: '기본적인 Git 사용법을 익힌다.', completed: true},
      {name: 'PR 코드 리뷰를 응용한 개발 프로세스를 익힌다.', completed: false},
      {name: 'React 로 간단한 노트앱을 만들어본다', completed: true},
    ],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: [
          {name: 'React 개발에 필요한 환경을 구축한다.', completed: true},
          {name: '새로운 자바스크립트 문법을 익힌다. ES2015(ES6), ES7, ES8', completed: true},
          {name: '개발 편의를 위한 VSCode IDE를 익힌다', completed: true},
          {name: '기본적인 Git 사용법을 익힌다.', completed: true},
          {name: 'PR 코드 리뷰를 응용한 개발 프로세스를 익힌다.', completed: true},
          {name: 'React 로 간단한 노트앱을 만들어본다', completed: true},
        ],
      });
    }, 2000);

    // setTimeout(() => {
    //   this.setState({
    //     isUnmount: true,
    //   });
    // }, 10000);
  }

  handleExpireTimer = (arg) => {
    // console.log(this.state);
    console.log(arg);
      this.setState({
        isTimerUnmount: true,
      });
  }

  render() {
    return (
      <div className="App">
        {/*<header className="App-header">*/}
          {/*<ControlledForm />*/}
        {/*</header>*/}
        {/*<MarkEdior />*/}

        {/*<AppRouter2 />*/}
        <AppRouter />
        {/*<Counter />*/}
        {/*<Header />*/}
        {/*<Toggle/>*/}
       {/* {!this.state.isUnmount && <TodoList title={'강의목표'} />}*/}

      {/*  {!this.state.isTimerUnmount && <Timer expireDate={'2019-01-30T18:00:00+09:00'}
                                              onExpired={this.handleExpireTimer}
        />}*/}
      </div>
    );
  }
}

export default App;
