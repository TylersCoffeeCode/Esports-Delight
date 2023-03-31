


const Account = () => {


    return (
        <div className="bg-[#000000] w-full h-[100vh] flex flex-wrap items-center justify-center">
            <div className="bg-white w-3/4 h-4/5 flex justify-end mt-8">
                <div className="bg-white w-2/4 h-full flex flex-wrap items-center">
                    <div className=" w-4/5 h-8 flex ml-2">
                        <h1 className=" text-xl">Gamer's Delight</h1>
                    </div>
                    <div className="w-full h-3/4 flex flex-wrap justify-center content-center">
                        <h1 className="w-full text-center text-3xl">Welcome Back!</h1>
                        <h2 className="w-full text-center">Your gateway into E-sports</h2>
                        <form className="w-1/2 flex flex-wrap mt-4">
                            <label htmlFor="Email" className=" w-full text-lg">Email</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter email"
                                required
                                className="w-full mb-6 p-2 border-2 border-gray-400"
                            />
                            <label htmlFor="Password" className=" w-full text-lg">Password</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Enter email"
                                required
                                className="w-full mb-8 p-2 border-2 border-gray-400"
                            />
                            <button className=" bg-slate-400 w-full p-2 text-white">Sign In</button>
                        </form>
                    </div>
                    <div className="w-full h-8 flex justify-center">
                        <h3>Don't have an account? <span className=" cursor-pointer underline font-bold">Sign Up</span></h3>
                    </div>
                </div>
                <div className=" bg-black w-2/4 h-full bg-cover bg-center bg-[url(https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com//var/app/current/web/app/uploads/2020/05/48581371966_876a4f4054_k.jpg)]">

                </div>
            </div>
        </div>
    )
}
export default Account