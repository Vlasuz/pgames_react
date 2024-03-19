import React, {Dispatch, SetStateAction, useEffect, useRef, useState} from 'react'
import {useClickOutside} from "../../hooks/ClickOutside";
import {ISelectOption} from '../../models';
import {SelectStyled} from "./Select.styled";
import HTMLReactParser from "html-react-parser";

interface ISelectProps {
    list: ISelectOption[]
    setValue: Dispatch<SetStateAction<string>>
}

export const Select: React.FC<ISelectProps> = ({list, setValue}) => {

    const [isActive, setIsActive] = useState(false)
    const [option, setOption] = useState(list.filter(item => item.isActive)[0] ?? list[0])

    const buttonRef: any = useRef()
    const blockRef: any = useRef()

    useClickOutside({button: buttonRef, block: blockRef, setState: setIsActive})

    const handleSelect = (data: ISelectOption) => {
        setOption(data)
        setValue(data.slug)
        setIsActive(false)
    }

    return (
        <SelectStyled>
            <div className={`select ${isActive && "_active"}`}>
                <div className="select__head" ref={buttonRef} onClick={_ => setIsActive(prev => !prev)}>
                    <div className="select__item">
                        {
                            HTMLReactParser(option?.title)
                        }
                    </div>
                </div>
                <div className="select__body" ref={blockRef}>


                    {
                        list.map((item: ISelectOption, index: number) =>
                            <div onClick={_ => handleSelect(item)} key={item.slug}
                                 className={`select__item ${option.slug === item.slug && "_active"}`}>
                                {
                                    HTMLReactParser(item?.title)
                                }
                            </div>
                        )
                    }

                </div>
            </div>
        </SelectStyled>
    )
}
