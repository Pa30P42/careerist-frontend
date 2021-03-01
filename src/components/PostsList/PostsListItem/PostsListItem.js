import React from "react";
import { Title, Post } from "./PostsListItemStyled";

const PostsListItem = ({ post }) => {
  return (
    <Post>
      <Title>{post.name}</Title>
      <p> {post.text} </p>
    </Post>
  );
};

export default PostsListItem;
