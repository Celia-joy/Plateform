import { useState } from "react"
import { useNavigate } from "react-router-dom"

function CreateMenuItemPage() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState("Main")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")

  const categories = ["Main", "Starter", "Appetizer", "Dessert", "Side"]

  function handleCreate() {
    if (!name || !price || !description) {
      console.log("Please fill all fields")
      return
    }
    console.log("Menu item created!", { name, price, description, activeCategory })
    navigate("/dashboard/menus")
  }

  return (
    <div className="flex flex-col h-screen">

      <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Create Menu Item</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/dashboard/notifications")}
            className="text-xl relative"
          >
            🔔
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F5C518] rounded-full text-xs font-bold text-[#2D5016] flex items-center justify-center">
              2
            </span>
          </button>
          <div className="w-8 h-8 bg-[#2D5016] rounded-full flex items-center justify-center text-white text-xs font-bold">
            J
          </div>
        </div>
      </div>

      <div className="p-8 flex gap-8 max-w-2xl">
        <div className="w-40 flex-shrink-0">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-[#F5C518] flex items-center justify-center text-xs font-bold text-[#2D5016] flex-shrink-0 mt-0.5">1</div>
              <div>
                <div className="text-xs font-semibold text-gray-900">Create your restaurant profile</div>
              </div>
            </div>
            <div className="flex items-start gap-2 opacity-40">
              <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
              <div>
                <div className="text-xs font-semibold text-gray-900">Restaurant Type & Image</div>
              </div>
            </div>
            <div className="flex items-start gap-2 opacity-40">
              <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
              <div>
                <div className="text-xs font-semibold text-gray-900">Create your menu</div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-2xl">🫑 🍴</div>
        </div>

        <div className="flex-1">
          <div className="flex gap-2 mb-6 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                  activeCategory === cat
                    ? "bg-[#F5C518] text-[#2D5016]"
                    : "border border-gray-200 text-gray-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Name</label>
          <div className="border-b border-gray-200 mb-4">
            <input type="text" placeholder="Dish name"
              value={name} onChange={(e) => setName(e.target.value)}
              className="w-full outline-none text-sm py-2 bg-transparent" />
          </div>

          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Price</label>
          <div className="border-b border-gray-200 mb-4">
            <input type="number" placeholder="Price"
              value={price} onChange={(e) => setPrice(e.target.value)}
              className="w-full outline-none text-sm py-2 bg-transparent" />
          </div>

          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Menu description</label>
          <div className="border-b border-gray-200 mb-4">
            <input type="text" placeholder="Ingredients..."
              value={description} onChange={(e) => setDescription(e.target.value)}
              className="w-full outline-none text-sm py-2 bg-transparent" />
          </div>

          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Image</label>
          <div className="border-b border-gray-200 mb-8">
            <input type="text" placeholder="Image URL"
              value={image} onChange={(e) => setImage(e.target.value)}
              className="w-full outline-none text-sm py-2 bg-transparent" />
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/dashboard/menus")}
              className="border border-gray-200 text-gray-500 font-semibold px-6 py-2 rounded-lg text-sm"
            >
              View menu
            </button>
            <button
              onClick={handleCreate}
              className="w-10 h-10 bg-[#F5C518] rounded-full flex items-center justify-center text-xl font-bold text-[#2D5016]"
            >
              +
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CreateMenuItemPage