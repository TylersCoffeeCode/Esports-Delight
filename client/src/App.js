import logo from './logo.svg';
import Client from './services/api'
import { useEffect, useState } from "react"
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';
import NewsPage from './pages/NewsPage';
import TournamentsPage from './pages/TournamentsPage';
import DetailedTournament from './pages/DetailedTournament';
import Account from './pages/Account';
import DetailedArticle from './pages/DetailedArticle';
import PostPage from './pages/PostPage';
import CreatePost from './pages/CreatePost';
import MyPosts from './pages/MyPosts';

function App() {

  const [user, setUser] = useState(null)

  const CheckSession = async () => {
    try {
      const res = await Client.get('/users/session')
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
        <Route path='/' element={<Dashboard user={user}/>} />
        <Route path='/allNews' element={<NewsPage user={user}/>} />
        <Route path='/allTournaments' element={<TournamentsPage user={user}/>} />
        <Route path='/TournamentDetails/:id' element={<DetailedTournament user={user}/>} />
        <Route path='/Account' element={<Account user={user} setUser={setUser}/>} />
        <Route path='/article/:id' element={<DetailedArticle user={user}/>} />
        <Route path='/posts' element={<PostPage user={user}/>} />
        <Route path='/posts/create' element={<CreatePost />} />
        <Route path='/posts/create/myPosts' element={<MyPosts />} />
      </Routes>
    </div>
  );
}

export default App;
