import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function OrdersPage() {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("New")
    const orders = [
        {id:1, name:"Tom Yummy", sub:"Celia Joy's speciality", status:"New"},
        {id:2, name:"Singapore Sing", sub:"Cocktail that makes people cry", status:"Delivered"},
        {id:3, name:"Limonade parfaite", sub:"Lime lims", status:"Rejected"},
        {id:4, name:"Citrus Twist", sub:"Perfect for your body", status:"New"}
    ]
    const tabs = ["New", "Delivered", "Rejected", "All"]
    const filteredOrders = activeTab === "All"?orders:orders.filter(order => order.status === activeTab)
    return (
        <div className="flex flex-col h-screen">
            <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-900">Orders</h1>
                <button className="text-sm text-[#F5C518] font-semibold">
                    View trends →
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
            <div className="p-8 flex gap-6">
                <div className="flex-1">
                    <div className="flex gap-2 mb-6">
                        {tabs.map((tab) => (
                            <button
                             key={tab}
                             onClick={() => setActiveTab(tab)}
                             className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                                activeTab === tab
                                ? "bg-[#F5C518] text-[#2D5016]"
                                :"border border-gray-200 text-gray-500"
                             }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    {filteredOrders.map((order) => (
                        <div key={order.id} className="bg-white border border-gray-100 rounded-xl px-5 py-4 mb-3 flex items-center justify-between">
                            <div>
                                <div className="text-xs text-gray-400 mb-1">Order #{order.id} . {order.sub}</div>
                                <div className="text-sm font-semibold text-gray-900">{order.name}</div>
                            </div>
                            <span
                            className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                order.status === "New" ? "bg-green-100 text-green-700" : 
                                order.status === "Delivered" ? "bg-blue-100 text-blue-700":
                                "bg-red-100 text-red-700"
                            }`}>
                            {order.status}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="w-36 flex flex-col gap-3">
                    <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold- text-green-600">6</div>
                        <div className="text-xs text-gray-400 mt-1">Delivered</div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold- text-amber-600">12</div>
                        <div className="text-xs text-gray-400 mt-1">Waiting</div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold- text-red-500">1</div>
                        <div className="text-xs text-gray-400 mt-1">Rejected</div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold- text-gray-100">30</div>
                        <div className="text-xs text-gray-400 mt-1">All</div>
                    </div>              
                </div>
            </div>            
        </div>
    )
}

export default OrdersPage