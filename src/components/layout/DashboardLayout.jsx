import {Outlet, useNavigate} from "react-router-dom"

function DashboardLayout(){
    const navigate = useNavigate();
    return (
        <div className="flex min-h-screen">
            <div className="w-20 bg-[#2D5016] flex flex-col items-center py-6 gap-2 fixed h-full">
                <div className="text-center mb-6">
                    <span className="text-white font-bold text-xs">Plate</span>
                    <span className="text-[#F5C518] font-bold text-xs">Form</span>
                </div>

                <button
                  onClick={()=> navigate("/dashboard")}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                🏠   
                </button>
                <button
                  onClick={()=> navigate("/dashboard/clients")}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                 👥 
                </button>
                <button
                  onClick={()=> navigate("/dashboard/menus")}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                 📋 
                </button>
                <button
                  onClick={()=> navigate("/dashboard/orders")}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                 📦
                </button>
                <button
                  onClick={()=> navigate("/dashboard/tables")}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                🪑
                </button>
                <button
                  onClick={()=> navigate("/dashboard/staff")}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                 👤
                </button>
                <div className="mt-auto flex flex-col gap-2">
                    <button
                    onClick={()=>navigate("/dashboard/settings")}
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl hover:bg-white hover:bg-opacity-10 transition-colors"
                    >
                    ⚙️
                    </button>
                    <button
                    onClick={()=>navigate("/dashboard/account")}
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl hover:bg-white hover:bg-opacity-10 transition-colors"
                    >
                    👤
                    </button>
                </div>
            </div>
            <div className="ml-20 flex-1 bg-[#FAFAF8]">
                <Outlet />
            </div>
        </div>
    )
}
export default DashboardLayout