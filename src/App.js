import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Players from './pages/Players';
import Lineup from './pages/Lineup';
import Tournaments from './pages/Tournaments';
import MVPVoting from './pages/MVPVoting';
import PlayerAchievements from './pages/PlayerAchievements';
import Stats from './pages/Stats';
import UpcomingTournaments from './pages/UpcomingTournaments';
import Player from './pages/Player';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/players" element={<Players />} />
          <Route path="/lineup" element={<Lineup />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/mvp-voting" element={<MVPVoting />} />
          <Route path="/player-achievements" element={<PlayerAchievements />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/upcoming-tournaments" element={<UpcomingTournaments />} />
          <Route path="/players/:playerName" element={<Player />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
