import React from 'react';
import PopupBgd from "../PopupBgd";
import PopupCross from "../PopupCross";
import PopupSubscribeForm from "../popup_subscribe/PopupSubscribeForm";

const PopupMiniVideo = () => {
    return (
        <div className="mini-video-popup popup" id="mini-video-popup">
            <div className="popup-wrapper">
                <PopupBgd/>
                <div className="popup-body">
                    <div className="popup-container">
                        <PopupCross/>
                        <video width="1280" height="720" controls className="video__block">
                            <source src="video/video.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupMiniVideo;