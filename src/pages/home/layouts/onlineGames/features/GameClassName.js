export default function gameClassName(activeGame, gamesType) {
    if (gamesType === activeGame) {
        return " _active _visible";
    } else if (activeGame.includes(gamesType)) {
        return " _active";
    } else {
        return "";
    }
}