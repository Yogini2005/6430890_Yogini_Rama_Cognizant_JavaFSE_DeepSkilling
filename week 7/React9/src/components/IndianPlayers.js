// src/components/IndianPlayers.js
import React from "react";

const IndianPlayers = () => {
  const allPlayers = ["Virat", "Rohit", "Dhoni", "Rahul", "Jadeja", "Shami"];
  const oddTeam = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenTeam = allPlayers.filter((_, index) => index % 2 === 0);

  // Destructuring
  const [odd1, odd2, ...restOdd] = oddTeam;
  const [even1, even2, ...restEven] = evenTeam;

  // Merging arrays
  const T20players = ["Hardik", "Surya"];
  const RanjiTrophy = ["Pujara", "Mayank"];
  const merged = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {[odd1, odd2, ...restOdd].map((name, i) => <li key={i}>{name}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {[even1, even2, ...restEven].map((name, i) => <li key={i}>{name}</li>)}
      </ul>

      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>
        {merged.map((player, idx) => <li key={idx}>{player}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
