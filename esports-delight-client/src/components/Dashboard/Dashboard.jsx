import { useEffect, useState } from "react"
import axios from 'axios'

const Dashboard = () => {

    const [tournaments, setTournaments] = useState([])
    const [singleTournament, setSingleTournament] = useState([])

    const getTournaments = async () => {
        const res = await axios.get('http://localhost:3001/api/tournaments/')
        console.log(res.data);
        setTournaments(res.data)
    }

    const grabTournamentOne = async () => {
        const res = await axios.get('http://localhost:3001/api/tournaments/')
        console.log(res.data[2]);
        setSingleTournament(res.data[1])
    }

    const grabArticle = async () => {
        
    }

    useEffect(() => {
        getTournaments()
    }, [])

    useEffect(() => {
        grabTournamentOne()
    }, [])


    return (
        <div className=" bg-[#0B0C13] w-full h-[100vh] flex flex-wrap items-start">
            <div className="w-11/12 h-[40%] ml-8 mt-[5rem] flex flex-wrap">
                <div className=" w-full border-b-2 pb-2">
                    <h2 className="text-white">News</h2>
                </div>
                <div className="flex w-5/12 h-5/6 mt-4 bg-fuchsia-300">

                </div>
                <div className="flex w-[58%] mt-4 h-5/6 bg-slate-600">

                </div>
            </div>
            <div className=" w-11/12 h-[50%]  ml-8">
                <div className=" w-full border-b-2 pb-2">
                    <h2 className="text-white">Tournaments</h2>
                </div>
                <div className=" w-[95%] h-1/2 mt-4 border-2 flex flex-wrap justify-center"
                    style={{
                        backgroundImage: `url(${singleTournament.gameImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                    <h2 className=" w-full text-center text-white text-3xl">{singleTournament.title}</h2>
                    <img src={singleTournament.teamOneImage} alt="" className=" w-1/2 h-24 object-contain" />
                    <img src={singleTournament.teamTwoImage} alt="" className=" w-1/2 h-24 object-contain" />
                    <h4 className=" w-full text-center text-white">{singleTournament.date}</h4>
                </div>
                <div className="w-[95%] h-1/3 mt-2 flex">
                    {tournaments.map((tournament) => (
                        <div className={'flex flex-wrap w-64 justify-center h-full mr-6 border-2 border-white'}
                            style={{ backgroundImage: `url(${tournament.gameImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <h1 className="w-full text-center text-white">{tournament.title}</h1>
                            <img src={tournament.teamOneImage} alt="" className=" w-1/2 h-8 object-contain" />
                            <img src={tournament.teamTwoImage} alt="" className=" w-1/2 h-8 object-contain" />
                            <h3 className="text-white">{tournament.date}</h3>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Dashboard