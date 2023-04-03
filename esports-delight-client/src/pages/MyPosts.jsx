import { useEffect, useState } from "react"
import axios from 'axios'
import { Link, useParams } from "react-router-dom"
import Client from "../services/api"

const MyPosts = () => {

    let id = localStorage.getItem('user_id')

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const res = await axios.get(`http://localhost:3001/api/posts/myPosts/${id}`)
        setPosts(res.data.post)
        console.log(res.data.post);
    }


    useEffect(() => {
        getPosts()
    }, [])


    return (
        <div className="bg-[rgb(0,31,63)] w-full h-[100vh] flex flex-wrap justify-center items-center">
            <div className=" bg-red-300">
                Your Posts
            </div>
            {posts.map((post)=> (
                <div>
                    <h1>{post.content}</h1>
                </div>
            ))}
        </div>
    )
}
export default MyPosts