class Clock extends React.Component {
  constructor(props) {
    super(props);
    // 특정 클래스가 내부적으로 가지고 있는 변수
    this.state = {
      date: new Date()
    };
  }
  goBack() {
    let nextDate = this.state.date;
    nextDate.setSeconds(nextDate.getSeconds() + 10);
    this.setState({
      date: nextDate
    });
  }
  
   render() {
    return (
      <div>
      <h3>현재 시각은 [{this.state.date.toLocaleTimeString()}] 입니다.</h3>
        <button onClick={this.goBack.bind(this)}>10초 앞으로</button>
      </div>
    );
  }
}

ReactDOM.render(<Clock/>, document.getElementById("root"));
