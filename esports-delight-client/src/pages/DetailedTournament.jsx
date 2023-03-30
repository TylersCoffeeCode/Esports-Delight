import { useEffect, useState } from "react"
import axios from 'axios'
import { Link, useParams } from "react-router-dom"


const DetailedTournament = () => {

    const {id} = useParams()

    const [tournaments, setTournaments] = useState([])

    const getTournaments = async () => {
        const res = await axios.get(`http://localhost:3001/api/tournaments/id/${id}`)
        console.log(res.data);
        setTournaments(res.data.tournament)
    }

    const getTeamByTournaments = async () => {
        const res = await axios.get(``)
    }

    useEffect(() => {
        getTournaments()
    }, [])


    return (
        <div className="bg-[#000000] w-full h-[100vh] flex flex-wrap items-start justify-center">
            <div className=" w-full h-5/6 mt-[6rem] flex flex-wrap bg-[rgb(0,31,63)] items-start rounded-lg justify-between">
                <div className=" bg-black w-[400px] h-[400px] ml-4 mt-4">
                    <img className=" w-full h-full object-contain" src={tournaments.gameImg} alt="" />
                </div>
                <div className=" bg-slate-400 w-2/5 h-2/3 mt-4 mr-8 flex flex-wrap justify-center content-start">
                    <h1 className="  text-center text-3xl mt-8 mb-8">{tournaments.title}</h1>
                    <h2 className=" text-center">{tournaments.content}</h2>
                </div>
                <div className="bg-slate-400 h-[250px] ml-10 w-2/3">

                </div>
            </div>
        </div>
    )
}
export default DetailedTournament