import React, {Component} from 'react';

class ReactStudyGoal extends Component {
  render() {
    return (
      <div className="checkBoxText">
        <h2>강의목표</h2>
        <ui>
          <li><input type="checkbox" checked={true}/> React 개발에 필요한 환경을 구축한다.</li>
          <li><input type="checkbox"/> 새로운 자바스크립트 문법을 익힌다. ES2015(ES6), ES7, ES8</li>
          <li><input type="checkbox"/> 개발 편의를 위한 VSCode IDE를 익힌다</li>
          <li><input type="checkbox"/> 기본적인 Git 사용법을 익힌다.</li>
          <li><input type="checkbox"/> PR 코드 리뷰를 응용한 개발 프로세스를 익힌다.</li>
          <li><input type="checkbox"/> React 로 간단한 노트앱을 만들어본다</li>
        </ui>
      </div>
    );
  }
}

export default ReactStudyGoal;
