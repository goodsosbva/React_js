import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as React from "https://cdn.skypack.dev/react@17.0.1";

function formatInfo(s) {
  return s.name + "[" + s.id + "]";
}

const s = {
  id: "201714167",
  name: "kwon hyeon sung",
  color: 'blue'
}

const element = (
  <h3 class={s.color}>
    {formatInfo(s)}
  </h3>
);

ReactDOM.render(element,
document.getElementById('root'));
