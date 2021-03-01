import React from "react";
import ReactPaginate from "react-paginate";
import "./PaginationStyles.css";

const Pagination = ({ allPages, handlePageClick }) => {
  return (
    <ReactPaginate
      pageLinkClassName={"pageLinkClassName "}
      nextClassName={"next"}
      nextLinkClassName={"nextLink"}
      previousClassName={"previous"}
      previousLinkClassName={"previousLink"}
      previousLabel={"Prev"}
      nextLabel={"Next"}
      pageCount={allPages}
      marginPagesDisplayed={0}
      pageRangeDisplayed={4}
      pageClassName={"pageName"}
      breakLabel={""}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      subContainerClassName={"pagesPagination"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;
