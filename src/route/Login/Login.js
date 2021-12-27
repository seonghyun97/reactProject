import React, { useState } from "react";
import styled from "styled-components";
import id from "./id.png";
import pass from "./pass.png";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [Id, SetId] = useState("");
  const [Pass, SetPass] = useState("");

  const Data: { id: string, pass: string }[] = [
    { id: "asdasd@naver.com", pass: "1234" },
    { id: "react@googe.com", pass: "12341234" },
    { id: "easy@hotmail.com", pass: "4351" },
  ];

  const navigate = useNavigate();
  const login = () => {
    var IdMatch = false;
    var PassMatch = false;
    Data.map((data, index) => {
      if (data.id === Id) {
        IdMatch = true;
        if (data.pass === Pass) {
          PassMatch = true;
        } else {
          PassMatch = false;
        }
      }
    });
    if (IdMatch === true) {
      if (PassMatch === true) {
        alert("성공");
        navigate("/todo");
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    } else {
      alert(" ID 가 틀렸습니다.");
    }
  };

  return (
    <Wrap>
      <Box>
        <LoginWrap>
          <LoginId>
            <Image src={id} />
            <Input
              onChange={(e) => {
                SetId(e.target.value);
              }}
            />
          </LoginId>
          <LoginPass>
            <Image src={pass} />
            <Input
              onChange={(e) => {
                console.log(e);
                SetPass(e.target.value);
              }}
            />
          </LoginPass>
        </LoginWrap>
      </Box>
      <LoginButtom onClick={() => login()}>
        <LoginText>LOGIN</LoginText>
      </LoginButtom>
    </Wrap>
  );
};
export default Login;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #301e4e;
`;
const Box = styled.div`
  width: 400px;
  height: 300px;
  border: solid 1px black;
  border-radius: 20px;
  background-color: #e5e5e5;
`;
const LoginWrap = styled.div`
  width: 100%;
  height: 75%;
  margin-top: 25%;
`;
const LoginId = styled.div`
  width: 300px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  border: solid 1px black;
  display: flex;
`;
const LoginPass = styled.div`
  width: 300px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  border: solid 1px black;
  display: flex;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  background-color: #6c5199;
`;
const Input = styled.input`
  width: 250px;
  border: 0px solid;
`;
const LoginButtom = styled.button`
  width: 300px;
  height: 50px;
  background-color: #e5e5e5;
  border-radius: 0px 0px 20px 20px;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginText = styled.div``;
