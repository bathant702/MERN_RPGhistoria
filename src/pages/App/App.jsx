//login and home page
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
//movie pages
import NewMoviePage from '../NewMoviePage/NewMoviePage';
import MoviesIndexPage from '../MoviesIndexPage/MoviesIndexPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
//character pages
import NewCharacterPage from '../NewCharacterPage/NewCharacterPage';
import CharactersIndexPage from '../CharactersIndexPage/CharactersIndexPage';
import CharacterDetailPage from '../CharacterDetailPage/CharacterDetailPage';
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
        <Route path="/movies/new" element={<NewMoviePage />} />
        <Route path="/movies" element={<MoviesIndexPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailPage />} />
        <Route path="/characters" element={<CharactersIndexPage />} />
        <Route path="/characters/new" element={<NewCharacterPage />} />
        <Route path="/characters/:characterId" element={<CharacterDetailPage />} />
      </Routes>
      </>
      :
      <AuthPage setUser={setUser}></AuthPage>}
    </main>
  );
}
