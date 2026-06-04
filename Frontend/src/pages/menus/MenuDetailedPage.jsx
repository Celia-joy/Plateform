import {useNavigate, useParams} from "react-router-dom"

function MenuDetailedPage(){
    const navigate = useNavigate()
    const {id} = useParams()

    const menuItems = [
        {
            id: "1", name:"Tom Yummy", category: "Drinks", price: "$15.00",
            emoji: "🍹", deescription: "Celia Joy's speciality",
            ingredients: "Tomato juice, lime, ginger, tobasco, salt",
            prepTime: "5 min", calories: "120kcal"
        },
        {
            id: "2", name:"Singapore Sing", category: "Drinks", price: "$20.00",
            emoji: "🍸", description: "Cocktail that make people cry",
            ingredients: "Gin, cherry brandy, pinneaple juice, lime",
            prepTime: "8min", calories: "180 kcal" 
        },
        {
            id: "3", name:"Limonade parfaite", category: "Drinks", price: "$8.00",
            emoji:"🍋", description:"Lime lims",
            ingredients:"Fresh lemon, mint, sugar, sparkling water",
            prepTime: "3min", calories:"90 kcal"
        },

        {
            id:"5", name: "Tiramisu", category: "Dessert", price: "$12.00",
            emoji: "🍰", description: "Italic classic",
            ingredients: "Mascarpone, espresso, ladyfingers,cocoa powder",
            prepTime: "20 min", calories: "350 kcal"
        },

        {
            id: "6", name:"Burger", category: "Main", price: "$18.00",
            emoji:"🍔", description: "Main dish",
            ingredients: "Beef party, lettuce, tomato, cheese, brioche bun",
            prepTime:"20 min", calories:"650 kcal"
        }
    ]
    const item = menuItems.find(m => m.id === id)
    if(!item){
        return (
            <div className="p-8 text-center">
                <p className="text-gray-400">Menu item not found</p>
                <button
                onClick={() => navigate("/dashboard/menus")}
                className=" mt-4 bg-[#F5C518] px-6 py-2 rounded-lg font-bold text-sm">
                    Back to menu
                </button>
            </div>
        )
    }
    return (
        <div className="flex flex-cols h-screen">
            <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button
                    onClick={() =>navigate("/dashboard/menus")}
                    className="text-gray-400 hover:text-gray-600 font-bols text-xl">
                        ←
                    </button>
                    <h1 className="text-xl font-bold text-gray-900">{item.name}</h1>
                </div>
                <div className="flex items-center gap-4">
                    <button
                    onClick={()=> navigate("/dashboard/notifications")}
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
            <div className="bg-white border border-gray-100 rounded-xl p-8 mb-6 text-center">
                <div className="text-7xl mb-4">{item.emoji}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{item.name}</h2>
                <p className="text-sm text-gray-400 mb-4">{item.description}</p>
                <div className="flex items-center justify-center gap-3">
                    <span className="text-2xl font-bold text-[#2D5016]">{item.price}</span>
                    <span className="text-xs font-semibold bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
                        {item.category}
                    </span>
                </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-6 mb-6">
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">
                    Details
                </h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="text-lg">⏱️</div>
                        <div className="text-sm font-bold text-gray-900 mt-1">{item.prepTime}</div>
                        <div className="text-xs text-gray-400">Prep Time</div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="text-lg">🔥</div>
                        <div className="text-sm font-bold text-gray-900 mt-1">{item.calories}</div>
                        <div className="text-xs text-gray-400">Calories</div>
                    </div>

                    <div className="text-xs text-gray-400 uppercase tracking-wide mb-2">Ingredients</div>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.ingredients}</p>
                </div>
                <div>
                    <button
                    onClick={() => navigate(`/dashboard/menus/edit/${item.id}`)}
                    className="flex-1 bg-[#F5C518] text-[#2D5016] font-bold py-3 rounded-xl text-sm">
                        Edit item
                    </button>
                    <button
                    className="flex-1 bg-red-100 text-red-500 font-bold py-3 rounded-xl text-sm">
                        Delete item
                    </button>
                </div>
            </div>
        </div>
    )
}
export default MenuDetailedPage