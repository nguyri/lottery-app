export default function LottoInput({ value, onChange, player, onPlayerChange, onClick }) {
    return (
        <>
            <input
                type="player"
                value={player}
                onChange={onPlayerChange}
            />
            <input
                type="number"
                value={value}
                onChange={onChange}
            />
            <button onClick={onClick}>Add Ticket</button>
        </>
    );
}