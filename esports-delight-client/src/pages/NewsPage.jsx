import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import Client from "../../services/api"


const NewsPage = () => {

    const [articles, setArticles] = useState([])

    const [singleArticle, setSingleArticle] = useState([])




    const getArticles = async () => {
        const res = await Client.get('http://localhost:3001/api/articles')
        setArticles(res.data)
        console.log(res.data);
    }

    const getSignleArticle = async () => {
        const res = await Client.get('http://localhost:3001/api/articles')
        setSingleArticle(res.data[0])
    }


    useEffect(() => {
        getSignleArticle()
        getArticles()
    }, [])



    return (
        <div className="bg-[#0B0C13] w-full h-[100vh] flex flex-wrap items-start justify-center">
            <div className="w-4/5 h-[55%] mt-[5rem] flex flex-wrap">
                <div className="w-full h-8 text-xl text-white flex items-center border-b-2 border-white">
                    <h2>Featured Articles</h2>
                </div>
                <div className=" bg-[rgba(0,0,0,0.8)] w-1/3 h-4/5 flex flex-wrap justify-center border-2 border-white">
                    <img src={singleArticle.image} alt="" className="w-full h-3/4 object-contain" />
                    <h1 className=" text-xl text-white">{singleArticle.title}</h1>
                    <p className=" text-lg text-white text-center">{singleArticle.content}</p>
                    <Link className=" text-blue-300 w-full text-right"><p>Read More →</p></Link>
                </div>
                <div className="h-[90%] w-3/5 ml-6 flex flex-wrap border-2 border-white">
                    {articles.slice(1, 5).map((article) => (
                        <div className="w-full h-1/4 flex flex-wrap content-end border-white border-2" style={{
                            backgroundImage:
                                `url(${article.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                            <h2 className="bg-[rgba(0,0,0,0.8)] text-white w-full text-lg">{article.title}</h2>
                            <Link className="text-blue-300 w-full text-right bg-[rgba(0,0,0,0.8)]"><p>Read More →</p></Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className=" w-4/5 h-1/3 flex flex-wrap">
                <div className="w-full h-8 text-xl text-white flex flex-wrap items-center border-b-2 border-white">
                    <h2>More Articles</h2>
                </div>
                <div className="w-full h-3/4 flex flex-wrap justify-around items-start  content-start overflow-y-scroll bg-[rgb(34,42,51)]">
                        {articles.slice(5).map((article) => (
                            <div className=" w-[47%] bg-[rgb(95,132,168)] h-16 my-2 flex items-center justify-between mt-6">
                                <img src={article.image} alt="" className="h-full w-[140px] mr-2 border-r-2 border-black"/>
                                <h3 className="flex justify-start mr-2 text-white">{article.title}</h3>
                                <h4 className="mr-2 text-white">{article.date}</h4>
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    )
}
export default NewsPage