import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { loginWithRedirect, logout, user, isAuthenticated, getIdTokenClaims } = useAuth0();
  const [jwtToken, setJwtToken] = useState(null); // state to store the token

  const handleShowToken = async () => {
    const token = await getIdTokenClaims();
    setJwtToken(token.__raw); // set token in state instead of alert
  };

  return (
    <div>
      <h1>JSON Web Token (JWT)</h1>
      <h1>With Auth0 + React (Vite)</h1>

      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      ) : (
        <>
          <p>Welcome, {user.name}</p>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>

          <button onClick={handleShowToken}>Show JWT</button>

          {/* ✅ JWT Displayed Below */}
          {jwtToken && (
            <pre style={{ marginTop: '20px', whiteSpace: 'pre-wrap', wordBreak: 'break-word', background: '#eee', padding: '10px', borderRadius: '5px' }}>
              {jwtToken}
            </pre>
          )}
        </>
      )}
    </div>
  );
}

export default App;
