import styled from "styled-components";

const LoginForm = ({ isShow }) => {
  if (isShow) {
    return (
      <Form>
        <Title>Login</Title>
        <FormItem>
          <Label>Username</Label>
          <FormInput />
          <Label>Password</Label>
          <FormInput type={"password"} />
          <BtnLogin>LOGIN</BtnLogin>
        </FormItem>
      </Form>
    );
  }
};

export default LoginForm;

const Form = styled.form`
  background-color: #040714;
  margin-top: 100px;
  position: fixed;
  height: 80%;
  width: 650px;
  justify-content: center;
  border-radius: 12px;

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

const BtnLogin = styled.a`
  margin-top: 40px;
  height: 35px;
  width: 450px;
  border: 1px solid white;
  border-radius: 12px;
  padding: 0 12px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: black;
    border-color: transparent;
  }
`;
