import React, { useEffect, useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodos } from "./components/incompleteTodos";
import { CompleteTodos } from "./components/completeTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  console.log(incompleteTodos.length);

  // inputに入力されたテキストを保持する関数
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタンが押されたときの処理
  const onClickAdd = () => {
    if (todoText === "") {
      return;
    }
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onKeyDown = (e) => {
    const keyCodeEnter = 13;
    if (todoText === "") {
      return;
    }
    if (e.keyCode === keyCodeEnter) {
      onClickAdd();
    }
  };

  // 削除ボタンが押された時の処理
  // どのTODOの削除が押されたかは引数にindexを渡してあげる
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 完了ボタンが押されたときの処理
  // どのTODOの完了ボタンが押されたかはincompleteTodos配列のindexを取得して実装
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  // 戻すボタンが押された時の処理
  // どのtodoが押されたかはcompleteTodos配列のindexをしゅとくして実装
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        onKeyDown={onKeyDown}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodo5個までだよ〜</p>
      )}

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
