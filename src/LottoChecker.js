export default function LottoChecker(props) {
    function checkNumber(tickets, num) {
        return tickets.some((ticket) => ticket.number === num);
    }

    function handleCheckTicket () {
        return ;
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div>Check Lotto Number: </div>
        <input
            type="number"
            value={props.numberToCheck}
            onChange={props.numberCheckChange}
            />
        </div>
    );
}