import { useEffect, useState } from "react";
import { getPosts } from "../../api/api";

const useMainPage = () => {
  const [posts, setPosts] = useState([]);
  const [paginate, setPaginate] = useState(false);
  const [allPages, setAllPages] = useState(0);
  const [page, setPage] = useState(1);

  const [checkPost, setCheckPost] = useState(false);
  const checkPostHandler = () => {
    setCheckPost(!checkPost);
  };

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  useEffect(() => {
    getPosts(page).then((res) => {
      setPosts(res.data.selectedPostsList);
      setAllPages(res.totalPages);
      setPaginate(res.paginate);
    });
  }, [page, paginate, checkPost]);

  return {
    paginate,
    posts,
    allPages,
    checkPost,
    checkPostHandler,
    setPosts,
    handlePageClick,
  };
};

export default useMainPage;
