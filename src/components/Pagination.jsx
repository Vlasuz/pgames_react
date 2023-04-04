import React, {useEffect, useState} from 'react';
import ReactPaginate from "react-paginate"
import {useSelector} from "react-redux";

const Pagination = ({handlePageClick, pageCount}) => {

    return (
        <div className="page-rooms__pagination hide-on-table" data-aos="fade-in" data-aos-delay="200">
            <div className="page-pagination">
                <ReactPaginate
                    nextLabel={<svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.839844 1.41L5.41984 6L0.839844 10.59L2.24984 12L8.24984 6L2.24984 0L0.839844 1.41Z" fill="white"></path></svg>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel={<svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.16016 1.41L3.58016 6L8.16016 10.59L6.75016 12L0.750156 6L6.75016 0L8.16016 1.41Z" fill="#474747"></path></svg>}
                    pageClassName="page-pagination__item"
                    pageLinkClassName="page-pagination__link"
                    previousClassName="page-pagination__btn"
                    previousLinkClassName="page-pagination__btn _prev"
                    nextClassName="page-pagination__btn"
                    nextLinkClassName="page-pagination__btn _next"
                    breakLabel="..."
                    breakClassName="page-pagination__item"
                    breakLinkClassName="page-pagination__link"
                    containerClassName="page-pagination__wrapper"
                    activeClassName="_current"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    );
};

export default Pagination;