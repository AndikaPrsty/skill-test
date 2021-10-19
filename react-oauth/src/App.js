import React, { useEffect } from 'react'
import './App.css';
import { useAuth0 } from '@auth0/auth0-react'
import Profile from './components/Profile';

function App() {

  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0()

  useEffect(() => {
    console.log(isAuthenticated)
  }, [isAuthenticated])

  return (
    <div className="App">
      <header className="App-header">
        {isLoading ? 'Loading...' : (!isAuthenticated ? <button onClick={loginWithRedirect}>Login</button> : <Profile />)}
      </header>
    </div>
  );
}

export default App;
