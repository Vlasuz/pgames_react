import React, {useEffect, useRef, useState} from 'react';

const ClickOutsideBlock = (initialValue) => {

    const [isActive, setIsActive] = useState(initialValue);
    const ref = useRef(null);

    const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setIsActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    });

    return { ref, isActive, setIsActive };

};

export default ClickOutsideBlock;