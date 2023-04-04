import React from 'react';
import {useSelector} from "react-redux";

const ActiveNotification = (notification) => {

    let item = document.querySelector(notification)
    item.classList.add('notification-item_show')

    document.querySelector('.notifications').classList.add('notifications_active')

    setTimeout(() => {

        document.querySelectorAll('.notification-item').forEach(allItems => {
            if (!allItems.classList.contains('notification-item_show')) {
                document.querySelector('.notifications').classList.remove('notifications_active')
            }
        })

        if (!item.classList.contains('_removing')) {

            item.classList.add('_removing');

            setTimeout(() => {
                item.classList.remove('_removing');
                item.classList.remove('notification-item_show');


                if(document.querySelector('.header__notifications--list')) {
                    let item_node = item.cloneNode(true)
                    item_node.classList.remove('notification-item')
                    item_node.querySelector('.notification-item__close-btn').remove()
                    document.querySelector('.header__notifications--list').innerHTML += "<li class='header__notifications--item'>" + item_node.innerHTML + "</li>";
                }

            }, 500)

        }

    }, 2000)


};

export default ActiveNotification;