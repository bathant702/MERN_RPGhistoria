//login and home page
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
//character pages
import NewCharacterPage from '../NewCharacterPage/NewCharacterPage';
import CharactersIndexPage from '../CharactersIndexPage/CharactersIndexPage';
import CharacterDetailPage from '../CharacterDetailPage/CharacterDetailPage';
//rpg sessions pages
import NewSessionPage from '../NewSessionPage/NewSessionPage';
import SessionsIndexPage from '../SessionsIndexPage/SessionsIndexPage';
import SessionDetailPage from '../SessionDetailPage/SessionDetailPage';
//routes, states, nav, css
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
      { user ? 
      <>
      <NavBar setUser={ setUser } user={user}></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersIndexPage />} />
        <Route path="/characters/new" element={<NewCharacterPage />} />
        <Route path="/characters/:characterId" element={<CharacterDetailPage />} />
        <Route path="/sessions" element={<SessionsIndexPage />} />
        <Route path="/sessions/new" element={<NewSessionPage />} />
        <Route path="/sessions/:sessionId" element={<SessionDetailPage />} />
      </Routes>
      </>
      :
      <AuthPage setUser={setUser}></AuthPage>}
    </main>
  );
}
