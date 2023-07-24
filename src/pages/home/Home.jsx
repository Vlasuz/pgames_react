import Intro from "./layouts/intro/Intro";
import OnlineGames from "./layouts/onlineGames/OnlineGames";
import Rooms from "./layouts/rooms/Rooms";
import Advantages from "./layouts/advantages/Advantages";
import Video from "./layouts/video/Video";
import News from "./layouts/news/News";
import Feedback from "./layouts/feedback/Feedback";

const Home = () => {
    return (
        <>
            <Intro/>
            <OnlineGames/>
            <Rooms/>
            <Advantages/>
            <Video/>
            <News/>
            <Feedback/>
        </>
    );
};

export default Home;