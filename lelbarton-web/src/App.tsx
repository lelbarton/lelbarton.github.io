import React from 'react';
import './App.css';
import { ResultsBoard } from "./ResultsBoard";
import {GoogleOAuthProvider} from "@react-oauth/google";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo"/>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    <div>
        <GoogleOAuthProvider
            clientId={"291371917046-0lru68gqc0takso9i7hvadp42cjg3lf2.apps.googleusercontent.com"}

        >

            <ResultsBoard/>
        </GoogleOAuthProvider>
    </div>
    // </div>
  );
}

export default App;
