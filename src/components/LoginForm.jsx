import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  selectUserStatus,
  __getUserLogin,
} from "../redux/modules/user/userSlice";

const LoginForm = ({ isShow, handleClickLogin }) => {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const userStatus = useSelector(selectUserStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    setStatus(userStatus)
    console.log(status)
  },[userStatus]);
  
  if(status){
    console.log('tes')
    navigate('/home')
  }
  const getUserLogin = () => {
    dispatch(__getUserLogin(input));
  };

  const handleChangeInput = ({ target: { value, name } }) => {
    setInput({ ...input, [name]: value });
  };

  const handleClose = ({ target: { id } }) => {
    if (id === "outSideForm") {
      handleClickLogin();
    }
  };
  if (isShow && !userStatus) {
    return (
      <Container onClick={handleClose} id="outSideForm">
        <Form onsu>
          <Title>Login</Title>
          <FormItem>
            <Label>Username</Label>
            <FormInput name="username" onChange={handleChangeInput} />
            <Label>Password</Label>
            <FormInput
              name="password"
              type={"password"}
              onChange={handleChangeInput}
            />
          </FormItem>
          <BtnContainer>
            <BtnLogin onClick={() => getUserLogin()}>LOGIN</BtnLogin>
            <span>or</span>
            <BtnLogin>Sign Up</BtnLogin>
          </BtnContainer>
        </Form>
      </Container>
    );
  }
};

export default LoginForm;
const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 12;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background-color: #040714;
  margin-top: 80px;
  position: fixed;
  height: 80%;
  width: 650px;
  justify-content: center;
  border-radius: 12px;
  z-index: 11;

  transform-origin: left center;
  transform: scaleX(1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  /* &:not(:focus-within) {
  transform: scaleX(0);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  } */
`;
const Title = styled.h1``;

const FormItem = styled.div`
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  line-height: 2;
`;

const Label = styled.label`
  color: white;
  align-self: flex-start;
`;

const FormInput = styled.input`
  height: 40px;
  width: 450px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const BtnContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 2;

  span {
    padding: 10px;
  }
`;

const BtnLogin = styled.a`
  /* margin-top: 40px; */
  height: 35px;
  width: 450px;
  border: 1px solid white;
  border-radius: 12px;
  padding: 0 12px;
  text-align: center;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: black;
    border-color: transparent;
  }
`;
