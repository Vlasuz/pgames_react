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
    }
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
