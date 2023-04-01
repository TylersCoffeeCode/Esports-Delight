import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import LoginComponent from "../components/LoginComponent"
import RegisterComponent from "../components/RegisterComponent"


const Account = () => {

    const initialState = {
        userName: '',
        email: '',
        password: '',
    }

    const [formValues, setFormValues] = useState(initialState)

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
    const [isSignUp, setIsSignUp] = useState(true)

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp)
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            let userData = formValues
            let response = await axios.post('http://localhost:3001/api/users/login', { userData })
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        {isSignUp ? <LoginComponent toggleSignUp={toggleSignUp}/> : <RegisterComponent toggleSignUp={toggleSignUp}/> }
        </>
    )
}
export default Account