import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./LandingPage.jsx"
import SignIn from "./SignIn.jsx"

import RepoHeader from "./RepoHeader.jsx";
import LastWeekRepo from "./LastWeekRepo.jsx";
import VideoView from "./VideoView.jsx";
import Overlay from "./Overlay.jsx"
import RecordReady from "./RecordReady.jsx"
import SendRecord from "./SendRecord.jsx"
import './App.css';


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="SignIn" element={<SignIn />} />
                    <Route path="RepoHeader" element={<RepoHeader />} />
                    
                    <Route path="LastWeekRepo" elemrnt={<LastWeekRepo />} />
                    <Route path="VideoView" element={<VideoView />} />
                    <Route path="Overlay" element={<Overlay />} />
                    <Route path="/SendRecord" element={<SendRecord />} />
                    <Route path="/RecordReady" element={<RecordReady />} />
                  
                </Routes>
            </div>
        </Router>
    );
}

export default App;

