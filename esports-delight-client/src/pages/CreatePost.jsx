import { useEffect, useState } from "react"
import axios from 'axios'
import { Link, useParams } from "react-router-dom"



const CreatePost = () => {
    return (
        <div className="bg-[rgb(0,31,63)] w-full h-[100vh] flex flex-wrap justify-center items-center">
            <div className="w-full h-3/5 flex flex-wrap items-start content-start justify-center">
                <h1 className=" text-white w-full h-fit flex justify-center text-2xl">Create Post</h1>
                <div className=" bg-[rgb(17,122,227)] w-1/4 h-[350px] flex flex-wrap justify-center items-center rounded-xl mt-16">
                    <div className="text-white w-3/5 h-1/2 items-center">
                        <form className="flex flex-wrap justify-center">
                            <label className="w-full text-center">
                                Image URL:
                            </label>
                            <input type="text" name="image" className="w-full"/>
                            <label className="w-full text-center">
                                Content:
                            </label>
                            <textarea name="content" className=" w-full"></textarea>
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