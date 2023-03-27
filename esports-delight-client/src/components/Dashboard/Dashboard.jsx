import { useState } from "react"

const Dashboard = () => {

    const [tournaments, setTournaments] = useState([])



    return (
        <div className=" bg-[#0B0C13] w-full h-[100vh] flex flex-wrap items-start">
            <div className=" bg-red-300 w-11/12 h-[40%] ml-8 mt-[5rem] flex flex-wrap">
                <div className=" w-full border-b-2 pb-2">
                    <h2>News</h2>
                </div>
                <div className="flex w-5/12 h-5/6 mt-4 bg-fuchsia-300">

                </div>
                <div className="flex w-[58%] mt-4 h-5/6 bg-slate-600">

                </div>
            </div>
            <div className=" bg-blue-200 w-11/12 h-[50%]  ml-8">
                <div className=" w-full border-b-2 pb-2">
                    <h2>Tournaments</h2>
                </div>
                <div className=" w-[95%] h-1/2 bg-purple-300 mt-4 border-2">

                </div>
                <div className=" bg-red-200 w-[95%] h-1/3 mt-2">

                </div>
            </div>
        </div>
    )
}
export default Dashboard