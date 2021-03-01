import React from "react";
import { Container, List } from "./PostsListStyled";
import Pagination from "../Pagination/Pagination";
import PostsListItem from "./PostsListItem/PostsListItem";

const PostsList = ({ posts, paginate, handlePageClick, allPages }) => {
  return (
    <Container>
      <List>
        {posts &&
          posts.map((post) => <PostsListItem key={post._id} post={post} />)}
      </List>
      {paginate && (
        <Pagination allPages={allPages} handlePageClick={handlePageClick} />
      )}
    </Container>
  );
};

export default PostsList;
