import { useState } from "react";
import { addPost } from "../../../api/api";

const useForm = ({ checkPostHandler }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const textHandler = (e) => {
    setText(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newPost = { name, text };

    await addPost(newPost);
    checkPostHandler();

    setName("");
    setText("");
  };

  return {
    nameHandler,
    textHandler,
    onSubmit,
    name,
    text,
  };
};

export default useForm;
