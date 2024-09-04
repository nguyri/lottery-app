import { useState } from 'react';

export default function LottoInput({ addTicket}) {
    const [inputValue, setInputValue] = useState(''); // Initialize state for the input value
    const [inputPlayer, setInputPlayer] = useState('');

    const handleChange = (e) => setInputValue(e.target.value); 
    const handlePlayerChange = (e) => setInputPlayer(e.target.value);

    const handleSubmit = () => {
        if (inputPlayer && inputValue) {
            addTicket(inputPlayer, inputValue);
            setInputValue('');
        }
    }

    return (
        <>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'10px'}}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBlock:'0px' }}>
            <div>Player:</div>
            <input
                type="player"
                value={inputPlayer}
                onChange={handlePlayerChange}
            />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div>Picked Number: </div>
            <input
                type="number"
                value={inputValue}
                onChange={handleChange}
                />
            </div>
            <button onClick={handleSubmit}>Add Ticket</button>
            </div>
        </>
    );
}