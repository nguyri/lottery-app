import { useState } from 'react';

export default function LottoRandom({ addTicketRandom }) {
    const [playerRandom, setPlayerRandom] = useState('');
    const [playerRandomNum, setPlayerRandomNum] = useState('');

    const handlePlayerRandom = (e) => setPlayerRandom(e.target.value);
    const handlePlayerRandomNumChange = (e) => setPlayerRandomNum(e.target.value);

    const handleSubmit = () => {
        if (playerRandom && playerRandomNum) {
            addTicketRandom(playerRandom, playerRandomNum)
            }
        setPlayerRandomNum('');
    }

    return (
        <>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'10px'}}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBlock:'0px' }}>
            <div>Player:</div>
            <input
                type="player"
                value={playerRandom}
                onChange={handlePlayerRandom}
            />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div>Num of Random Tickets: </div>
            <input
                type="number"
                value={playerRandomNum}
                onChange={handlePlayerRandomNumChange}
            />
            </div>
            <button onClick={handleSubmit}>Add Tickets</button>
            </div>
        </>
    );
}