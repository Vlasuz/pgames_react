import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const FormSearch = ({ value }) => {

    const navigate = useNavigate()

    const [valueInput, setValueInput] = useState(value ?? "")

    const handleSearch = (e) => {
        e.preventDefault()

        navigate(`/games/${valueInput}`)
    }

    return (
        <form onSubmit={handleSearch} className="online-games__search page-header__search">
            <label className="page-header__search--label">
                <input value={valueInput} onChange={e => setValueInput(e.target.value)} type="text" name="search" placeholder="Поиск" required
                       className="page-header__search--input"/>
            </label>
            <button className="page-header__search--submit" type="submit" title="Поиск">
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.2258 10.3992L9.42029 7.59374C10.0583 6.64663 10.373 5.46327 10.2045 4.20234C9.91716 2.05757 8.15935 0.312179 6.01247 0.0403747C2.82052 -0.363524 0.136457 2.32054 0.540379 5.51249C0.812254 7.6603 2.55788 9.41952 4.70288 9.70546C5.96382 9.87395 7.14741 9.55931 8.09429 8.92124L10.8998 11.7267C11.2658 12.0928 11.8595 12.0928 12.2256 11.7267C12.5914 11.3601 12.5914 10.7648 12.2258 10.3992ZM2.35388 4.87499C2.35388 3.22077 3.69966 1.87499 5.35388 1.87499C7.0081 1.87499 8.35388 3.22077 8.35388 4.87499C8.35388 6.52921 7.0081 7.87499 5.35388 7.87499C3.69966 7.87499 2.35388 6.52968 2.35388 4.87499Z"
                        fill="#F9F1DF"/>
                </svg>
            </button>
        </form>
    );
};

export default FormSearch;