import React from "react";
import Form from "../components/Form/Form";
import PostsList from "../components/PostsList/PostsList";
import useMainPage from "./hooks/useMainPage";
import { Container } from "./MainPageStyled";

const MainPage = () => {
  const {
    paginate,
    posts,
    allPages,
    checkPost,
    checkPostHandler,
    setPosts,
    handlePageClick,
  } = useMainPage();
  return (
    <Container>
      <Form
        checkPost={checkPost}
        checkPostHandler={checkPostHandler}
        posts={posts}
        setPosts={setPosts}
      />
      <PostsList
        allPages={allPages}
        handlePageClick={handlePageClick}
        posts={posts}
        paginate={paginate}
      />
    </Container>
  );
};

export default MainPage;
