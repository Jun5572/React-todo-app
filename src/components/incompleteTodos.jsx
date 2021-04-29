import React from "react";

export const IncompleteTodos = (props) => {
  const {todos, onClickComplete, onClickDelete} = props;
  return (
    <div className="incomplete-area">
      <p className="title">Not Yet</p>
      <p>counts：{todos.length}</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="todo-item">
              <p>{todo}</p>
              <button onClick={() => onClickComplete(index)}>done</button>
              <button onClick={() => onClickDelete(index)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
