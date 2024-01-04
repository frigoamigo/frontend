import React from 'react';

export const UserContext = React.createContext();

class UserProvider extends React.Component {
  state = {
    authenticated:
      localStorage.getItem('authenticated') !== 'undefined' &&
      localStorage.getItem('authenticated') !== null &&
      localStorage.getItem('authenticated') !== undefined &&
      localStorage.getItem('authenticated') !== 'null'
        ? JSON.parse(localStorage.getItem('authenticated'))
        : localStorage.setItem('authenticated', 'false'),
    user:
      localStorage.getItem('authenticated') !== 'undefined' &&
      localStorage.getItem('authenticated') !== null &&
      localStorage.getItem('authenticated') !== undefined &&
      localStorage.getItem('authenticated') !== 'null'
        ? JSON.parse(localStorage.getItem('user'))
        : null,
    fridgeName:
      localStorage.getItem('fridgeName') !== 'undefined' &&
      localStorage.getItem('fridgeName') !== null &&
      localStorage.getItem('fridgeName') !== undefined &&
      localStorage.getItem('fridgeName') !== 'null'
        ? JSON.parse(localStorage.getItem('fridgeName'))
        : (() => {
            const user = localStorage.getItem('user');
            if (user && user !== 'null' && user !== 'undefined') {
              const userObj = JSON.parse(user);
              return userObj.fridges && userObj.fridges.length > 0 ? userObj.fridges[0].name : null;
            }
            return null;
          })(),
  };

  setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    this.setState({ user });
  };

  setAuthenticated = (authenticated) => {
    localStorage.setItem('authenticated', JSON.stringify(authenticated));
    this.setState({ authenticated });
  };

  setFridgeName = (fridgeName) => {
    localStorage.setItem('fridgeName', JSON.stringify(fridgeName));
    this.setState({ fridgeName });
  };

  logout = () => {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('user');
    localStorage.removeItem('fridgeName');
    this.setState({
      authenticated: false,
      user: null,
      fridgeName: null,
    });
  };

  allDataLoaded = () => {
    return (
      this.state.user !== null &&
      this.state.authenticated !== null &&
      this.state.fridgeName !== null
    );
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          setUser: this.setUser,
          setAuthenticated: this.setAuthenticated,
          authenticated: this.state.authenticated,
          setFridgeName: this.setFridgeName,
          fridgeName: this.state.fridgeName,
          logout: this.logout,
          allDataLoaded: this.allDataLoaded,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
