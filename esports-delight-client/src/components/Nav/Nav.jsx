import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="w-full h-16 flex flex-wrap bg-gradient-to-r from-[rgb(10,10,10)] to-[rgb(1,126,255)] fixed">
      <div className="w-1/3 flex justify-start">
        <div className="w-24 flex justify-center items-center">
          <h1 className='text-white text-4xl'>GD</h1>
        </div>
        <div className='w-full flex justify-around items-center'>
          <Link className=' text-white'>Tournaments</Link>
          <Link className=' text-white'>Articles</Link>
        </div>
      </div>
      <div className="navRight w-2/3 flex items-center justify-between">
        <div className='ml-8 w-2/5 h-3/6 flex justify-between'>
          <input type="text" placeholder='Search' className=' w-11/12 h-full indent-4 rounded-md border-2 border-white' />
          <button>🔍</button>
        </div>
        <div className='w-2/4 h-full flex items-center justify-end'>
          <div className='flex h-3/4 items-center border-l-2'>
            <Link className='ml-6 mr-6 text-white'>USER</Link>
            <Link className='mr-6 text-white'>Settings</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Nav