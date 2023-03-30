import csVideo from '../assests/ESLytube.mp4'

const TournamentsPage = () => {
    return (
        <div className="bg-[#000000] w-full h-[100vh] flex flex-wrap items-start justify-center">
                <video className=' w-full h-full' src={csVideo} autoPlay muted>
                </video>
            <div className=" w-1/3 h-5/6 mt-[6rem] flex flex-wrap bg-[rgb(0,31,63)] items-start justify-center rounded-lg fixed">
                <div className="w-full h-8 text-2xl text-white flex justify-center mt-4">
                    <h1>Tournaments</h1>
                </div>
                <div className=" bg-[rgba(19,49,79,0.44)] w-[90%] h-5/6">

                </div>
            </div>
        </div>
    )
}
export default TournamentsPage