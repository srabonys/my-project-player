import { useEffect } from "react";
import { useState } from "react";
import Players from "../Players/Players";

const GroupAll = ({handleChoosePlayers, coin}) => {
  const [groupall, setGroupAll] =useState([]);

  useEffect(()=>{
    fetch('playerAll.json')
    .then(res => res.json())
    .then(data => setGroupAll(data))
  }, [])
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        groupall.map(players => <Players handleChoosePlayers={handleChoosePlayers} key={players.playerId} players={players} coin={coin}></Players>)
      }
    </div>
  );
};

export default GroupAll