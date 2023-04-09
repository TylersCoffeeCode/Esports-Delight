import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="w-full h-16 flex flex-wrap bg-gradient-to-r justify-between from-[rgb(10,10,10)] to-[rgb(1,126,255)] fixed z-10">
      <div className="w-[83%] flex">
        <div className="w-18 flex justify-center items-center">
          <Link to='/'><h1 className='text-white text-4xl'>GD</h1></Link>
        </div>
        <div className='w-full flex justify-around items-center'>
          <Link to='/allTournaments' className='mr-1 text-white'>Tournaments</Link>
          <Link to='/allNews' className='mr-1 text-white'>Articles</Link>
          <Link to='/posts' className='mr-1 text-white'>Posts</Link>
        </div>
      </div>
      <div className="navRight w-1/6 flex items-center justify-end">
        <div className='w-full h-full flex items-center justify-end'>
          <div className='flex h-3/4 items-center border-l-2 justify-center w-full'>
            <Link to='/Account' className=' text-white'>👤</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Nav


