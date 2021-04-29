import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">Done</p>
      <p>counts：{todos.length}</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="todo-item">
              <p>{todo}</p>
              <button onClick={() => onClickBack(index)}>back</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
