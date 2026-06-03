import {useNavigate} from "react-router-dom"

function BookingConfirmedPage(){
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-[#2D5016] flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-white rounded-3xl overflow-hidden">
                <div className="bg-[#2D5016] px-8 pt-10 pb-8 text-center">
                    <h1 className="text-2xl font-bold text-white">
                        Plate<span className="text-[#F5C518]">Form</span>
                    </h1>
                </div>
                <div className="px-8 py-10 flex flex-col items-center text-center">
                    <div className="bg-green-50 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                        <span className="text-4xl">✅</span>
                    </div>
                    <h2 className="text-2xl font-bold text-green-600 mb-3">
                        Booking confirmed!
                    </h2>
                    <div className="bg-green-50 rounded-xl px-6 py-3 mb-4 w-full">
                        <div className="text-xs text-gray-400 mb-1">Booking ID</div>
                        <div className="text-lg font-bold text-gray-900">#Booking001</div>
                    </div>
                    <p className="text-sm text-gray-400 mb-8">
                        Your table has been reserved successfully.
                        You'll receive a confirmation shortly
                    </p>
                    <button
                    onClick={() => navigate(-1)}
                    className="w-ful bg-[#F5C518] text-[#2D5016] font-bold py-3 rounded-xl text-sm mb-3">
                        Back to restaurant
                    </button>
                    <button
                    onClick={()=> navigate("/")}
                    className="w-full border border-gray-200 text-gray-500 font-semibold py-3 rounded-xl text-sm">
                        Go to homepage
                    </button>
                </div>
            </div>
        </div>
    )
}
export default BookingConfirmedPage