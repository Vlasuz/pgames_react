import { NEWS_LIST } from "../types";

const initialState = {
    news: [
        {
            id: '0',
            isPopular: true,
            date: ['2022-12-12', '12:43'],
            title: "Название новости или статьи",
            image: "images/main-page/news/image-large.jpg",
            text: "Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifend",
        },
        {
            id: '1',
            isPopular: true,
            date: ['2022-12-12', '12:43'],
            title: "zxcНазвание статьи",
            image: "images/main-page/news/image-large.jpg",
            text: "non auctor sit amet, egestas id neque. Donec non eleifend",
        },
        {
            id: '2',
            isPopular: true,
            date: ['2022-12-12', '12:43'],
            title: "asdНазвание статьи",
            image: "images/main-page/news/image-large.jpg",
            text: "non auctor sit amet, egestas id neque. Donec non eleifend",
        },
        {
            id: '3',
            isPopular: false,
            date: ['2022-12-12', '12:43'],
            title: "qweНазвание статьи",
            image: "images/main-page/news/image-large.jpg",
            text: "non auctor sit amet, egestas id neque. Donec non eleifend",
        },
        {
            id: '4',
            isPopular: true,
            date: ['2022-12-12', '12:43'],
            title: "321Название статьи",
            image: "images/main-page/news/image-large.jpg",
            text: "non auctor sit amet, egestas id neque. Donec non eleifend",
        },
        {
            id: '5',
            isPopular: false,
            date: ['2022-12-12', '12:43'],
            title: "123Название статьи",
            image: "images/main-page/news/image-large.jpg",
            text: "non auctor sit amet, egestas id neque. Donec non eleifend",
        },
        {
            id: '6',
            isPopular: true,
            date: ['2022-12-12', '12:43'],
            title: "123Название статьи",
            image: "images/main-page/news/image-large.jpg",
            text: "non auctor sit amet, egestas id neque. Donec non eleifend",
        },
    ]
}

export const newsListReducer = (state = initialState, action) => {

    switch(action.type) {
        case NEWS_LIST:
            return{
                ...state,
                // auth: !state.auth
            }
        default: return state
    }

}