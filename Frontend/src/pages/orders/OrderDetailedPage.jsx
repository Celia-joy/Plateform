import {useNavigate, useParams} from "react-router-dom"
function OrderDetailedPage(){
    const navigate = useNavigate()
    const {id} = useParams()

    const orders = [
        {
            id: "1",
            name: "Tom Yummy",
            client: "Celia Joy's speciality",
            status: "New",
            amount: "$45.00",
            items : [
                {name: "Tom Yummy Drink", price: "$15.00", qty: 2},
                {name: "Side salad", price: "$8.00", qty: 1},
                {name: "Dessert special", price:"$7.00", qty: 1}
            ]
        },
        {
            id: "2",
            name:"Singapore Sing",
            client:"Cocktail that make people cry",
            status: "Delivered",
            amount: "$32.00",
            items: [
                {name: "Singapore Sing", price: "$20.00", qty: 1},
                {name: "Appetizer", price: "$12.00", qty: 1}
            ]
        }
    ]
    const order = order.find(o => o.id === id)
    if(!order){
        return (
            <div className="p-8 text-center">
                <p className="text-gray-400">Order not found</p>
                <button
                onClick={() => navigate("/dashboard/orders")}
                className="mt-4 bg-[#F5C518] px-6 py-2 rounded-lg font-bold text-sm">
                    Back to orders
                </button>
            </div>
        )
    }
    return (
        <div className="flex flex-col h-screen">
            <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button
                    onClick={()=> navigate("/dashboard/order")}
                    className="text-gray-400 hover:text-gray-600 font-bold text-xl">
                        ←
                    </button>
                    <h1 className="text-xl font-bold text-gray-900">Order #{id}</h1>
                </div>
                <div className="flex items-center gap-4">
                    <button
                    onClick={()=> navigate("/dashboard/notifications")}
                    className="text-xl relative">
                        🔔
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F5C518] rounded-full font-bold text-[#2D5016] flex items-center">
                            2
                        </span>
                    </button>
                    <button
                    onClick={()=> navigate("/dashboard/settings")}
                    className="w-8 h-8 bg-[#2D5016] rounded-full flex items-center justify-center text-white text-xs font-bold ">
                        J
                    </button>
                </div>
            </div>
            <div className="p-8 max-w-lg">
                <div className="bg-white border border-gray-100 rounded-xl p-6 mb-6">
                    <div className="text-xs text-gray-400 mb-1">{order.client}</div>
                    <div className="text-xl font-bold text-gray-900 mb-4">{order.name}</div>
                    <div>
                        <button className="bg-green-100 text-green-700 font-semibold px-4 py-2 rounded-lg text-sm">
                            ✓ Sign
                        </button>
                        <button className="bg-green-100 text-green-700 font-semibold px-4 py-2 rounded-lg text-sm">
                            ⏸ Stop
                        </button>
                        <button className="bg-red-100 text-red-700 font-semibold px-4 py-2 rounded-lg text-sm">
                            ✕ Cancel
                        </button>
                    </div>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl overflow-hidden mb-6">
                    <div className="grid grid-cols-3 px-6 py-3 border-b border-gray-100">
                        <span className="text-xs text-gray-400">Item</span>
                        <span className="text-xs text-gray-400 text-center">Qty</span>
                        <span className="text-xs text-gray-400 text-right">Price</span>
                    </div>
                    {order.items.map((item, i) => (
                        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden mb-6">
                            <div className="grid grid-cols-3 px-6 py-3 border-b border-gray-100">
                                <span className="text-sm font-semibold text-gray-900">{item.name}</span>
                                <span className="text-sm text-gray-500 text-center">{item.qty}</span>
                                <span className="text-sm text-gray-900 text-right">{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-white border border-gray-100 rounded-xl px-6 py-4 flex justify-between items-center">
                    <span className="font-bold text-gray-900">Total</span>
                    <span className="font-bold text-xl text-[#2D5016]">{order.amount}</span>
                </div>
            </div>
        </div>
    )

}
export default OrderDetailedPage