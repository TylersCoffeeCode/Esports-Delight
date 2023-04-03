import { useEffect, useState } from "react"
import axios from 'axios'
import { Link, useParams } from "react-router-dom"
import Client from "../services/api"



const DetailedTournament = () => {

    const {id} = useParams()

    const [tournaments, setTournaments] = useState([])
    const [teams, setTeams] = useState([])

    const getTournaments = async () => {
        const res = await Client.get(`http://localhost:3001/api/tournaments/id/${id}`)
        setTournaments(res.data.tournament)
    }

    const getTeamByTournaments = async () => {
        const res = await Client.get(`http://localhost:3001/api/tournaments/team/all/${id}`)
        console.log(res.data)
        setTeams(res.data)
    }

    useEffect(() => {
        getTournaments()
        getTeamByTournaments()
    }, [])


    return (
        <div className="bg-[rgb(0,31,63)] w-full h-[100vh] flex flex-wrap items-start">
            <div className=" w-full h-full flex flex-wrap bg-[rgb(0,31,63)] content-between justify-between">
                <div className=" bg-black w-2/5 h-2/5 mt-32 rounded-r-full overflow-hidden">
                    <img className=" w-full h-full object-cover" src={tournaments.gameImg} alt="" />
                </div>
                <div className=" bg-[rgb(33,129,226)] text-white w-1/2 mr-8 h-2/3 mt-32 flex flex-wrap justify-center content-start rounded-xl overflow-y-scroll">
                    <h1 className="  text-center text-3xl mt-8 mb-4 w-full font-bold">{tournaments.title}</h1>
                    <h2 className="  text-center text-xl w-full mb-2">{tournaments.date}</h2>
                    <h2 className=" text-center w-4/5">{tournaments.content}</h2>
                </div>
                <div className="bg-[rgb(33,129,226)] h-1/6 w-5/6 flex flex-wrap justify-around items-start rounded-br-full">
                    <div className="h-full flex items-center text-white">
                    <h4 className=" -rotate-90 text-3xl font-bold">Teams</h4>
                    </div>
                    <div className=" w-[80%] h-full flex flex-wrap items-center">
                    {teams.map((team) => (
                        <div className="flex flex-wrap w-40 h-1/3 mr-8">
                            <img src={team.teamList.teamLogo} alt="" className=" object-contain w-full h-2/3"/>
                            <h3 className=" w-full text-center text-white">{team.teamList.teamName}</h3>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetailedTournament