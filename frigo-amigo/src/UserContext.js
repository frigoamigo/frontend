import React from 'react';

export const UserContext = React.createContext();

class UserProvider extends React.Component {
    state = {
        user: localStorage.getItem('user') !== "undefined" ? JSON.parse(localStorage.getItem('user')) : null
    };

    setUser = (user) => {
        localStorage.setItem('user', JSON.stringify(user)); // Сохраняем пользователя в localStorage
        this.setState({ user });
    }

    render() {
        return (
            <UserContext.Provider value={{ user: this.state.user, setUser: this.setUser }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;