import { ChildAsFC } from "../props/Child"
import { useState } from "react"

export const GuestList: React.FC = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);

    const onClick = () => {
        setGuests([...guests, name]);
        setName('');
    }

    return (<div>
        <h3>Guest List</h3>
        <ul>
            {guests.map((guest, index) => <li key={index}>{guest}</li>)}
        </ul>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={onClick} >Add Guest</button>
    </div>);
};
