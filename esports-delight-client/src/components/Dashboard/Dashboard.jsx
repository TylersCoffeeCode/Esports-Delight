import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"

const Dashboard = () => {

    const [tournaments, setTournaments] = useState([])
    const [singleTournament, setSingleTournament] = useState([])
    const [articles, setArticles] = useState([])
    const [singleArticle, setSingleArticle] = useState([])
    const [showPopup, setShowPopup] = useState(false)
    const [selectedTournament, setSelectedTournament] = useState(null)
    const [selectedTab, setSelectedTab] = useState(1)



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

    const grabArticleOne = async () => {
        const res = await axios.get('http://localhost:3001/api/articles')
        console.log(res.data)
        setSingleArticle(res.data[0])
    }

    const grabArticles = async () => {
        const res = await axios.get('http://localhost:3001/api/articles')
        setArticles(res.data)
    }


    const togglePopup = () => {
        setShowPopup(!showPopup)
    }

    const handleTabs = (e) => {
        setSelectedTab(e)
    }


    useEffect(() => {
        getTournaments()
        grabTournamentOne()
        grabArticleOne()
        grabArticles()
    }, [])


    return (
        <div className=" bg-[#0B0C13] w-full h-[100vh] flex flex-wrap items-start">
            {selectedTab === 1 && showPopup && (
                <div className="popup absolute w-11/12 h-[91%] bg-[rgb(0,32,63)] m-auto left-0 right-0 bottom-[5%] flex flex-wrap justify-center items-center text-center border-black border-2 rounded-2xl">
                    <div className=" h-full flex flex-wrap justify-center w-full">
                        <div className="flex flex-wrap w-3/4">
                            <ul className="flex flex-wrap w-full justify-between pt-4">
                                <li className=" bg-[rgb(17,97,176)] w-1/4 h-8 pt-1 text-white hover:shadow-lg hover:shadow-black cursor-pointer" onClick={()=> handleTabs(1)}>Overview</li>
                                <li className=" bg-[rgb(17,97,176)] w-1/4 h-8 pt-1 text-white hover:shadow-lg hover:shadow-black cursor-pointer" onClick={()=> handleTabs(2)}>Teams</li>
                                <li className=" bg-[rgb(17,97,176)] w-1/4 h-8 pt-1 text-white hover:shadow-lg hover:shadow-black cursor-pointer" onClick={()=> handleTabs(3)}>Info</li>
                            </ul>
                        </div>
                        <p className="w-full text-white text-2xl">{selectedTournament.title}</p>
                        <p className="w-full text-white">{selectedTournament.date}</p>
                        <img src={selectedTournament.gameImg} alt="" className="w-full h-2/3" />
                        <button onClick={() => setShowPopup(false)} className=" bg-orange-400 w-32 h-8">Close</button>
                    </div>
                </div>
            )}
            {selectedTab === 2 && showPopup && (
                <div className="popup absolute w-11/12 h-[91%] bg-[rgb(0,32,63)] m-auto left-0 right-0 bottom-[5%] flex flex-wrap justify-center items-center text-center border-black border-2 rounded-2xl">
                    <div className=" h-full flex flex-wrap justify-center w-full">
                        <div className="flex flex-wrap w-3/4">
                            <ul className="flex flex-wrap w-full justify-between pt-4">
                                <li className=" bg-[rgb(17,97,176)] w-1/4 h-8 pt-1 text-white hover:shadow-lg hover:shadow-black cursor-pointer" onClick={()=> handleTabs(1)}>Overview</li>
                                <li className=" bg-[rgb(17,97,176)] w-1/4 h-8 pt-1 text-white hover:shadow-lg hover:shadow-black cursor-pointer" onClick={()=> handleTabs(2)}>Teams</li>
                                <li className=" bg-[rgb(17,97,176)] w-1/4 h-8 pt-1 text-white hover:shadow-lg hover:shadow-black cursor-pointer" onClick={()=> handleTabs(3)}>Info</li>
                            </ul>
                        </div>
                        <p className="w-full text-white text-2xl">Team Array goes here</p>
                        <p className="w-full text-white"></p>
                        <button onClick={() => setShowPopup(false)} className=" bg-orange-400 w-32 h-8">Close</button>
                    </div>
                </div>
            )}
            {selectedTab === 3 && showPopup && (
                <div className="popup absolute w-11/12 h-[91%] bg-[rgb(0,32,63)] m-auto left-0 right-0 bottom-[5%] flex flex-wrap justify-center items-center text-center border-black border-2 rounded-2xl">
                    <div className=" h-full flex flex-wrap justify-center w-full">
                        <div className="flex flex-wrap w-3/4">
                            <ul className="flex flex-wrap w-full justify-between pt-4">
                                <li className=" bg-[rgb(17,97,176)] w-1/4 h-8 pt-1 text-white hover:shadow-lg hover:shadow-black cursor-pointer" onClick={()=> handleTabs(1)}>Overview</li>
                                <li className=" bg-[rgb(17,97,176)] w-1/4 h-8 pt-1 text-white hover:shadow-lg hover:shadow-black cursor-pointer" onClick={()=> handleTabs(2)}>Teams</li>
                                <li className=" bg-[rgb(17,97,176)] w-1/4 h-8 pt-1 text-white hover:shadow-lg hover:shadow-black cursor-pointer" onClick={()=> handleTabs(3)}>Info</li>
                            </ul>
                        </div>
                        <p className="w-full text-white text-2xl">{selectedTournament.content}</p>
                        <p className="w-full text-white"></p>
                        <button onClick={() => setShowPopup(false)} className=" bg-orange-400 w-32 h-8">Close</button>
                    </div>
                </div>
            )}
            <div className="w-11/12 h-[40%] ml-8 mt-[5rem] flex flex-wrap">
                <div className=" w-full border-b-2 pb-2">
                    <h2 className="text-white font-bold text-xl">News</h2>
                </div>
                <div className="flex w-5/12 h-5/6 mt-4 rounded items-end"
                    style={{
                        backgroundImage: `url(${singleArticle.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    <div className=" w-full h-1/4 bg-[rgba(0,0,0,0.8)]">
                        <h1 className="text-white pl-2 mb-4">{singleArticle.title}</h1>
                        <Link className=" text-blue-300 float-right mr-2"><p>Read More →</p></Link>
                    </div>
                </div>
                <div className="flex flex-wrap w-[58%] mt-4 h-5/6 justify-around content-between">
                    {articles.map((article) => (
                        <div className=" w-[47%] h-[48.5%] rounded-md flex items-end"
                            style={{
                                backgroundImage: `url(${singleArticle.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                            <div className=" h-1/3 w-full bg-[rgba(0,0,0,0.8)]">
                                <h2 className="text-white pl-2">{article.title}</h2>
                                <Link className=" text-blue-300 float-right mr-2"><p>Read More →</p></Link>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <div className=" w-11/12 h-[50%]  ml-8">
                <div className=" w-full border-b-2 pb-2">
                    <h2 className="text-white font-bold text-xl">Tournaments</h2>
                </div>
                <div className=" w-[95%] h-1/2 mt-4 border-2 flex flex-wrap justify-center cursor-pointer"
                    onClick={() => {
                        togglePopup()
                        setSelectedTournament(singleTournament)
                    }}
                    >
                    <div className=" w-full flex flex-wrap bg-[rgba(0,0,0,0.7)]">
                        <div className=" w-2/5 bg-[#0000007c] flex flex-wrap items-center">
                            <h2 className=" w-full text-center text-white text-2xl">{singleTournament.title}</h2>
                            <img src={singleTournament.teamOneImage} alt="" className=" w-1/2 h-24 object-contain" />
                            <img src={singleTournament.teamTwoImage} alt="" className=" w-1/2 h-24 object-contain" />
                            <h4 className=" w-full text-center text-white">{singleTournament.date}</h4>
                        </div>
                        <div className=" w-3/5 " style={{
                            backgroundImage: `url(${singleTournament.gameImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'top',
                        }}>
                        </div>
                    </div>
                </div>
                <div className="w-[95%] h-1/3 mt-2 flex">
                    {tournaments.map((tournament) => (
                        <div className={'flex flex-wrap w-64 h-full mr-6 border-2 border-white cursor-pointer'} onClick={() => {
                            togglePopup()
                            setSelectedTournament(tournament)
                        }}
                            style={{ backgroundImage: `url(${tournament.gameImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="w-full flex flex-wrap justify-center bg-[rgba(0,0,0,0.5)] items-center">
                                <h1 className="w-full text-center text-white">{tournament.title}</h1>
                                <img src={tournament.teamOneImage} alt="" className=" w-1/2 h-8 object-contain" />
                                <img src={tournament.teamTwoImage} alt="" className=" w-1/2 h-8 object-contain" />
                                <h3 className="text-white">{tournament.date}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Dashboard