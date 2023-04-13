import React from 'react';
import axios from "axios";
import GlobalLink from "../../../../GlobalLink";

const handleReady = (roomId) => {
    axios.post(GlobalLink(`/api/room/start/?room_id=${roomId}`)).then(res => {
        console.log('game is start >>>', res.data)
    })
};

export default handleReady;