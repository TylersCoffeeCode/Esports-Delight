import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
