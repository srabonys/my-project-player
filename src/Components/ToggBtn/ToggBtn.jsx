import { useState } from "react";
import GroupAll from "../GroupAll/GroupAll";
import PlayerSec from "../PlayerSec/PlayerSec";

const ToggBtn = ({handleToggBtn, isActive, handleChoosePlayers, choosePlayers, handleRemove, coin}) => {
    
  return (
    <div>
      <div className=' w-11/12 mx-auto flex justify-between items-center mb-9'>
          <div>
            {isActive.players ? <h2 className='font-bold text-base'>Available Player</h2> :
            <h2 className='font-bold text-base'>Selected Player {choosePlayers.length}/6</h2>}
          </div>

          <div className='flex gap-0 border-2 rounded-lg'>
            <button onClick={()=>handleToggBtn('available')} 
            className={`${isActive.players? "btn h-full bg-yellow-400 rounded-r-none" : "btn h-full rounded-r-none"}`}>
              Available</button>

            <button onClick={()=> handleToggBtn('selected')}
            className={`${!isActive.player ? "btn rounded-l-none bg-yellow-400" : "btn rounded-l-none bg-white"}`}>Selected ({choosePlayers.length})</button>
          </div>
      </div>
      <div>
        {
          isActive.players ? <GroupAll handleChoosePlayers={handleChoosePlayers} coin={coin}></GroupAll> : <PlayerSec choosePlayers={choosePlayers} handleRemove={handleRemove} handleToggBtn={handleToggBtn}></PlayerSec>
        }
      </div>
    </div>
  );
};

export default ToggBtn;
