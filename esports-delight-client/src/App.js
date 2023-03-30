import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';
import NewsPage from './pages/NewsPage';
import TournamentsPage from './pages/TournamentsPage';
import { Teams } from './pages/Teams';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/allNews' element={<NewsPage />} />
        <Route path='/allTournaments' element={<TournamentsPage />} />
        <Route path='/allTeams' element={<Teams />} />
      </Routes>
    </div>
  );
}

export default App;
