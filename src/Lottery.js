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
    const [inputValue, setInputValue] = useState(''); // Initialize state for the input value
    const [inputPlayer, setInputPlayer] = useState('');
    const [playerRandom, setPlayerRandom] = useState('');
    const [playerRandomNum, setPlayerRandomNum] = useState('');
    const [numberToCheck, setNumberCheck] = useState('');
    const [checkResult, setCheckResult] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value); // Update the state with the new input value
    };

    const handlePlayerChange = (event) => {
        setInputPlayer(event.target.value);
    }

    const handlePlayerRandom = (event) => {
        setPlayerRandom(event.target.value);
    }

    const handlePlayerRandomNumChange = (event) => {
        setPlayerRandomNum(event.target.value);
    }

    const handleCheckChange = (event) => {
        setNumberCheck(event.target.value);
    }

    const handleAddTicket = () => {
        addTicket(inputPlayer, inputValue); // Use 'fauna' for testing
        setInputValue('');
    };

    const handleAddTicketRandom = () => {
        const newTickets = [];
        for(let i = 0; i < playerRandomNum; i++) {
            newTickets.push({player: playerRandom, number:generateRandomTicketNumber()})
        }
        setTickets((prevTickets) =>  [...prevTickets, ...newTickets]);
        setPlayerRandomNum('');
        console.log(tickets);
    }

    const handleAddRandom = () => {
        handleAddRandom(playerRandom, playerRandomNum);
        console.log(tickets);
        setPlayerRandomNum('');
    }

    const handleNumberCheck = () => {
        if (!validNumber(Number(numberToCheck))) { // Convert num to a number for validation
            alert('Invalid number: ' + numberToCheck);
            return;
        }
        let winningTickets = tickets.filter((ticket) => ticket.number === Number(numberToCheck))
        console.log(tickets);
        console.log(winningTickets)
        setCheckResult(winningTickets);
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
        return true;
    }

    function generateRandomTicketNumber() {
        let num = 0;
        let max = 987, min = 123;
        do {
            num = Math.floor(Math.random() * (max - min + 1)) + min;
        } while(!validNumber(num))
        return num;
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

    const numTest = 125;
    return (
        <div style={{display:'flex', flexDirection:'row', gap:'10px'}}>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h2 style={{marginBlock:'0px'}}>{message}</h2>
            <p style={{fontSize:'15px', width:'30vw'}}>{description}</p>
            <h3>Add Ticket</h3>
            <LottoInput
                value={inputValue}
                onChange={handleChange}
                onClick={handleAddTicket}
                player={inputPlayer}
                onPlayerChange={handlePlayerChange}
                />
            <h3>Random Tickets</h3> 
            <LottoRandom
                playerRandom={playerRandom}
                onPlayerRandomChange={handlePlayerRandom}
                onPlayerRandomClick={handleAddTicketRandom}
                playerRandomNum={playerRandomNum}
                onPlayerRandomNumChange={handlePlayerRandomNumChange}
            />
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
                <TicketViewer tickets={tickets}/>
                <LottoChecker 
                    tickets={tickets} 
                    numberToCheck={numberToCheck} 
                    numberCheckChange={handleCheckChange} 
                    numberCheckClick={handleNumberCheck}
                    checkResult={checkResult}
            />        
            </div>
        </div>

    );
}
