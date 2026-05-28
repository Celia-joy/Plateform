import {useNavigate} from "react-router-dom"
function OrderConfirmedPage(){
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
                        Order confirmed!
                    </h2>
                    <div className="bg-green-50 rounded-xl px-6 py-3 mb-4">
                        <div className="text-xs text-gray-400">Order ID</div>
                        <div className="text-lg font-bold text-gray-900">#Order15</div>
                    </div>
                    <p className="text-sm text-gray-400 mb-8">
                        The order has been confirmed and the client has been notified
                    </p>
                    <button
                    onClick={()=> navigate("/dashboard/table-booking")}
                    className="w-full bg-[#F5C518] font-bold py-3 rounded-xl text-sm">
                        Back to orders
                    </button>
                </div>
            </div>
        </div>
    )
}
export default OrderConfirmedPage