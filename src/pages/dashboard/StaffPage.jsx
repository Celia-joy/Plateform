import {useNavigate} from "react-router-dom"
function StaffPage(){
    const navigate = useNavigate()

    const staff = [
        {id: 1, name:"Celia Joy", role:"Head chef", status:"On shift", initials:"CJ", color:"bg-green-100 text-green-700"},
        {id: 2, name:"Bolice",  role:"Waiter", status:"On Shift", initials:"BD", color:"bg-blue-100 text-blue-700"},
        {id: 3, name:"Jean de Dieu", role:"Cashier", status:"Off today", initials:"JD", color:"bg-amber-100 text-amber-700"},
        {id: 4, name:"Ishya Achille", role:"Sous chef", status:"On Shift", initials:"IA", color:"bg-red-100 text-red-700"}
    ]    
    return (
        <div className="flex flex-col h-screen">
            <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-900">Staff</h1>
                <button className="bg-[#F5C518] text-[#2D5016] font-bold text-sm px-4 py-2 rounded-lg">
                    + Add a new client
                </button>
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => navigate("/dashboard/notifications")}
                        className="text-xl hover:opacity-70 transition-opacity relative"
                    >
                        🔔
                        <span className="absolute -top-1 -right-1 w-4 h-4 font-bold text-[#2D5016] flex items-center justify-center">
                            2
                        </span>
                    </button>
                    <div className="w-8 h-8 bg-[#2D5016] rounded-full flex items-center justify-center text-white text-xs font-bold">
                        J
                    </div>
                </div>
            </div>
            <div className="p-8">
                <div className="grid grid-cols-3 gap-4 mb-8 max-w-lg mx-auto">
                    <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-gray-900">12</div>
                        <div className="text-xs text-gray-400 mt-1">Total Staff</div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-gray-900">9</div>
                        <div className="text-xs text-gray-400 mt-1">On shift Today</div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-gray-900">3</div>
                        <div className="text-xs text-gray-400 mt-1">Off Toady</div>
                    </div>

                </div>
                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                    {staff.map((member) =>(
                        <div key={member.id} className="flex items-center justify-between px-6 py-4 border-b border-gray-50 last:border-b-0">
                            <div className="flex items-center gap-3">
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-cs font-bold ${member.color}`}>
                                    {member.initials}
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-900">{member.name}</div>
                                    <div className="text-xs text-gray-400">{member.role}</div>
                                </div>
                            </div>
                            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                member.status === "On Shift"
                                ? "bg-green-100 text-green-700"
                                : "bg-amber-100 text-amber-700"
                            }`}>
                                {member.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default StaffPage