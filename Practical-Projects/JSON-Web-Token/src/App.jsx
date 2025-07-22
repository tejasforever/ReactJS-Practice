// src/App.jsx
import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const App = () => {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0()

  const [jwtToken, setJwtToken] = useState("")

  const getToken = async () => {
    try {
      const token = await getAccessTokenSilently()
      setJwtToken(token) // Set the token to display
    } catch (e) {
      console.error("Error fetching token:", e)
    }
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🔐 React + Vite + Auth0 (JWT Auth)</h1>

      {!isAuthenticated ? (
        <button onClick={loginWithRedirect}>Log In</button>
      ) : (
        <>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
          <h3>Welcome, {user.name}</h3>

          <button onClick={getToken} style={{ marginTop: '1rem' }}>
            Get JWT Token
          </button>

          {jwtToken && (
            <div style={{ marginTop: '1rem', padding: '1rem', background: '#f4f4f4', borderRadius: '8px' }}>
              <h4>Your JWT Token:</h4>
              <textarea
                readOnly
                value={jwtToken}
                style={{
                  width: '100%',
                  height: '150px',
                  padding: '10px',
                  fontSize: '12px',
                  fontFamily: 'monospace',
                }}
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default App