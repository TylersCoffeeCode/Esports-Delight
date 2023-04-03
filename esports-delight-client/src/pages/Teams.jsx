import { useEffect, useState } from "react"
import axios from 'axios'
import Client from "../../services/api"





export const Teams = () => {

    const [tournaments, setTournaments] = useState([])


    const getTournaments = async () => {
        const res = await Client.get('http://localhost:3001/api/teams/')
        console.log(res.data);
        setTournaments(res.data)
    }

    useEffect(() => {
        getTournaments()
    },[])


    return (
        <div className="bg-[#dfdfdf] w-full h-[100vh] flex flex-wrap items-start justify-center">
            {tournaments.map((tourn) => (
                <div className=" bg-red-200 w-[250px] h-16 m-2 text-3xl">
                    <h1>{tourn.teamName}</h1>
                    <img src={tourn.teamLogo} alt="" />
                </div>
            ))}
        </div>
    )
}