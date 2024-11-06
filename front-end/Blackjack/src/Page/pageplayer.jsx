import useCreateGame from "../Components/hooks/useCreateGame"

export default function PagePlayer() {
    const { createGame } = useCreateGame()

    return (
        <>
            <h1>Home</h1>
            <button onClick={() => createGame() }></button>
        </>
    )
}