import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  margin: 0 auto;
  display: block;
  padding: 10px;
  border-radius: 4px;
  outline: 0;
  border: 0;
  background-color: #423737;
  color: #fff;
  :hover {
    background-color: #87e8de;
  }
`;

export const Label = styled.label`
  text-align: left;
  margin-bottom: 20px;
  font-size: 24px;
  color: #423737;
  display: block;
`;

export const Textarea = styled.textarea`
  border-radius: 4px;
  width: 80%auto;
  padding-left: 15px;
  margin-bottom: 10px;
  border: 1px solid #423737;
`;

export const Input = styled.input`
  height: 40px;
  border-radius: 4px;
  width: 80%auto;
  padding-left: 15px;
  margin-bottom: 10px;
  border: 1px solid #423737;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 400px;
  max-width: 85vw;
  margin: 0 auto;
  background-color: white;
  opacity: 0.7;
  padding: 15px;
  margin-bottom: 30px;
  border-radius: 8px;
`;
