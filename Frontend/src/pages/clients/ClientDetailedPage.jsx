import {useNavigate} from "react-router-dom"
function ClientDetailedPage(){
    const navigate = useNavigate()
    const {id} = useParams()

    const clients = [
        {
            id: "1", name: "E BIS", category: "RESTO", email: "ebis@gmail.com",
            phone: "+250 788 000 001", representative: "Jean Paul",
            address: "KG 12 Ave, Kigali", sales: "$1000", updatedAt: "1d ago",
            orders: [
                {id: "01", name: "Tom Yummy", status: "Delivered", amount: "$45"},
                {id: "02", name: "Citrus Twist", status:"New", amount:"$20"}
            ]
        },
        {
            id: "2", name: "CREDO", category: "HOTEL", email: "credo@gmail.com",
            phone: "+250 788 002", representative: "Amina K",
            address: "KN 5 Rd, Kigali", sales: "$100000", updatedAt:"1h ago",
            orders: [
                {id: "03", name: "Singapore Sing", status: "Delivered", amount: "$32"},
            ]
        },
    ]

    const client = clients.find(c => c.id === id)
    if(!client) {
        return (
            <div className="p-8 text-center">
                <p className="text-gray-400">Client not found</p>
                <button
                onClick={()=> navigate("/dashboard/clients")}
                className="mt-4 bg-[#F5C518] px-6 py-2 rounded-lg font-bold text-sm">
                    Back to clients
                </button>
            </div>
        )
    }

    return (
        <div className="flex flex-col h-screen">
            <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button
                    onClick={()=> navigate("/dashboard/clients")}
                    className="text-gray-400 hover:text-gray-600 font-bold text-xl">
                        ←
                    </button>
                    <h1 className="text-xl font-bold text-gray-900">{client.name}</h1>
                </div>
                <div className="flex items-center gap-4">
                    <button
                    onClick={()=> navigate("/dashboard/notifications")}
                    className="text-xl relative"
                    >
                        🔔
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F5C518] rounded-full text-xs font-bold text-[#2D5016] flex items-center justify-center">
                            2
                        </span>                        
                    </button>
                    <button className="w-8 h-8 bg-[#2D5016] rounded-full flex items-center justify-center text-white text-xs font-bold">
                        J
                    </button>
                </div>
            </div>
            <div className="p-8 max-w-2xl">
                <div className="bg-white border border-gray-100 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-full bg-[#2D5016] flex items-center justify-center text-white text-xl font-bold">
                            {client.name[0]}
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">{client.name}</h2>
                                <span className="text-xs font-semibold bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
                                    {client.category}
                                </span>
                            </div>
                            <div className="ml-auto text-right">
                                <div className="text-2xl font-bold text-[#2D5016]">{client.sales}</div>
                                <div className="text-xs text-gray-400">Total sales</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">

                            <div>
                                <div className="text-xs text-gray-400 mb-1">Email</div>
                                <div className="text-sm font-semibold text-gray-900">{client.email}</div>
                            </div>

                            <div>
                                <div className="text-xs text-gray-400 mb-1">Phone</div>
                                <div className="text-sm font-semibold text-gray-900">{client.phone}</div>
                            </div>

                            <div>
                                <div className="text-xs text-gray-400 mb-1">Representative</div>
                                <div className="text-sm font-semibold text-gray-900">{client.representative}</div>
                            </div>

                            <div>
                                <div className="text-xs text-gray-400 mb-1">Address</div>
                                <div className="text-sm font-semibold text-gray-900">{client.address}</div>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">
                        Recent Orders
                    </h3>
                    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
                        {clients.orders.map((order) => (
                            <div
                            key={order.id}
                            onClick={()=> navigate(`/dashboard/orders/${order.id}`)}
                            className="flex items-center justify-between px-6 py-4 border-b border-gray-50 last:border b-0 hover:bg-gray-50 cursor-pointer">
                                <div>
                                    <div className="text-sm font-semibold text-gray-900">{order.name}</div>
                                    <div className="text-xs text-gray-400">Order #{order.id}</div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-bold text-gray-900">{order.amount}</span>
                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                    order.status === "Delivered"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-amber-100 text-amber-700"
                                    }`}>
                                        {order.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )

}
export default ClientDetailedPage