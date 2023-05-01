import React from 'react';

const Pagination = ({currentPage, setCurrentPage, pagination, pages}) => {

    const changePage = (item) => {
        setCurrentPage(item)
    }
    const handleNext = () => {
        return currentPage <= pagination.page_count ? setCurrentPage(prev => prev + 1) : null
    }
    const handlePrev = () => {
        return currentPage >= 1 ? setCurrentPage(prev => prev - 1) : null
    }

    return (
        <div className="page-pagination">
            <ul className="page-pagination__wrapper" role="navigation" aria-label="Pagination">
                <li onClick={handlePrev} className={"page-pagination__btn" + (pagination.current_page === 1 ? " disabled" : "")}>
                    <a className="page-pagination__btn _prev">
                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.16016 1.41L3.58016 6L8.16016 10.59L6.75016 12L0.750156 6L6.75016 0L8.16016 1.41Z"
                                fill="#474747" />
                        </svg>
                    </a>
                </li>

                {
                    pages.map(item =>
                        <li key={item} onClick={_ => changePage(item + 1)} className={"page-pagination__item" + (pagination.current_page === item + 1 ? " _current" : "")}>
                            <a className="page-pagination__link">
                                {item + 1}
                            </a>
                        </li>
                    )
                }

                {/*<RoomsPagination pagination={pagination} />*/}

                <li onClick={handleNext} className={"page-pagination__btn" + (pagination.current_page === pagination.page_count ? " disabled" : "")}>
                    <a className="page-pagination__btn _next">
                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.839844 1.41L5.41984 6L0.839844 10.59L2.24984 12L8.24984 6L2.24984 0L0.839844 1.41Z"
                                fill="white" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;