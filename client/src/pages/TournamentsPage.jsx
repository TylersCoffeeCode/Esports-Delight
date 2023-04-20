import csVideo from '../assests/ESLytube.mp4'
import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import Client from "../services/api"



const TournamentsPage = () => {

    const [tournaments, setTournaments] = useState([])

    const getTournaments = async () => {
        const res = await Client.get('http://localhost:3001/api/tournaments/')
        console.log(res.data);
        setTournaments(res.data)
    }

    useEffect(() => {
        getTournaments()
    }, [])

    return (
        <div className="bg-[#000000] w-full h-[100vh] flex flex-wrap items-start justify-center">
            <video className=' w-full h-full' src={csVideo} autoPlay muted>
            </video>
            <div className=" w-[90%] h-5/6 mt-[6rem] flex flex-wrap bg-[rgb(0,31,63)] items-start justify-center rounded-lg fixed sm:w-2/3 lg:w-1/3">
                <div className="w-full h-8 text-2xl text-white flex justify-center mt-4">
                    <h1 className=' font-bold'>Tournaments</h1>
                </div>
                <div className=" bg-[rgba(19,49,79,0.44)] w-[95%] h-5/6 border-2 border-black flex flex-wrap justify-center items-start content-start">
                    {tournaments.map((tournament) => (
                        <Link className='w-[98%]' to={`/TournamentDetails/${tournament.id}`}><div className=' bg-[#4c4b64] w-full h-14 mt-2 mb-1 flex items-center justify-between border-2 border-black'>
                            <h2 className='ml-2 text-white text-sm'>{tournament.title}</h2>
                            <h3 className='mr-2 text-white text-sm'>{tournament.date}</h3>
                        </div></Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default TournamentsPage