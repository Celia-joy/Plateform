import {useState} from "react"
import {useNavigate} from "react-router-dom"
function SettingsPage(){
    const navigate = useNavigate()
    const [restaurentName, setRestaurentName] = useState("")
    const [ownerName, setOwnerName] = useState("")
    const [email, setEmail] = useState("")
    const [bio, setBio] = useState("")
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    function handleSave(){
        console.log("Saving changes ...")
    }
    function handleLogout(){
        navigate("/login")
    }
    return(
        <div className="flex flex-col h-screen">
            <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-900">Settings</h1>
                <div className="flex items-center gap-4">
                    <button
                    onClick={()=>navigate("/dashboard/notifications")}
                    className="text-xl relative">
                         🔔
                        <span className="absolute -top-1 -right-1 w-4 h-4 text-xs font-bold text-[#2D5016] flex items-center justify-center">
                            2
                        </span>
                    </button>
                    <button
                        onClick ={()=>navigate("/dashboard/settings")}
                        className="w-8 h-8 bg-[#2D5016] rounded-full flex items-center justify-center text-white text-xs font-bold">
                        J
                    </button>
                </div>
            </div>
            <div className="p-8 max-w-lg">
                <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">
                    Profile
                </h2>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                    Restaurent name
                </label>
                <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                    <input 
                    type="text"
                    placeholder="Owner name"
                    value={restaurentName}
                    onChange={(e) => setRestaurentName(e.target.value)}
                    className="flex-1 outline-none text-sm bg-transparent"
                    />
                </div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                    Owner name
                </label>
                <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                    <input 
                    type="text"
                    placeholder="Owner name"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    className="flex-1 outline-none text-sm bg-transparent"
                    />
                </div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                    Email
                </label>
                <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                    <input 
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 outline-none text-sm bg-transparent"
                    />
                </div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                    Bio
                </label>
                <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                    <input 
                    type="text"
                    placeholder="Short bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="flex-1 outline-none text-sm bg-transparent"
                    />
                </div>
                <button
                onClick={handleSave}
                className="bg-[#F5C518] text-[#2D5016] font-bold px-8 py-3 rounded-xl text-sm mb-8">
                    Save changes
                </button>
                <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">
                    Password
                </h2>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                    Current password
                </label>
                <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                    <input 
                    type="password"
                    placeholder="......."
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="flex-1 outline-none text-sm bg-transparent"
                    />
                </div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                    New password
                </label>
                <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                    <input 
                    type="password"
                    placeholder="......."
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="flex-1 outline-none text-sm bg-transparent"
                    />
                </div>
                <h2 className="text-sm font-bold text-red-500 uppercase tracking-wide mb-4">
                    Danger zone
                </h2>
                <button
                onClick={handleLogout}
                className="w-full bg-red-100 text-red-500 font-bold py-3 rounded-xl text-sm hover:bg-red-200 transition-colors">
                    Log out
                </button>
            </div>
        </div>
    )

}
export default SettingsPage