import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as React from "https://cdn.skypack.dev/react@17.0.1";

// 프롭스의 계층적 이용
function Show(props) {
  return (
    <h3>
      Name is {props.name}
    </h3>
  );
}

function App() {
  return (
    <main>
      <Show name="권현성"/>
      <Show name="손흥민"/>
      <Show name="김고은"/>
    </main>
  );
}

Show.defaultProps = {
  name: '홍길동'
}

const element = <Show name="권현성"/>;
ReactDOM.render(<App/>,
               document.getElementById('root'));
