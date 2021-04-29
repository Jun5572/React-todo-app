import React from "react";

// CSS in jsの前段で記述。
const style = {
  backgroundColor: "#c1ffff",
  padding: "10px",
  margin: "10px",
  borderRadius: "10px",
  input: {
    borderRadius: "16px",
    border: "none",
    padding: "6px 16px",
    outline: "none"
  }
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, onKeyDown, disabled } = props;
  return (
    <div style={style}>
      <input
        style={style.input}
        disabled={disabled}
        type="text"
        id=""
        placeholder="Please write TODO"
        value={todoText}
        onChange={onChange}
        onKeyDown={(e) => {
          onKeyDown(e);
        }}
      />
      <button disabled={disabled} onClick={onClick}>
        add
      </button>
    </div>
  );
};
