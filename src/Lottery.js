import { useState } from 'react';
import LottoInput from './LottoInput';

export default function Lottery() {
    const message = 'Hello world'; 
    const players = ['fauna', 'mococo'];
    const [tickets, setTickets] = useState( [] );
    const [inputValue, setInputValue] = useState(''); // Initialize state for the input value
    const [inputPlayer, setInputPlayer] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value); // Update the state with the new input value
    };

    const handlePlayerChange = (event) => {
        setInputPlayer(event.target.value);
    }

    const handleAddTicket = () => {
        addTicket(inputPlayer, inputValue); // Use 'fauna' for testing
    };

    function validPlayer(str) {
        return players.some((player) => player === str);
    }

    function validNumber(number) {
        if (number < 123 || number > 987) return false;
        let ones = number % 10;
        let tens = Math.floor(number / 10) % 10;
        let hundreds = Math.floor(number / 100);
        if (ones === tens || tens === hundreds || ones === hundreds) return false;
        return true;
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
        tickets.push({ player: playerStr, number: num });
        console.log(tickets);
    }

    const numTest = 125;
    return (
        <>
            <h1>{message}</h1>
            <h2>{`Ticket: ${numTest}, Result: ${validNumber(numTest)}`}</h2>
            <LottoInput
                value={inputValue}
                onChange={handleChange}
                onClick={handleAddTicket}
                player={inputPlayer}
                onPlayerChange={handlePlayerChange}
            />
        </>
    );
}
