import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"


const LoginComponent = ({toggleSignUp, setUser}) => {

    const initialState = {
        userName: '',
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
            let response = await axios.post('http://localhost:3001/api/users/login', { userData })
            console.log(response);
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user_id', response.data.user.id)
            setUser(userData)
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className="bg-[#000000] w-full h-[100vh] flex flex-wrap items-center justify-center">
            <div className="bg-white w-3/4 h-4/5 flex justify-end mt-8">
                <div className="bg-white w-2/4 h-full flex flex-wrap items-center">
                    <div className="w-4/5 h-8 flex ml-2">
                        <h1 className="text-xl">Gamer's Delight</h1>
                    </div>
                    <div className="w-full h-3/4 flex flex-wrap justify-center content-center">
                        <h1 className="w-full text-center text-3xl">Welcome Back!</h1>
                        <h2 className="w-full text-center">Your gateway into E-sports</h2>
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
                            <button className="bg-slate-400 w-full p-2 text-white cursor-pointer">Sign In</button>
                        </form>
                    </div>
                    <div className="w-full h-8 flex justify-center">
                        <h3>Don't have an account? <span className="cursor-pointer underline font-bold" onClick={()=>toggleSignUp()}>Sign up</span></h3>
                    </div>
                </div>
                <div className=" bg-black w-2/4 h-full bg-cover bg-center bg-[url(https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com//var/app/current/web/app/uploads/2020/05/48581371966_876a4f4054_k.jpg)]">

                </div>
            </div>
        </div>
    )
}
export default LoginComponent