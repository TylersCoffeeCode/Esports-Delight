import logo from './logo.svg';
import Client from './services/api'
import { useEffect, useState } from "react"
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';
import NewsPage from './pages/NewsPage';
import TournamentsPage from './pages/TournamentsPage';
import { Teams } from './pages/Teams';
import DetailedTournament from './pages/DetailedTournament';
import Account from './pages/Account';
import DetailedArticle from './pages/DetailedArticle';
import PostPage from './pages/PostPage';
import CreatePost from './pages/CreatePost';

function App() {

  const [user, setUser] = useState(null)

  const CheckSession = async () => {
    try {
      const res = await Client.get('/user/session')
      return res.data
    } catch (error) {
      throw error
    }
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
    checkToken()
    }
  }, [])


  return (
    <div className='app'>
      <Nav />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/allNews' element={<NewsPage />} />
        <Route path='/allTournaments' element={<TournamentsPage />} />
        <Route path='/allTeams' element={<Teams />} />
        <Route path='/TournamentDetails/:id' element={<DetailedTournament />} />
        <Route path='/Account' element={<Account />} />
        <Route path='/article/:id' element={<DetailedArticle />} />
        <Route path='/posts' element={<PostPage />} />
        <Route path='/posts/create' element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
