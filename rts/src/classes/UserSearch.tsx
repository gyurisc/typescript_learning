import { Component } from "react";
import { setSourceMapRange } from "typescript";
import { string } from "yargs";

interface User {
    name: string;
    age: number;
}

interface UserSearchProps {
    users: User[] 
}

interface UserSearchState {
    name: string;
    user: User | undefined; 
}

class UserSearch extends Component<UserSearchProps> {
    state: UserSearchState = {
        name: '',
        user: undefined 
    }
    
    const onClick = () => {
        const foundUser = this.props.users.find((user) => {
            return user.name === this.state.name;
        });

        this.setState({ user: foundUser });
    }

    render() {
        const { name, user } = this.state;

            return <div>
            <h3>User Search</h3>
            <input value={this.state.name} onChange={(e) => this.setState({name: e.target.value })} />
            <button onClick={this.onClick}>Search</button>
            <div>
                {user && user.name}
            </div>
            <div>
                {user && user.age}
            </div>
        </div >
        );
    }
}

export default UserSearch; 