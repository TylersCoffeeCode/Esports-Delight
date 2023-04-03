import { useEffect, useState } from "react"
import axios from 'axios'
import { Link, useParams } from "react-router-dom"
import Client from "../services/api"

const MyPosts = () => {

    let id = localStorage.getItem('user_id')

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const res = await Client.get(`http://localhost:3001/api/posts/myPosts/${id}`)
        setPosts(res.data.post)
        console.log(res.data.post);
    }


    useEffect(() => {
        getPosts()
    }, [])


    return (
        <div className="bg-[rgb(0,31,63)] w-full h-[100vh] flex flex-wrap justify-center items-center content-center">
            <div className=" bg-red-300 w-2/3 flex justify-center text-2xl text-white">
                Your Posts
            </div>
            <div className=" bg-blue-200 w-2/3">
                {posts.map((post) => (
                    <div>
                        <h1>{post.content}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MyPosts