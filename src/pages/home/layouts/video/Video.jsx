import React, {useRef, useState} from 'react';
import './style.scss';

import video from './../../../../assets/video/video.mp4'
import poster from './../../../../assets/img/main-page/advantages/video-preview.webp'
import AllIcons from "../../../../features/allIcons";

const Video = () => {

    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    function handlePlay() {
        videoRef.current.play()
        setIsPlaying(true)
    }

    return (
        <section className="video section-padding" onClick={handlePlay} data-aos="fade-in">
            <div className="video__wrapper">
                <button type="button" className={"video__preview" + (isPlaying ? " _hidden" : "")}
                        title="Запустить видео">
                    <div className="video__preview--image">
                        <picture>
                            <source srcSet={poster} type="image/webp"/>
                            <img src={poster} alt="" width="300"
                                 className="video__preview--img"/>
                        </picture>
                    </div>
                    <div className="video__preview--block">
                        <img src={AllIcons("play")} width="94" height="94" alt=""
                             className="video__preview--play"/>
                        <h2 className="video__preview--text">
                            О том почему вы с нами!
                        </h2>
                    </div>
                </button>
                <video ref={videoRef} width="1280" height="720" controls="controls" className="video__block">
                    <source src={video} type="video/mp4"/>
                    Sorry, your browser doesn't support embedded videos.
                </video>
            </div>
        </section>
    );
};

export default Video;