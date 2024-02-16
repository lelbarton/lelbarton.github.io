import React from 'react';
import './App.css';
import { ResultsBoard } from "./ResultsBoard";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GOOGLE_CLIENT_ID = '291371917046-0lru68gqc0takso9i7hvadp42cjg3lf2.apps.googleusercontent.com'

function App() {
  return (
    <div>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <ResultsBoard/>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
