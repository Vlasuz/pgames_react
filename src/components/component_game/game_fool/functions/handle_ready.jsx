import React from 'react';
import axios from "axios";
import GlobalLink from "../../../../GlobalLink";

const handleReady = (websocket, setIsReady) => {
    // axios.post(GlobalLink(`/api/room/start/?room_id=${roomId}`)).then(res => {
    //     console.log('game is start >>>', res.data)
    // })
    setIsReady(true)
    websocket.send(JSON.stringify({
        "command": "ready",
        "data": null
    }))
};

export default handleReady;