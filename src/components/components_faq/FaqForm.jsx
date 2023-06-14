import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {setTimeoutNotice} from "../../redux/reducers/notificationReducer";

const FaqForm = () => {

    const [inputEmail, setInputEmail] = useState('')
    const [inputName, setInputName] = useState('')
    const [inputTextarea, setInputTextarea] = useState('')
    const [isValidate, setIsValidate] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsValidate(true)

        if( /\S+@\S+\.\S+/.test(inputEmail) && inputName && inputTextarea ) {

            console.log(
                "Message: ",
                `
                Email: ${inputEmail}
                Name: ${inputName}
                Message: ${inputTextarea}
            `
            )

            setIsValidate(false)

            dispatch(setTimeoutNotice('notification_send-an-email'))

            setInputEmail('')
            setInputName('')
            setInputTextarea('')
        }

    }

    return (
        <form onSubmit={handleSubmit} action="#" className="faq-feedback__form">
            <h3 className="faq-feedback__title section-title">
                Обратная связь
            </h3>
            <label className="faq-feedback__label form-label">
                <input onChange={e => setInputEmail(e.target.value)} value={inputEmail} type="text" name="email" placeholder="Email*" className="faq-feedback__input form-input _alt"/>
                <span className="faq-feedback__input-placeholder form-input-placeholder">Email*</span>
            </label>
            <label className="faq-feedback__label form-label">
                <input onChange={e => setInputName(e.target.value)} value={inputName} type="text" name="name" placeholder="Имя пользователя" className="faq-feedback__input form-input _alt _none-placeholder"/>
            </label>
            <label className="faq-feedback__label form-label">
                <textarea onChange={e => setInputTextarea(e.target.value)} value={inputTextarea} name="message" rows="5" placeholder="Ваше сообщение"
                          className="faq-feedback__textarea form-textarea _alt _none-placeholder"/>
            </label>
            <ul className="errors-form">
                {!isValidate || inputEmail && /\S+@\S+\.\S+/.test(inputEmail) ? "" : <li>Введите верный Email</li>}
                {!isValidate || inputEmail && inputName && inputTextarea ? "" : <li>Введите все поля</li>}
            </ul>
            <button className="faq-feedback__submit btn _large" type="submit">
                Отправить
            </button>
        </form>
    );
};

export default FaqForm;