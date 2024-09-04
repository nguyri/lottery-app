import { useState } from 'react';
import LottoInput from './LottoInput';
import LottoRandom from './LottoRandom';
import TicketViewer from './TicketViewer';
import LottoChecker from './LottoChecker';

export default function Lottery() {
    const message = 'FaunaMart™ Lottery Simulator'; 
    const players = ['mori', 'kiara', 'ina', 'gura', 'amelia', 'irys', 'fauna', 'kronii', 'mumei', 'baelz', 'shiori', 'bijou', 'nerissa', 'fuwawa', 'mococo', 'elizabeth', 'gigi', 'cecelia', 'raora'];
    const description = `Valid players: ${players.join(', ')}`;
    const [tickets, setTickets] = useState( [] );

    const addTicketRandom = (playerStr, num) => {
        const newTickets = [];
        for(let i = 0; i < num; i++) {
            newTickets.push({player: playerStr, number:generateRandomTicketNumber()})
        }
        setTickets((prevTickets) =>  [...prevTickets, ...newTickets]);
    }

    function validPlayer(str) {
        return players.some((player) => player === str);
    }

    function validNumber(number) {
        if (number < 123 || number > 987) return false;
        let ones = number % 10;
        let tens = Math.floor(number / 10) % 10;
        let hundreds = Math.floor(number / 100);
        if (ones === tens || tens === hundreds || ones === hundreds) return false;
        if (ones * tens * hundreds === 0) return false;
        return true;
    }

    function generateRandomTicketNumber() {
        let digits = new Set();
        while (digits.size < 3) {
            const digit = Math.floor(Math.random() * 9) + 1; 
            digits.add(digit); 
        }

        let number = Array.from(digits).join('');
        return Number(number);
    }

    function checkTicket(num) {
        if (!validNumber(Number(num))) { // Convert num to a number for validation
            alert('Invalid number: ' + num);
            return;
        }
        return tickets.filter((ticket) => ticket.number === Number(num))
    }

    function addTicket(playerStr, num) {
        if (!validNumber(Number(num))) { // Convert num to a number for validation
            alert('Invalid number: ' + num);
            return;
        }
        if (!validPlayer(playerStr)) {
            alert('Invalid player: ' + playerStr);
            return;
        }
        let newTicket = { player: playerStr, number: Number(num) };
        setTickets([...tickets, newTicket]);
    }

    return (
        <div style={{display:'flex', flexDirection:'row', gap:'10px'}}>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h2 style={{marginBlock:'0px'}}>{message}</h2>
            <p style={{fontSize:'15px', width:'30vw'}}>{description}</p>
            <h3>Add Ticket</h3>
            <LottoInput
                addTicket={addTicket}
                />
            <h3>Random Tickets</h3> 
            <LottoRandom
                addTicketRandom={addTicketRandom}
            />
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
                <TicketViewer tickets={tickets}/>
                <LottoChecker 
                    checkTicket={checkTicket}
            />        
            </div>
        </div>

    );
}
