import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

 ReactDOM.render(<App />, document.getElementById('root'));


const myElem = <p>하이하이</p>;
const MyCom = () => <p>허이허이</p>;

class MyKlassCom extends React.Component {
  render() {
    return (
      <div>
        <p>qweqwe</p>
        <MyCom/>
        {MyCom()}
      </div>);
  }
}

function tick() {
  const element = (
    <div>
      <h1>Hello, world</h1>
      <h2>Time : {new Date().toLocaleTimeString()}</h2>

    </div>
  );
  // ReactDOM.render(element, document.getElementById('root'));
}

const nTimer = setInterval(tick, 1000);

const nTimer1 = setTimeout(function() {
  clearInterval(nTimer);
}, 5000);


const FunctionalComponent = () => (
  <div>
    <h2>함수형 컴포넌트</h2>
    <p>Time : {new Date().toLocaleTimeString()}</p>
  </div>
);

class StatelessComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>클래스형 컴포넌트, 상태가 없는 컴포넌트</h2>
        <p>Time : {new Date().toLocaleTimeString()}</p>
      </div>
    );
  }
}


class StatefulComponent extends React.Component {
  //constructor 생성자
  constructor(props) {
    super(props);
    this.state = {
      now: new Date().toLocaleTimeString(),
    };
    setTimeout(() => {
      this.setState({
        now: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h2>클래스형 컴포넌트, 상태가 있는 컴포넌트</h2>
        <p>Time : {this.state.now}</p>
      </div>
    );
  }
}



// ReactDOM.render(
//   <div>
//     <FunctionalComponent/>
//     <StatelessComponent/>
//     <StatefulComponent/>
//   </div>
//   , document.getElementById('root'),
// );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
