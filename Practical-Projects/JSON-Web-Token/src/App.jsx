import './App.css'
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { loginWithRedirect, logout, user, isAuthenticated, getIdTokenClaims } = useAuth0();

  return (
    <div>
      <h1>Auth0 + React (Vite)</h1>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      ) : (
        <>
          <p>Welcome, {user.name}</p>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
          <button onClick={async () => {
            const token = await getIdTokenClaims();
            alert(token.__raw); // your JWT
            console.log("JWT Token: ", token.__raw);
          }}>
            Show JWT
          </button>
        </>
      )}
    </div>
  );
}

export default App;

