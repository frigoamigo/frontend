import React from 'react';

export const UserContext = React.createContext();

class UserProvider extends React.Component {
  state = {
    authenticated: localStorage.getItem('authenticated') !== "undefined"
    && localStorage.getItem('authenticated') !== null
    && localStorage.getItem('authenticated') !== undefined
    && localStorage.getItem('authenticated') !== "null"
        ? JSON.parse(localStorage.getItem('authenticated')) : localStorage.setItem('authenticated', "false"),
    user: localStorage.getItem('authenticated') !== "undefined"
    && localStorage.getItem('authenticated') !== null
    && localStorage.getItem('authenticated') !== undefined
    && localStorage.getItem('authenticated') !== "null"
        ? JSON.parse(localStorage.getItem('user')) : null,
    fridgeName: localStorage.getItem('fridgeName') !== "undefined"
    && localStorage.getItem('fridgeName') !== null
    && localStorage.getItem('fridgeName') !== undefined
    && localStorage.getItem('fridgeName') !== "null"
        ? JSON.parse(localStorage.getItem('fridgeName')) : localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')).fridges[0].name : null
  };

  setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user)); // Сохраняем пользователя в localStorage
    this.setState({ user });
  }

  setAuthenticated = (authenticated) => {
    localStorage.setItem('authenticated', JSON.stringify(authenticated));
    this.setState({ authenticated });
  }

  setFridgeName = (fridgeName) => {
    localStorage.setItem('fridgeName', JSON.stringify(fridgeName));
    this.setState({ fridgeName });
  }

  render() {
    return (
      <UserContext.Provider value={{ user: this.state.user, setUser: this.setUser, setAuthenticated: this.setAuthenticated, authenticated: this.state.authenticated, setFridgeName: this.setFridgeName, fridgeName: this.state.fridgeName}}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;