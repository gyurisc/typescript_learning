import { useState, useRef, useEffect } from 'react';

// just trying out dot function 

const users = [
    { name: 'Sam', age: 30 },
    { name: 'Alex', age: 20 },
    { name: 'Micah', age: 40 },
    { name: 'Alexa', age: 20 },
    { name: 'Miariam', age: 50 },
];

const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [result, setResult] = useState<{ name: string; age: number } | undefined>();
    
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const searchUser = () => {
        const foundUser = users.find((user) => { return user.name.toLowerCase() === name.toLowerCase() });

        if (foundUser) {
            setResult(foundUser);
        }
    }

    return (<div>
        <h3>User Search</h3>
        <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={searchUser}>Search</button>
        <div>
            {result && result.name}
        </div>
        <div>
            {result && result.age}
        </div>
    </div >
    );
};

export default UserSearch;