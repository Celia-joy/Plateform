import { useState } from "react"
import {useNavigate} from "react-router-dom"

function MenusPage() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState("Drinks")

  const categories = ["Drinks", "Dessert", "Appetizer", "Main", "Starter"]

  const menuItems = [
    { id: 1, name: "Tom Yummy", sub: "Celia Joy's speciality", category: "Drinks", emoji: "🍹" },
    { id: 2, name: "Singapore Sing", sub: "Cocktail that make people cry", category: "Drinks", emoji: "🍸" },
    { id: 3, name: "Limonade parfaite", sub: "Lime lims", category: "Drinks", emoji: "🍋" },
    { id: 4, name: "Citrus Twist", sub: "Perfect for your body", category: "Drinks", emoji: "🍊" },
    { id: 5, name: "Tiramisu", sub: "Italian classic", category: "Dessert", emoji: "🍰" },
    { id: 6, name: "Burger", sub: "Main dish", category: "Main", emoji: "🍔" },
  ]

  const filteredItems = menuItems.filter(item => item.category === activeCategory)

  return (
    <div className="flex flex-col h-screen">


      <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Menu</h1>
        <button className="text-sm text-[#F5C518] font-semibold">View all →</button>
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
          <button 
                onClick ={()=>navigate("/dashboard/settings")}
                className="w-8 h-8 bg-[#2D5016] rounded-full flex items-center justify-center text-white text-xs font-bold">
                    J
          </button>
        </div>
      </div>

      <div className="p-8 flex gap-6">

        <div className="flex-1">


          <div className="flex gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                  activeCategory === cat
                    ? "bg-[#F5C518] text-[#2D5016]"
                    : "border border-gray-200 text-gray-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white border border-gray-100 rounded-xl px-5 py-4 mb-3 flex items-center gap-4">
              <span className="text-2xl">{item.emoji}</span>
              <div>
                <div className="text-xs text-gray-400">{item.sub}</div>
                <div className="text-sm font-semibold text-gray-900">{item.name}</div>
              </div>
            </div>
          ))}

          {filteredItems.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <div className="text-4xl mb-3">🍽️</div>
              <p className="text-sm">No items in this category yet</p>
            </div>
          )}

        </div>
        <div className="w-48 flex-shrink-0">
          <div 
          onClick={()=> navigate("/menus/new")}
          className="bg-[#F5C518] rounded-lg px-4 py-2 text-center text-xs font-bold text-[#2D5016] mb-4">
            + CREATE NEW MENU ITEM
          </div>
          <div className="flex flex-col gap-3">
            {categories.map((cat) => (
              <div key={cat} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full border-2 ${
                  activeCategory === cat
                    ? "bg-[#F5C518] border-[#F5C518]"
                    : "border-gray-300"
                }`}></div>
                <span className="text-sm text-gray-600">{cat}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default MenusPage