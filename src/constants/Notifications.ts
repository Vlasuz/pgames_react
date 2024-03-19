import bell from "../assets/img/icons/bell.svg";
import error from "../assets/img/icons/error.svg";

interface INotificationTypes {
    [key: string]: {
        icon: string,
        className: string
    }
}

export interface INotification {
    title: string
    type: string
    body: string
}

export const notifications: {[key: string]: INotification} = {
    "form_sent": {
        title: "Форма отправлена!",
        type: "success",
        body: "Спасибо! <br />Ваша форма была успешно отправлена!"
    },
    "not_enough_money": {
        title: "Системное сообщение",
        type: "error",
        body: "У вас недостаточно средств"
    },
    "pay_success": {
        title: "Аккаунт",
        type: "success",
        body: "Счет успешно пополнен"
    },
    "old_password_is_wrong": {
        title: "Аккаунт",
        type: "error",
        body: "Старый пароль не верный"
    },
    "change_pass_success": {
        title: "Аккаунт",
        type: "success",
        body: "Пароль успешно изменен"
    },
}

export const notificationTypes: INotificationTypes = {
    "success": {
        icon: bell,
        className: "_message"
    },
    "error": {
        icon: error,
        className: "_error"
    }
}
