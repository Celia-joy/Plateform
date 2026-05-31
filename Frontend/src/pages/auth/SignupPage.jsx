import {useState} from "react"
import {useNavigate} from 'react-router-dom'

function SignupPage(){
    const [fullName, setFullName] = useState("")
    const[email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()
    function handleSignup(){
        if(!fullName || !email || !password || !confirmPassword){
            console.log("Please fill all fields")
            return
        }
        if(password !== confirmPassword){
            console.log("Password do not match")
            return
        }
        navigate("/check-email")
        console.log("Full name:", fullName)
        console.log("Email:", email)
        console.log("Password:", password)
        console.log("Confirm password:", confirmPassword)
    }

    return (
        <div className="min-h-screen bg-[#2D5016] flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-white rounded-3xl overflow-hidden">
                <div className="bg-[#2D5016] px-8 pt-10 pb-8 text-center">
                    <h1 className="text-2xl font-bold text-center mb-6">Plate 
                        <span className="text-[#F5C518]">Form</span>
                    </h1>
                    <p className="text-sm text-white mt-1"> Create an account</p>
                </div>
                <div className="bg-[#FAFAF8] px-7 py-8">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Full name</label>
                    <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                        <span className="text-gray-300 mr-2">👤</span>
                        <input
                            type="text"
                            placeholder="Full name"
                            value={fullName}
                            onChange={(e)=>setFullName(e.target.value)}
                            className="flex-1 outline-none text-sm bg-transparent"
                        />
                    </div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Email</label>
                    <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                        <span className="text-gray-300 mr-2">✉️</span>
                        <input 
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            className="flex-1 outline-none text-sm bg-transparent"
                        />
                    </div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Password</label>
                    <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                        <span className="text-gray-300 mr-2">🔒</span>
                        <input 
                            type="password"
                            placeholder="........."
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            className="flex-1 outline-none text-sm bg-transparent"
                        />
                    </div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Confirm password</label>
                    <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                        <span className="text-gray-300 mr-2">🔒</span>
                        <input 
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                            className="flex-1 outline-none text-sm bg-transparent"
                            
                        />
                    </div>
                    <button 
                        onClick={handleSignup}
                        className="w-full bg-[#F5C518] font-bold py-3 rounded-xl text-sm cursor-pointer mb-4">
                        SignUp
                    </button>
                    <div className="flex-items-center gap-3 mb-4">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span>--------------- or sign up with ---------------</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>
                    <div className="flex gap-3 mb-6">
                        <button className="flex-1 bg-white border border-gray-200 rounded-xl py-2 text-xs font-medium text-gray-500 flex items-center justify-center gap-2">
                            <span>🌐</span>
                            <span>Google</span>
                        </button>
                        <button className="flex-1 bg-white border border-gray-200 rounded-xl py-2 text-xs font-medium text-gray-500 flex items-center justify-center gap-2">
                            <span>🍎</span>
                            <span>Apple</span>
                        </button>
                    </div>
                    <p className="text-center text-xs text-gray-400"> Already have an account?{" "}
                        <button 
                            onClick={() => navigate('/login')}
                            className="text-[#F5C518] font-semibold">
                            Sign In
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignupPage 