import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"

const NewsPage = () => {

    const [articles, setArticles] = useState([])

    const [singleArticle, setSingleArticle] = useState([])




    const getArticles = async () => {
        const res = await axios.get('http://localhost:3001/api/articles')
        setArticles(res.data)
    }

    const getSignleArticle = async () => {
        const res = await axios.get('http://localhost:3001/api/articles')
        setSingleArticle(res.data[1])
        console.log(res.data[0]);
    }


    useEffect(() => {
        getSignleArticle()
        getArticles()
    }, [])



    return (
        <div className="bg-[#0B0C13] w-full h-[100vh] flex flex-wrap items-start justify-center">
            <div className="w-4/5 h-[55%] mt-[5rem] flex flex-wrap">
                <div className="w-full h-8 text-xl text-white flex items-center border-b-2 border-white">
                    <h2>Featured Article</h2>
                </div>
                <div className=" bg-white w-1/3 h-4/5 flex flex-wrap">
                    <img src={singleArticle.image} alt="" className="w=full h-2/4"/>
                    <h1>{singleArticle.title}</h1>
                    <p>{singleArticle.content}</p>
                    <Link className=" text-blue-300"><p>Read More →</p></Link>
                </div>
                <div className=" bg-teal-400 h-4/5 w-3/5 ml-6">

                </div>
            </div>
            <div className=" bg-yellow-100 w-4/5 h-1/3">

            </div>
        </div>
    )
}
export default NewsPage