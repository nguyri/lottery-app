import { useState } from 'react'

export default function LottoChecker({checkTicket}) {
    const [numberToCheck, setNumberCheck] = useState('');
    const [checkResult, setCheckResult] = useState('');

    const handleCheckChange = (e) => setNumberCheck(e.target.value);

    const handleNumberCheck = () => {
        let winningTickets = checkTicket(numberToCheck);
        winningTickets && setCheckResult(winningTickets);
    }

    return (
        <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center', marginTop:'20px', gap: '10px' }}>
        <h3>Check Lotto Number: </h3>
        <input
            type="number"
            value={numberToCheck}
            onChange={handleCheckChange}
            />
        <button onClick={handleNumberCheck}>Check Ticket</button>
        <div style={{maxWidth:'20vw'}}>
        { checkResult.length > 0 ? 
            checkResult.length === 1 ? 
            `Winner is: ${checkResult.at(0).player}!` :
            `Winners are: ${checkResult.map(ticket => ticket.player).join(', ')}!` :
            'No winner'
        }
        </div>
        </div>
    );
}