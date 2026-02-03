import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();

  const [player, setPlayer] = useState(null);
  // const [submitted, setSubmitted] = useState(false);
  // function handlePlayerNameChange(name) {
  //   setSubmitted(false);
  //   setPlayer(name);
  // }

  function handleSubmit() {
    setPlayer(playerName.current.value);
  }

  return (
    <section id="player">
      {/* <h2>Welcome {player ? player : 'unknown entity'}</h2> */}
      <h2>Welcome {player ?? 'unknown entity'}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
        // value={player}
        // onChange={(event) => handlePlayerNameChange(event.target.value)}
        />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
