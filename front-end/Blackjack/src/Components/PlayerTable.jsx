import PlayerRow from "./PlayerRow";

export default function PlayerTable({players}) {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>score</th>
        </tr>
      </thead>
      <tbody>
        {players?.map(player => (
          <PlayerRow key={player.id} id={player.id} name={player.name} score={player.score}></PlayerRow>
        ))}
      </tbody>
    </table>
  );
}