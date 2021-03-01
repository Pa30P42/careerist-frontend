import React from "react";
import { Button, Label, Textarea, Input, FormContainer } from "./FormStyled";
import useForm from "./hooks/useForm";

const Form = ({ checkPostHandler }) => {
  const { nameHandler, textHandler, onSubmit, name, text } = useForm({
    checkPostHandler,
  });
  return (
    <FormContainer onSubmit={onSubmit}>
      <Label>Enter your name:</Label>
      <Input value={name} onChange={nameHandler} />
      <Label>Leave your post:</Label>
      <Textarea rows={10} cols={30} value={text} onChange={textHandler} />
      <Button type="submit">Add post</Button>
    </FormContainer>
  );
};

export default Form;
