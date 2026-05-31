import {useState} from "react"
import {useNavigate} from "react-router-dom"
function AddClientPage(){
    const navigate = useNavigate()
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [category, setCategory] = useState("")
    const [chefId, setChefId] = useState("")
    const [phone, setPhone] = useState("")
    const [representative, setRepresentative] = useState("")
    const [address, setAddress] = useState("")
    const [dateOfCreation, setDateOfCreation] = useState("")
    const [iban, setIban] = useState("")
    function handleSave(){
        if(!fullName || !email || !category){
            console.log("Please fill all requires fields")
            return
        }
        console.log("Client saved!", {fullName, email, category})
        navigate("/dashboard/clients")
    }
    return (
        <div className="flex flex-col h-screen">
            <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
                <h1>Add a New Client</h1>
                <div className="flex items-center gap-4">
                    <button
                    onClick={() => navigate("/dashboard/notifications")}
                    className="text-xl relative">
                        🔔 
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F5C518] rounded-full text-xs font-bold text-[#2D5016] flex items-center justify-center">
                            2
                        </span>
                    </button>
                    <button 
                    onClick={()=> navigate("/dashboard/settings")}
                    className="w-8 h-8 bg-[#2D5016] rounded-full flex items-center justify-center text-white text-xs font-bold"> 
                        J
                    </button>
                </div>
            </div>
            <div className="p-8 overflow-y-auto max-w-lg">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Full Name</label>
                <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                    <span className="mr-2">👤</span>
                    <input 
                    type="text"
                    placeholder="e.g Gia coffee shop"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="flex-1 outline-none text-sm bg-transparent"
                    />
                </div>

                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Email</label>
                <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                    <span className="mr-2">✉️</span>
                    <input 
                    type="email"
                    placeholder="client@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 outline-none text-sm bg-transparent"
                    />
                </div>

                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Category</label>
                <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                    <span className="mr-2">🏷️</span>
                    <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="flex-1 outline-none text-sm bg-transparent">
                        <option value="">Choose Category</option>
                        <option value="RESTO">Restaurant</option>
                        <option value="HOTEL">HOTEL</option>
                        <option value="CAFE">CAFE</option>
                        <option value="PUB">PUB</option>
                    </select>     
                </div>
                <div className="flex gap-3 mb-4">
                    <div className="flex-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Chef ID</label>
                        <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                            <span className="mr-2">👨‍🍳</span>
                            <input 
                            type="text"
                            placeholder="ID..."
                            value={chefId} onChangeCapture={(e) => setPhone(e.target.value)}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 outline-none text-sm bg-transparent"
                            />
                        </div>

                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Phone</label>
                        <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                            <span className="mr-2">📞</span>
                            <input 
                            type="tel"
                            placeholder="client@gmail.com"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="flex-1 outline-none text-sm bg-transparent"
                            />
                        </div>

                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Representative</label>
                        <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                            <span className="mr-2">🧑‍💼</span>
                            <input 
                            type="text"
                            placeholder="Full name of representative"
                            value={representative} 
                            onChange={(e) => setRepresentative(e.target.value)}
                            className="flex-1 outline-none text-sm bg-transparent"
                            />
                        </div>

                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Address</label>
                        <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                            <span className="mr-2">📍</span>
                            <input 
                            type="text"
                            placeholder="Street, City"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="flex-1 outline-none text-sm bg-transparent"
                            />
                        </div>

                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Date of creation</label>
                        <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                            <span className="mr-2">📅</span>
                            <input 
                            type="text"
                            placeholder="date"
                            value={dateOfCreation} 
                            onChange={(e) => setDateOfCreation(e.target.value)}
                            className="flex-1 outline-none text-sm bg-transparent"
                            />
                        </div>

                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Bank account (IBAN)</label>
                        <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                            <span className="mr-2">🏦</span>
                            <input 
                            type="text"
                            placeholder="IBAN number"
                            value={iban}
                            onChange={(e) => setIban(e.target.value)}
                            className="flex-1 outline-none text-sm bg-transparent"
                            />
                        </div>

                        <button
                        onClick={handleSave}
                        className="w-full bg-[#F5C518] text-[#2D5016] font-bold py-3 rounded-xl text-sm ">
                            Save Client
                        </button>                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddClientPage
