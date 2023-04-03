import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"

const PostPage = () => {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const res = await axios.get('http://localhost:3001/api/posts')
        setPosts(res.data)
        console.log(res.data);
    }

    useEffect(() => {
        getPosts()
    },[])


  return (
    <div className="bg-[rgb(0,31,63)] w-full h-[100vh] flex flex-wrap justify-center items-end">
        <div className=" bg-red-400 w-1/2 h-[93%]">
            <div>
                {posts.map((post) => (
                    <div className=" bg-blue-200 h-[350px] mb-8">
                        <h1>{post.content}</h1>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
export default PostPage