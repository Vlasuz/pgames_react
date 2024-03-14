import React, {useState} from 'react'
import nextId, { useId } from 'react-id-generator'
import { useDispatch } from 'react-redux'
import { setNotification } from '../../../../../storage/toolkit'
import uniqid from 'uniqid';

interface IFeedbackFormProps {

}

export const FeedbackForm: React.FC<IFeedbackFormProps> = () => {

    const [emailValue, setEmailValue] = useState<string>("")
    const [nameValue, setNameValue] = useState<string>("")
    const [messageValue, setMessageValue] = useState<string>("")
    const [isSending, setIsSending] = useState(false)
    const [isError, setIsError] = useState(false)

    const dispatch = useDispatch()
    const [htmlId] = useId();

    const handleSendForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch(setNotification(`not_enough_money|${uniqid()}`))

        setIsSending(true)
        setTimeout(() => {
            setIsSending(false)

            if(!emailValue || !nameValue || !messageValue) return setIsError(true)

            console.log(emailValue, nameValue, messageValue)

            dispatch(setNotification(`form_sent|${uniqid()}`))

        }, 1500)
    }

    return (
        <form onSubmit={handleSendForm} className="feedback__form" data-aos="fade-in" data-aos-delay="500">
            <h2 className="feedback__title section-title _vertical">
                Обратная связь
            </h2>
            <label className="feedback__label">
                <input type="email" name="email" onChange={e => setEmailValue(e.target.value)} value={emailValue} className="feedback__input" placeholder="Email@gmail"/>
            </label>
            {isError && !emailValue && <span className={"feedback__input-name"} style={{paddingBottom: "10px"}}>Данное поле нужно заполнить</span>}

            <label className="feedback__label">
                <input type="text" name="name" onChange={e => setNameValue(e.target.value)} value={nameValue} className="feedback__input" placeholder="Имя пользователя"/>
            </label>
            {isError && !nameValue && <span className={"feedback__input-name"} style={{paddingBottom: "10px"}}>Данное поле нужно заполнить</span>}

            <label className="feedback__label">
                <textarea name="message" onChange={e => setMessageValue(e.target.value)} value={messageValue} placeholder="Ваше сообщение" className="feedback__textarea"/>
            </label>
            {isError && !messageValue && <span className={"feedback__input-name"} style={{paddingBottom: "10px"}}>Данное поле нужно заполнить</span>}

            <button disabled={isSending} className="feedback__submit btn _large _red" type="submit">
                {isSending ? "Отправка..." : "Отправить"}
            </button>
        </form>
    )
}
