import React, {useEffect} from 'react'
import preview from './../../../assets/img/main-page/advantages/video-preview.jpg'
import play from './../../../assets/img/icons/play.svg'

interface IVideoProps {

}

export const Video: React.FC<IVideoProps> = () => {

    return (
        <section className="video section-padding" data-aos="fade-in">
            <div className="video__wrapper">
                <button type="button" className="video__preview" title="Запустить видео">
                    <div className="video__preview--image">
                        <picture>
                            <img src={preview} alt="" width="300"
                                 className="video__preview--img"/>
                        </picture>
                    </div>
                    <div className="video__preview--block">
                        <img src={play} width="94" height="94" alt=""
                             className="video__preview--play" />
                            <h2 className="video__preview--text">
                                О том почему вы с нами!
                            </h2>
                    </div>
                </button>
                <video width="1280" height="720" controls className="video__block"/>
            </div>
        </section>
    )
}
