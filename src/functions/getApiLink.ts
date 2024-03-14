export const getApiLink = (api: string, isWS?: boolean) => {
    return isWS ? `wss://games.sonisapps.com${api}` : `https://board-games.sonisapps.com${api}`
}