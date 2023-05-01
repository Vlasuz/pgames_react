import React, {useState} from 'react';

const RoomsPagination = (pagination) => {
    const [pages, setPages] = useState([])

    console.log(pagination.pagination.page_count)

    console.log(pages)
    return (
        <>
            {
                pages.map(item => {
                    return item;
                })
            }
        </>
    )

};

export default RoomsPagination;