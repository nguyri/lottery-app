export default function LottoInput({ value, onChange, player, onPlayerChange, onClick }) {
    return (
        <>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'10px'}}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBlock:'0px' }}>
            <div>Player:</div>
            <input
                type="player"
                value={player}
                onChange={onPlayerChange}
            />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div>Lotto Number: </div>
            <input
                type="number"
                value={value}
                onChange={onChange}
                />
            </div>
            <button onClick={onClick}>Add Ticket</button>
            </div>
        </>
    );
}