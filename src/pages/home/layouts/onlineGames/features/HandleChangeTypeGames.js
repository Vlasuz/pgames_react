export default function handleChangeTypeGames(slug, setActiveGame) {
    setActiveGame(prev => `null-${prev}`)
    setTimeout(() => {
        setActiveGame(`null-${slug}`)
        setTimeout(() => {
            setActiveGame(slug)
        }, 50)
    }, 300)
}