import { useEffect, useState } from "react"
import axios from 'axios'
import { Link, useParams } from "react-router-dom"
import Client from "../services/api"



const CreatePost = () => {

  let userId = localStorage.getItem('user_id')


    const [formData, setFormData] = useState({
        userId: `${userId}`,
        image: '',
        content: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await Client.post('/posts/create', formData)
        } catch (error) {
            throw error
        }
    }



    return (
        <div className="bg-[rgb(0,31,63)] w-full h-[100vh] flex flex-wrap justify-center items-center">
            <div className="w-full h-3/5 flex flex-wrap items-start content-start justify-center">
                <h1 className=" text-white w-full h-fit flex justify-center text-2xl">Create Post</h1>
                <div className=" bg-[rgb(17,122,227)] w-1/4 h-[350px] flex flex-wrap justify-center items-center rounded-xl mt-16">
                    <div className="text-white w-3/5 h-1/2 items-center">
                        <form className="flex flex-wrap justify-center" onSubmit={handleSubmit}>
                            <label className="w-full text-center">
                                Image URL:
                            </label>
                            <input type="text" name="image" value={formData.image} onChange={handleChange} className="w-full text-black"/>
                            <label className="w-full text-center">
                                Content:
                            </label>
                            <textarea name="content" value={formData.content} onChange={handleChange} className=" w-full text-black"></textarea>
                            <br />
                            <button type="submit" className=" mt-4 bg-slate-700 p-2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreatePost