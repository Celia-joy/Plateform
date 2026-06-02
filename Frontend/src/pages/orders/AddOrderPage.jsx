import {useState} from "react";
import {useNavigate} from "react-router-dom";

function AddOrderPage(){
    const navigate = useNavigate()
    const [selectedCategory, setSelectedCategory] = useState("");

    const categories = ["Dessert", "Main", "Drink", "Starter", "Appetizer"];

    const recentOrders = [
        {id: 5, name:"Tom Yummy", sub:"Celia Joy's speciality"},
        {id: 6, name:"Singapore", sub:"Cocktail that make people cry"},
        {id: 7, name:"Limonade parfaite", sub:"Lime lims"},
        {id: 8, name:"Citrus Twist", sub:"Perfect for your body "}
    ]
    function handleCreateOrder(){
        if(!selectedCategory){
            console.log("Please select category")
            return
        }
        console.log("Order created!", selectedCategory)
        navigate("/dashboard/orders")
    }
    return (
        <div className="flex flex-col h-screen">
            <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button
                    onClick={()=> navigate("/dashboard/orders")}
                    className="text-gray-400 hover:text-gray-600 font-bold text-xl"
                    >
                        ←
                    </button>
                    <h1 className="text-xl font-bold text-gray-900">Add Order</h1>
                </div>
                <div className="flex items-center gap-4">
                    <button 
                    onClick={() => navigate("/dashboard/notifications")}
                    className="text-xl relativee">
                        🔔
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F5C518] rounded-full text-xs font-bold text-[#2D5016] flex items-center justify-center">
                        2
                        </span>
                    </button>
                    <button
                    onClick={()=>navigate("/dashboard/settings")}
                    className="w-8 h-8 bg-[#2D5016] rounded-full flex items-center justify-center text-white text-xs font-bold">
                        J
                    </button>                   
                </div>
            </div>
            <div className="p-8 flex gap-6">
                <div className="flex-1">
                    <h2 className="text-sm font-bold text-gray-700 mb-4">Recent Orders</h2>
                    {recentOrders.map((order) =>(
                        <div 
                        key={order.id}
                        className="bg-white border border-gray-100 rounded-xl px-5 py-4 mb-3 flex items-center justify-between">
                            <div>
                                <div className="text-xs text-gray-400 mb-1">Order #{order.id} . {order.sub}</div>
                                <div className="text-sm font-semibold text-gray-900">{order.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-52 flex-shrink">
                    <h2 className="text-sm font-bold text-gray-700 mb-4">ADD ORDER</h2>
                    <button
                    onClick={handleCreateOrder}
                    className="w-full bg-[#F5C518] text-[#2D5016] font-bold py-2 rounded-lg text-xs mb-6">
                        + CREATE NEW ORDER
                    </button>

                    <div className="flex flex-col gap-3">
                        {categories.map((cat)=>(
                            <div
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className="flex items-center justify-between cursor-pointer">
                                <div className="flex items-center gap-2">
                                    <div className={`w-4 h-4 rounded-full border-2 ${
                                        selectedCategory === cat
                                        ? "bg-[#F5C518] border-[#F5C518]"
                                        : "border-gray-300"
                                    }`}></div>
                                    <span className="text-sm text-gray-600">{cat}</span>
                                </div>
                                <span className="text-xs font-bold bg-[#F5C518] text-[#2D5016] px-2 py-0.5 rounded-md">
                                    NEW
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddOrderPage