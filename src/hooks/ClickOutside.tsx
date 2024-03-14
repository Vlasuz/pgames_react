import React, { useEffect, useRef, useState } from 'react';

interface IClickOutsideProps {
    button: React.RefObject<HTMLButtonElement>;
    block: React.RefObject<HTMLDivElement>;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useClickOutside = ({ button, block, setState }: IClickOutsideProps) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                block.current &&
                !block.current.contains(event.target as Node) &&
                button.current &&
                !button.current.contains(event.target as Node)
            ) {
                setState(false);
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, [button, block, setState]);
};
