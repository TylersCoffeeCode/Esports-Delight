import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import Client from "../../services/api"


const RegisterComponent = ({toggleSignUp}) => {


    const initialState = {
        userName: '',
        email: '',
        password: ''
    }

    const [formValues, setFormValues] = useState(initialState)

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            let userData = formValues
            let response = await Client.post('http://localhost:3001/api/users/create', { userData })
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div>
            <div className="bg-[#000000] w-full h-[100vh] flex flex-wrap items-center justify-center">
                <div className="bg-white w-3/4 h-4/5 flex justify-end mt-8">
                    <div className="bg-white w-2/4 h-full flex flex-wrap items-center">
                        <div className="w-4/5 h-8 flex ml-2">
                            <h1 className="text-xl">Gamer's Delight</h1>
                        </div>
                        <div className="w-full h-3/4 flex flex-wrap justify-center content-center">
                            <h1 className="w-full text-center text-3xl">Create Account</h1>
                            <h2 className="w-full text-center">Create a new account</h2>
                            <form className="w-1/2 flex flex-wrap mt-4" onSubmit={onSubmit}>
                                <label htmlFor="username" className="w-full text-lg">Username</label>
                                <input
                                    name="userName"
                                    type="username"
                                    placeholder="Enter username"
                                    required
                                    className="w-full mb-6 p-2 border-2 border-gray-400"
                                    onChange={handleChange}
                                    value={formValues.userName}
                                />
                                <label htmlFor="email" className="w-full text-lg">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Enter email"
                                    required
                                    className="w-full mb-6 p-2 border-2 border-gray-400"
                                    onChange={handleChange}
                                    value={formValues.email}
                                />
                                <label htmlFor="Password" className="w-full text-lg">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Enter password"
                                    required
                                    className="w-full mb-8 p-2 border-2 border-gray-400"
                                    onChange={handleChange}
                                    value={formValues.password}
                                />
                                <button className="bg-slate-400 w-full p-2 text-white cursor-pointer">Create Account</button>
                            </form>
                        </div>
                        <div className="w-full h-8 flex justify-center">
                            <h3>Already have an account? <span className="cursor-pointer underline font-bold" onClick={()=>toggleSignUp()}>Sign In</span></h3>
                        </div>
                    </div>
                    <div className=" bg-black w-2/4 h-full bg-cover bg-center bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/MLG_Columbus_-_Luminosity_vs_Navi.jpg/1200px-MLG_Columbus_-_Luminosity_vs_Navi.jpg)]">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterComponent