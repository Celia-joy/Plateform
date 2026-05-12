import {useNavigate} from 'react-router-dom'


function LandingPage(){
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-[#2e5c2e] flex flex-col items-center">
            <div className="w-full max-w-4xl px-10 pt-10">
                <h1 className="text-4xl font-bold text-white text-center mb-8">
                    Plate<span className="text-[#d4a017]">Form</span>
                </h1>
                <h2 className="text-xl font-bold text-white mb-2">
                    Register your restaurant on Plateform
                </h2>
                <p className="text-[#c8e6c8] text-sm italic mb-8">
                    for free and get more revenue!
                </p>
                <div className="flex justify-between gap-3 mb-12">
                    <button
                        onClick={() => navigate("/signup")}
                        className="border border-[#b8922a] text-[#e8c84a] px-6 py-2 text-sm hover:bg-[#d4a017] hover:text-[#1a3a1a] transition-colors"
                    >
                        Register your restaurent
                    </button>
                    <button
                        onClick={() => navigate("/login")}
                        className="border border-[#b8922a] text-[#e8c84a] px-6 py-2 text-sm hover:bg-[#d4a017] hover:text-[#1a3a1a] transition-colors"
                    >
                        Restaurent already registered? Sign in
                    </button>    
                </div>
            </div>
            <div className="w-full max-w-2xl bg-[#111] px-8 py-10">
                <h3 className="text-3xl font-bold text-white text-center tracking-widest mb-8">
                    How it works
                </h3>
                <div className="flex gap-4 justify-center">
                    <div className="flex-1 max-w-[170px] bg-[#e8e4de] rounded p-5 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-150 cursor-pointer">
                        <span className="text-4xl mb-3">🧑‍💼</span>
                        <p className="font-bold text-[#d4a017]">Step 1</p>
                        <p className="text-xs text-[#444] leading-relaxed">Register your restaurent</p>
                    </div>
                    <div className="flex-1 max-w-[170px] bg-[#e8e4de] rounded p-5 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-150 cursor-pointer">
                        <span className="text-4xl mb-3">🍽️</span>
                        <p className="font-bold text-[#d4a017]">Step 2</p>
                        <p className="text-xs text-[#444] leading-relaxed">Create your own restaurent menu and restaurent profile</p>
                    </div>
                    <div className="flex-1 max-w-[170px] bg-[#e8e4de] rounded p-5 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-150 cursor-pointer">
                        <span className="text-4xl mb-3">📋</span>
                        <p className="font-bold text-[#d4a017]">Step 3</p>
                        <p className="text-xs text-[#444] leading-relaxed">Start receiving orders</p>
                    </div>
                </div>
            </div>
        </div>
    )



}

export default LandingPage