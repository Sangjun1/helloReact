import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));


const myElem = <p>하이하이</p>;
const MyCom =()=> <p>허이허이</p>;

class MyKlassCom extends  React.Component {
    render() {
      return (
      <div>
        <p>qweqwe</p>
        <MyCom />
        {MyCom()}
      </div>);
    }
}

console.log(<myKlassCom />);
  console.log(myElem,MyCom(),<myCom />);
ReactDOM.render(<MyKlassCom />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
