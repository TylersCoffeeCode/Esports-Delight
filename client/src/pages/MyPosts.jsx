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

    const handleDelete = async (id) => {
        try {
          await Client.delete(`posts/delete/${id}`)
          getPosts()
        } catch (error) {
          throw error
        }
      }


    useEffect(() => {
        getPosts()
    }, [])


    return (
        <div className="bg-[rgb(0,31,63)] w-full h-[100vh] flex flex-wrap justify-center items-center content-center">
            <div className="w-2/3 flex justify-center text-2xl text-white">
                Your Posts
            </div>
            <div className="w-2/3 h-3/4 flex flex-wrap justify-around overflow-y-scroll">
                {posts.map((post) => (
                    <div className="bg-[rgb(17,122,227)] text-white w-2/5 h-[550px] mb-8 mt-8 border-4 border-black rounded-lg overflow-hidden">
                    <img src={post.image} alt="" className=" w-full h-4/5 border-b-4 border-black" />
                    <div className="h-1/5">
                        <h1 className=" text-2xl font-bold ml-2">{post.content}</h1>
                        <div className="ml-2 h-2/3 flex flex-wrap justify-evenly items-end">
                            <button className=" bg-[rgb(15,77,138)] w-1/5 h-1/2 border-black border-2 cursor-pointer">Edit</button>
                            <button className=" bg-[rgb(15,77,138)] w-1/5 h-1/2 border-black border-2 cursor-pointer" onClick={()=>handleDelete(post.id)}>Delete</button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
export default MyPosts