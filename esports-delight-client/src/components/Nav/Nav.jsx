import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="w-full h-16 flex flex-wrap bg-gradient-to-r from-[rgb(10,10,10)] to-[rgb(1,126,255)] fixed z-10">
      <div className="w-1/3 flex justify-start">
        <div className="w-24 flex justify-center items-center">
          <Link to='/'><h1 className='text-white text-4xl'>GD</h1></Link>
        </div>
        <div className='w-full flex justify-around items-center'>
          <Link to='/allTournaments' className=' text-white'>Tournaments</Link>
          <Link to='/allNews' className=' text-white'>Articles</Link>
          <Link to='/allTeams' className=' text-white'>Teams</Link>
          <Link to='/allTournaments' className=' text-white'>Posts</Link>
        </div>
      </div>
      <div className="navRight w-2/3 flex items-center justify-between">
        <div className='ml-8 w-2/5 h-3/6 flex justify-between'>
          <input type="text" placeholder='Search' className=' w-11/12 h-full indent-4 rounded-md border-2 border-white' />
          <button>🔍</button>
        </div>
        <div className='w-2/4 h-full flex items-center justify-end'>
          <div className='flex h-3/4 items-center border-l-2'>
            <Link to='/Account' className='ml-6 mr-6 text-white'>👤</Link>
            <Link className='mr-6 text-white'>⚙️</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Nav