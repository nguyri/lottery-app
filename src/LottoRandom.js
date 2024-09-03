export default function LottoRandom({ playerRandomNum, onPlayerRandomNumChange, playerRandom, onPlayerRandomChange,  onPlayerRandomClick }) {
    return (
        <>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'10px'}}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBlock:'0px' }}>
            <div>Player:</div>
            <input
                type="player"
                value={playerRandom}
                onChange={onPlayerRandomChange}
            />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div>Num of Random Tickets: </div>
            <input
                type="number"
                value={playerRandomNum}
                onChange={onPlayerRandomNumChange}
            />
            </div>
            <button onClick={onPlayerRandomClick}>Add Tickets</button>
            </div>
        </>
    );
}