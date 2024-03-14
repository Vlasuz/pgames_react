import React, {Dispatch, SetStateAction, useEffect} from 'react'
import {IPaginator} from "../Rooms";

interface IRoomsPaginationProps {
    paginator: IPaginator | undefined
    setCurrentPage: Dispatch<SetStateAction<number>>
}

export const RoomsPagination: React.FC<IRoomsPaginationProps> = ({paginator, setCurrentPage}) => {

    const countOfPagination = Array.from({ length: paginator?.page_count ?? 0 }, (_, index) => index + 1)

    const handleChangePage = (page: number) => {
        setCurrentPage(page)
    }

    const handleTogglePage = (direction: string) => {
        const directionTypes: { [key: string]: any } = {
            "next": () => setCurrentPage(prev => prev + 1),
            "prev": () => setCurrentPage(prev => prev - 1)
        }

        return directionTypes[direction]();
    }

    return (
        <div className="page-rooms__pagination hide-on-table" data-aos="fade-in" data-aos-delay="200">
            <div className="page-pagination">
                <div className="page-pagination__wrapper">
                    <a onClick={_ => paginator?.current_page && paginator?.current_page > 1 && handleTogglePage("prev")} className={`page-pagination__btn _prev ${paginator?.current_page && paginator?.current_page <= 1 && "_disabled"}`}>
                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.16016 1.41L3.58016 6L8.16016 10.59L6.75016 12L0.750156 6L6.75016 0L8.16016 1.41Z"
                                fill="#474747"/>
                        </svg>
                    </a>
                    <ul className="page-pagination__list">

                        {
                            countOfPagination.map(item =>
                                <li className="page-pagination__item">
                                    <a onClick={_ => handleChangePage(item)} className={`page-pagination__link ${item === paginator?.current_page && "_current"}`}>
                                        {item}
                                    </a>
                                </li>
                            )
                        }

                    </ul>
                    <a onClick={_ => paginator?.current_page && paginator?.current_page < paginator.page_count && handleTogglePage("next")} className={`page-pagination__btn _next ${paginator?.current_page && paginator?.current_page >= paginator.page_count && "_disabled"}`}>
                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.839844 1.41L5.41984 6L0.839844 10.59L2.24984 12L8.24984 6L2.24984 0L0.839844 1.41Z"
                                fill="white"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
