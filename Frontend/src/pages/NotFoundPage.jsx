import {useNavigate} from "react-router-dom"
function NotFoundPage(){
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <div className="bg-[#2D5016] px-8 py-4">
                <h1 className="text-xl font-bold text-white">
                    Plate<span className="text-[#F5C518]">Form</span>
                </h1>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
                <div className="text-8xl font-bold text-[#F5C518] mb-4">404</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Page not found
                </h2>
                <p className="text-sm text-gray-400 mb-8 max-w-xs">
                    Looks like this page went off menu
                    Let's get you back to the kitchen
                </p>
                <button
                onClick={()=> navigate("/dashboard")}
                className="text-sm text-gray-500 text-center hover:text-[#2D5016]">
                     ← Back to dashboard
                </button>
            </div>
        </div>
    )
}
export default NotFoundPage