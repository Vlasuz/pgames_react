import React, {useEffect, useState} from 'react';

const PaginationHook = (items, itemsPerPage, searchInput) => {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [selectedPage, setSelectedPage] = useState(0)

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, searchInput]);

    useEffect(() => {
        setSelectedPage(0)
        setItemOffset(0)
    }, [searchInput])

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % items.length;
        setSelectedPage(event.selected)
        setItemOffset(newOffset);
    };

    return {currentItems, pageCount, handlePageClick, selectedPage}
};

export default PaginationHook;