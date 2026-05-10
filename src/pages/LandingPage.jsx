import {useNavigate} from "react-router-dom"
function LandingPage(){
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-[#2D5016] flex flex-col items-center px-8 py-12">
            <h1 className="text-3xl font-bold text-white mt-10">
                Plate<span className="text-[#F5C518]">Form</span>
            </h1>
            <h2 className="text-2xl font-bold text-white text-center mt-8 leading-snug">
                Register your restaurant on Plateform
            </h2>
            <p className="text-white text-sm text-center mt-2 opacity-70">
                for free and get more revenue

            </p>
            <button
                onClick={() => navigate("/signup")}
                className="bg-[#E8D89A] text-[#2D5016] px-6 py-3 rounded-lg font-semibold mt-8 w-full max-w-xs"
            >
                Register your restaurent
            </button>
            <button
                onClick={() => navigate("/login")}
                className="bg-[#F5C518] text-[#2D5016] px-6 py-2 rounded-lg font-semibold mt-3 w-full max-w-xs"
            >
                Restaurant already registered? Sign in
            </button>
            <div className="bg-black bg-opacity-40 rounded-2xl mt-12 p-6 w-full max-w-xs">
                <h3 className="text-white font-bold text-lg text-center mb-6">
                    How it works
                </h3>
                <div className="flex justify-between gap-2">
                    <div>
                        <span className="text-3xl">🍽️</span>
                        <p className="text-[#F5C518] font-bold text-sm mt-2"> Step 1</p>
                        <p className="text-white text-xs mt-1">Register your restaurent</p>
                    </div>
                    <div>
                        <span className="text-3xl">📋</span>
                        <p className="text-[#F5C518] font-bold text-sm mt-2"> Step 2</p>
                        <p className="text-white text-xs mt-1">Create your menu and profile</p>
                    </div>
                    <div>
                        <span className="text-3xl">📦</span>
                        <p className="text-[#F5C518] font-bold text-sm mt-2"> Step 3</p>
                        <p className="text-white text-xs mt-1">Start receiving orders</p>
                    </div>

                </div>

            </div>

        </div>
        
    )
}
export default LandingPage