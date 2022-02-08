class Clock extends React.Component {
  constructor(props) {
    super(props);
    // 특정 클래스가 내부적으로 가지고 있는 변수
    this.state = {
      date: new Date()
    };
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  //컴포넌트가 끝났을때 자동으로 불러와지는 함수
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  // 컴포넌트가 이용이 끝났을때 해당 인터벌 종료
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
   render() {
    return (
      <h3>현재 시각은 [{this.state.date.toLocaleTimeString()}] 입니다.</h3>
    );
  }
}

ReactDOM.render(<Clock/>, document.getElementById("root"));
