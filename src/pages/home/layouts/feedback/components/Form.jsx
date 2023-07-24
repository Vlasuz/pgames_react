import React, {useRef, useState} from 'react';

const Form = () => {

    const [emailValue, setEmailValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    const [textareaValue, setTextareaValue] = useState('')
    const [isCheck, setIsCheck] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsCheck(true)

        if(!emailValue || !nameValue || !textareaValue || !(/\S+@\S+\.\S+/.test(emailValue))) return null;

        console.log('send form')

    }

    return (
        <form onSubmit={handleSubmit} className="feedback__form" data-aos="fade-in" data-aos-delay="500">
            <h2 className="feedback__title section-title _vertical">
                Обратная связь
            </h2>
            <label className="feedback__label">
                <input type="text" value={emailValue} onChange={e => setEmailValue(e.target.value)} name="email" className="feedback__input" placeholder="Email@gmail"/>
                {isCheck && !emailValue && <span className="feedback__input-name">Заполните это поле</span>}
            </label>
            <label className="feedback__label">
                <input type="text" value={nameValue} onChange={e => setNameValue(e.target.value)} name="name" className="feedback__input" placeholder="Имя пользователя"/>
                {isCheck && !nameValue && <span className="feedback__input-name">Заполните это поле</span>}
            </label>
            <label className="feedback__label">
                <textarea value={textareaValue} onChange={e => setTextareaValue(e.target.value)} name="message" placeholder="Ваше сообщение" rows="3" className="feedback__textarea"></textarea>
                {isCheck && !textareaValue && <span className="feedback__input-name">Заполните это поле</span>}
            </label>
            {isCheck && emailValue && !(/\S+@\S+\.\S+/.test(emailValue)) && <span className="feedback__input-name">Введите правильный Email</span>}
            <button className="feedback__submit btn _large _red" type="submit">Отправить</button>
        </form>
    );
};

export default Form;