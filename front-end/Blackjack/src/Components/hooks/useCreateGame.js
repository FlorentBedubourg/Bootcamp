export default function useCreateGame() {
    const createGame = () => {
        fetch("http://localhost:5173", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "game_name",
                players: ["toto", "tata"],
            }),
        })
            .then((response) => {
                console.log(response);
            })
            .then ((response) => {
                return response.json();
            })
            .catch((reason) => {
                console.error(reason);
            });
    };

    return {createGame};
}
