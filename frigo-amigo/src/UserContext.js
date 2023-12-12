import React from 'react';

export const UserContext = React.createContext();

class UserProvider extends React.Component {
  state = {
    user: localStorage.getItem('user') !== "undefined" ? JSON.parse(localStorage.getItem('user')) : null,
    authenticated: localStorage.getItem('authenticated') !== "undefined" ? JSON.parse(localStorage.getItem('authenticated')) : false
  };

  setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user)); // Сохраняем пользователя в localStorage
    this.setState({ user });
  }

  setAuthenticated = (authenticated) => {
    localStorage.setItem('authenticated', JSON.stringify(authenticated));
    this.setState({ authenticated });
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