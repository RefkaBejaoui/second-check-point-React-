import Players from './players'
import Player from './player';
const PlayerList = () => {
    return (
        <div style={{display: "flex" , flexWrap:'wrap', justifyContent:"space-between"}}>
    {Players.map((p , index) => <Player key={index} {...p}/>
    )}
    {/* players.map((p)=> <Player key={p.id}{...p}) */}
    </div>
)}
export default PlayerList
