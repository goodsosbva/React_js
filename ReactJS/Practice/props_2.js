import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as React from "https://cdn.skypack.dev/react@17.0.1";


function User(props) {
  return (
    <div>
      <img src={props.user.imageUrl}/>
      &nbsp;
      <strong>{props.user.name}</strong>
    </div>
  );
}

function Board(props) {
  return (
    <section>
      <User user={props.user}/>
      {props.title}
      <hr/>
      {props.content}
    </section>
  );
}

const board = {
  title: '게시글 제목',
  content: '게시글 내용, 방가',
  user: {
    name: '권현성',
    imageUrl: 'https://placeimg.com/32/32/any'
  }
}

ReactDOM.render(
  <Board
    title={board.title}
    content={board.content}
    user={board.user}
   />,
  document.getElementById('root')
);
