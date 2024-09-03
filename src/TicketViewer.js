import React, { useRef } from 'react';

export default function TicketViewer(props) {
    const codeRef = useRef(null); // Create a ref to access the code block

    const copyToClipboard = () => {
        if (codeRef.current) {
            navigator.clipboard.writeText(codeRef.current.textContent)
                .then(() => alert('Tickets copied to clipboard!'))
                .catch(err => console.error('Failed to copy:', err));
        }
    };

    const ticketStrings = props.tickets.length === 0 
        ? "Added tickets will appear here" 
        : props.tickets.map(ticket => `${ticket.player}, ${ticket.number}`).join('\n');

    return (
        <div style={{ width: 'auto', fontSize: '15px', overflow: 'auto', maxHeight: '30vh', marginTop:'30px'}}>
            <button 
                onClick={copyToClipboard} 
                style={{ marginBottom: '2px' }}
            >
                Copy Tickets
            </button>
            <pre>
                <code ref={codeRef}>
                    {ticketStrings}
                </code>
            </pre>
        </div>
    );
}
