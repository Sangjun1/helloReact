import React, {Component} from 'react';
import * as moment from 'moment';

moment.locale('ko');

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mtnow: moment(),
    };
  }

  componentDidMount() {
    setInterval(()=>{
      this.setState({
        mtnow: moment()
      })
    }, 2000)
  }

  render() {
    const {expireDate, onExpired} = this.props;
    const mtNow = this.state.mtnow;
    const mtexpireDate = moment(expireDate);

    const isExpired = mtexpireDate < mtNow;

    // onExpired(isExpired);

    return (
      <div>
        <div>{'현재 시간 : ' + mtNow.format('A h:mm:ss')}</div>
        {isExpired ? (<div>종료되었습니다.</div>)
        :(
          <>
            <div>{mtexpireDate.fromNow() + '후 강의가 종료됩니다.'}</div>
          </>
          )}

      </div>
    );
  }
}

export default Timer;
