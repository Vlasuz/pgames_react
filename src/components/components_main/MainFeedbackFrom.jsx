import React, {useState} from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";
import {setTimeoutNotice} from "../../redux/reducers/notificationReducer";

const MainFeedbackFrom = () => {

    const [inputEmail, setInputEmail] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    const [isValidate, setIsValidate] = useState(false)
    const dispatch = useDispatch()

    const handleSendForm = (e) => {
        e.preventDefault()

        setIsValidate(true)

        if( /\S+@\S+\.\S+/.test(inputEmail) && inputName && inputMessage ) {

            console.log(
                "Message: ",
                `
                Email: ${inputEmail}
                Name: ${inputName}
                Message: ${inputMessage}
            `
            )

            axios.post('https://board-games.sonisapps.com/api/landing/feedback/', {
                "email": inputEmail,
                "name": inputName,
                "message": inputMessage
            }).then(res => {
                // console.log(res.data)
            }).catch(er => console.log("CONTACT FORM", er))

            setIsValidate(false)

            dispatch(setTimeoutNotice('notification_send-an-email'))

            setInputEmail('')
            setInputName('')
            setInputMessage('')
        }

    }

    return (
        <form onSubmit={handleSendForm} action="#" className="feedback__form" data-aos="fade-in" data-aos-delay="500">
            <h2 className="feedback__title section-title _vertical">
                Обратная связь
            </h2>
            <label className="feedback__label">
                {!isValidate || inputEmail ? "" : <span className="feedback__input-name">Заполните это поле:</span>}
                <input onChange={e => setInputEmail(e.target.value)} value={inputEmail} type="text" name="email" className={"feedback__input"} placeholder="Email@gmail"/>
            </label>
            <label className="feedback__label">
                {!isValidate || inputName ? "" : <span className="feedback__input-name">Заполните это поле:</span>}
                <input onChange={e => setInputName(e.target.value)} value={inputName} type="text" name="name" className="feedback__input" placeholder="Имя пользователя"/>
            </label>
            <label className="feedback__label">
                {!isValidate || inputMessage ? "" : <span className="feedback__input-name">Заполните это поле:</span>}
                <textarea onChange={e => setInputMessage(e.target.value)} value={inputMessage} name="message" placeholder="Ваше сообщение" rows="3" className="feedback__textarea"/>
            </label>
            <ul className="errors-form">
                {!isValidate || inputEmail && /\S+@\S+\.\S+/.test(inputEmail) ? "" : <li>Введите верный Email</li>}
                {!isValidate || inputEmail && inputName && inputMessage ? "" : <li>Заполните все поля</li>}
            </ul>
            <button className="feedback__submit btn _large _red" type="submit">Отправить</button>
        </form>
    );
};

export default MainFeedbackFrom;