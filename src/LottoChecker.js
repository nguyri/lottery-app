export default function LottoChecker(props) {
    function checkNumber(tickets, num) {
        return tickets.some((ticket) => ticket.number === num);
    }

    function handleCheckTicket () {
        return ;
    }

    return (
        <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center', marginTop:'20px', gap: '10px' }}>
        <h3>Check Lotto Number: </h3>
        <input
            type="number"
            value={props.numberToCheck}
            onChange={props.numberCheckChange}
            />
        <button onClick={props.numberCheckClick}>Check Ticket</button>
        <div style={{maxWidth:'20vw'}}>
        { props.checkResult.length > 0 ? 
            props.checkResult.length === 1 ? 
            `Winner is: ${props.checkResult.at(0).player}!` :
            `Winners are: ${props.checkResult.map(ticket => ticket.player).join(', ')}!` :
            'No winner'
        }
        </div>
        </div>
    );
}