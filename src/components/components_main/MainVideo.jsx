import React from 'react';
import JsVideoPreview from "../JS_VideoPreview";

const MainVideo = () => {
    return (
        <section className="video section-padding" data-aos="fade-in">
            <div className="video__wrapper">
                <button
                    type="button"
                    className="video__preview"
                    title="Запустить видео"
                    onClick={() => JsVideoPreview()}
                >
                    <div className="video__preview--image">
                        <picture>
                            <source srcSet="images/main-page/advantages/video-preview.webp" type="image/webp"/>
                            <img src="../images/main-page/advantages/video-preview.jpg" alt="" width="300"
                                 className="video__preview--img"/>
                        </picture>
                    </div>
                    <div className="video__preview--block">
                        <img src="../images/icons/play.svg" width="94" height="94" alt=""
                             className="video__preview--play"/>
                        <h2 className="video__preview--text">
                            О том почему вы с нами!
                        </h2>
                    </div>
                </button>
                <video width="1280" height="720" controls="controls" className="video__block">
                    <source src="video/video.mp4" type="video/mp4"/>
                </video>
            </div>
        </section>
    );
};

export default MainVideo;