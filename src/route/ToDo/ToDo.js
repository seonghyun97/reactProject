import React, { useState } from "react";

import styled from "styled-components";

const ToDo = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  function add() {
   setTodo([...todo, text]);
    todo.push(text);
  }
  const del = (index) => {
    todo.splice(index, 1);
    setTodo([...todo]);
  };
  console.log(todo);
  return (
    <Wrap>
      <TodoBox>
        <WrapLine>
          <Inputbox onChange={(e) => setText(e.target.value)}></Inputbox>
          <Add onClick={() => add()}>ADD</Add>
        </WrapLine>
        {todo.map((data, index) => (
          <WrapTodo>
            <Todo>{data}</Todo>
            <Delete onClick={() => del(index)}>delete</Delete>
          </WrapTodo>
        ))}
      </TodoBox>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
const TodoBox = styled.div`
  width: 700px;
  min-height: 400px;
  border: 1px solid black;
  background-color: #e5e5e5;
  border-radius: 20px;
`;
const WrapLine = styled.div`
  width: 80%;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  display: flex;
  margin-bottom: 40px;
`;
const Inputbox = styled.input`
  width: 90%;
  height: 57px;
  font-size: 40px;
  display: inline-block;
  border: 0px;
`;
const Add = styled.button`
  width: 10%;
  height: 60px;
  display: inline-block;
  border: 0px;
`;
const WrapTodo = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  width: 80%;
  display: flex;
  background-color: #fff;
`;
const Todo = styled.div`
  width: 90%;
  height: 50px;
  margin-left: 20px;
  font-size: 40px;
`;
const Delete = styled.button`
  width: 10%;
  height: 50px;
  border: 0px;
`;
export default ToDo;
