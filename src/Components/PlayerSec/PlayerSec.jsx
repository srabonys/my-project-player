import GroupAll from "../GroupAll/GroupAll.jsx";

const PlayerSec = ({choosePlayers, handleRemove, handleToggBtn}) => {
  return (
    <div className="w-11/12 mx-auto flex flex-col gap-5">
      {
        choosePlayers.map(players =><div key={players.playerId} className="w-full p-6 rounded-xl border-2 flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-lg">
            <img className="w-full h-full object-cover rounded-lg" src={players.image} alt="" />
            </div>
            <div>
              <h2 className="font-bold text-xl">{players.name}</h2>
              <p className="font-semibold text-sm text-gray-400">{players.playingStyle}</p>
            </div>
          </div>
          <button 
          onClick={()=>handleRemove(players.playerId)}
          className="btn btn-sm font-bold text-base text-red-600">
            <i className="fa-solid fa-trash-can"></i>
            </button>
        </div>)
      }
      <button
      onClick={()=>handleToggBtn('available')}
       className="btn bg-yellow-300 w-[50%] md:w-[25%] lg:w-[20%]">Add more player</button>
    </div>
  );
};

export default PlayerSec;