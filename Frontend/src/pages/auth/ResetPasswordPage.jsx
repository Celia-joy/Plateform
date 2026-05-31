import {useState} from "react"
import { useNavigate } from "react-router-dom";

function ResetPasswordPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    function handleReset(){
        if(!email){
            console.log("Please enter your email")
            return
        }
        navigate("/link-sent")
    }
    return (
        <div className="min-h-screen bg-[#2D5016] flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-white rounded-3xl overflow-hidden">
                <div className="bg-[#2D5016] px-8 pt-10 pb-8 text-center">
                    <h1 className="text-2xl font-bold text-white">
                        Plate<span className="text-[#F5C518]">Form</span>
                    </h1>
                    <h2 className="text-2xl font-bold mb-4">Reset password</h2>

                    <p className="text-gray-600 mb-8">
                        Enter your email and we'll send you a reset link        
                    </p>
                </div>
                <div className="bg-[#FAFAF8] px-7 py-8">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Email</label>
                    <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                        <span className="text-gray-300 mr-2">✉️</span>
                        <input
                            type="email"
                            placeholder="yourname@gmail.com"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            className="flex-1 outline-none text-sm bg-transparent"
                        />
                    </div>
                    <button
                        onClick={handleReset}
                        className="w-full bg-[#F5C518] font-bold py-3 rounded-xl text-sm cursor-pointer mb-6">
                        Send reset link
                    </button>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span>--------------- or ---------------</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>
                    <button
                       onClick={() => navigate("/login")}
                       className="w-full text-sm text-gray-500 text-center hover:text-[#2D5016]"
                       >
                         ← Back to login
                    </button>
                </div>
            </div>
        </div>
        
    )
};

export default ResetPasswordPage;