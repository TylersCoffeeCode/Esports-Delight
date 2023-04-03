import { useEffect, useState } from "react"
import axios from 'axios'
import { Link, useParams } from "react-router-dom"
import Client from "../../services/api"


const DetailedArticle = () => {

    const {id} = useParams()
    
    const [article, setArticle] = useState([])

    const grabArticle = async () => {
        const res = await Client.get(`http://localhost:3001/api/articles/${id}`)
        console.log(res.data.article)
        setArticle(res.data.article)
    }

    useEffect(() => {
        grabArticle()
    }, [])

  return (
    <div className="bg-[rgb(0,31,63)] w-full h-[100vh] flex flex-wrap items-center">
        <div className="w-full h-[95%] flex flex-wrap justify-center content-start mt-10">
            <div className="text-white w-full h-16 mt-6 flex flex-wrap text-center justify-center items-center text-xl font-bold">
                <h1 className="w-full">{article.title}</h1>
                <h3>{article.date}</h3>
            </div>
            <div className=" w-2/4 h-2/5 mt-8">
                <img src={article.image} alt="" className="w-full h-full rounded-md"/>
            </div>
            <div className=" w-3/4 h-[45%] mt-2 border-2 border-white text-white text-xl flex justify-center text-center rounded-md">
                <p>{article.content}</p>
            </div>
        </div>
    </div>
  )
}
export default DetailedArticle