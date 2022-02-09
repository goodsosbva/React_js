class ApiExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }
  callApi = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json.title
        });
      });
  }
  componentDidMount() {
    this.callApi();
  }
  render() {
    return (
      <h3>
        {this.state.data ? this.state.data: 'data comming.'}
      </h3>
    )
  }
}

ReactDOM.render(<ApiExample/>,
               document.getElementById('root'));
