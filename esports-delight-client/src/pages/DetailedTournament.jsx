import { useEffect, useState } from "react"
import axios from 'axios'
import { Link, useParams } from "react-router-dom"


const DetailedTournament = () => {

    const {id} = useParams()

    const [tournaments, setTournaments] = useState([])
    const [teams, setTeams] = useState([])

    const getTournaments = async () => {
        const res = await axios.get(`http://localhost:3001/api/tournaments/id/${id}`)
        setTournaments(res.data.tournament)
    }

    const getTeamByTournaments = async () => {
        const res = await axios.get(`http://localhost:3001/api/tournaments/team/all/${id}`)
        console.log(res.data)
        setTeams(res.data)
    }

    useEffect(() => {
        getTournaments()
        getTeamByTournaments()
    }, [])


    return (
        <div className="bg-[#000000] w-full h-[100vh] flex flex-wrap items-start justify-center">
            <div className=" w-full h-5/6 mt-[6rem] flex flex-wrap bg-[rgb(0,31,63)] items-start rounded-lg justify-between">
                <div className=" bg-black w-[400px] h-[400px] ml-4 mt-4">
                    <img className=" w-full h-full object-contain" src={tournaments.gameImg} alt="" />
                </div>
                <div className=" bg-slate-400 w-2/5 h-2/3 mt-4 mr-8 flex flex-wrap justify-center content-start">
                    <h1 className="  text-center text-3xl mt-8 mb-8 w-full">{tournaments.title}</h1>
                    <h2 className=" text-center w-4/5">{tournaments.content}</h2>
                </div>
                <div className="bg-slate-400 h-[250px] ml-10 w-2/3 flex flex-wrap justify-around items-center">
                    {teams.map((team) => (
                        <div className="flex flex-wrap w-40 h-2/5">
                            <img src={team.teamList.teamLogo} alt="" className=" object-contain w-full h-16"/>
                            <h3 className=" w-full text-center">{team.teamList.teamName}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default DetailedTournament