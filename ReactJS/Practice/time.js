import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as React from "https://cdn.skypack.dev/react@17.0.1";


function tick() {
  const element = (
    <h3>현재 시각은 [{new Date().toLocaleTimeString()}]  입니다.
    </h3>
  );
  ReactDOM.render(element,
  document.getElementById('root'));
}

setInterval(tick, 1000);
