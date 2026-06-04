import {useState} from "react"
import {useNavigate} from "react-router-dom"

function RestaurantSetupPage(){
    const navigate = useNavigate()
    const[step, setStep] = useState("")

    const [restaurantName, setRestaurantName] = useState("")
    const [category, setCategory] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    const [logoUrl, setLogoUrl] = useState("")
    const [coverUrl, setCoverUrl] = useState("")

    const [dishName, setDishName] = useState("")
    const [dishPrice, setDishPrice] = useState("")
    const [dishCategory, setDishCategory] = useState("Main")

    const dishCategories = ["Main", "Starter", "Dessert", "Drinks", "Appetizer"]
    function handleNext(){
        if(step === 1 && (!restaurantName || !category)){
            console.log("Please fill required fields")
            return 
        }
        setStep(step + 1)
    }

    function handleFinish (){
        console.log("Setup complete!", {restaurantName, category, phone, address})
        navigate("/dashboard")
    }

    return (
        <div className="min-h-screen bg-[#2D5016] flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-white rounded-3xl overflow-hidden">
                <div className="bg-[#2D5016] px-8 pt-10 pb-8 text-center">
                    <h1 className="text-2xl font-bold text-white">
                        Plate<span className="text-[#F5C518]">Form</span>
                    </h1>
                    <p className="text-sm text-white opacity-60 mt-1">
                        Set up your restaurent
                    </p>
                </div>
                <div className="flex items-center justify-center gap-2 pt-6 px-8">
                    {[1, 2, 3].map((s)=>(
                        <div key={s} className="flex items-center gap-2">
                            <div className={`w-7 h-7 rounded-full flex items-center justify-cente text-xs font-bold ${
                                step === s
                                ? "bg-[#F5C518] text-[#2D5016]"
                                : step > s
                                ? "bg-[#2D5016] text-white"
                                : "bg-gray-100 text-gray-400"
                            }`}>
                                {step > s ? "✓" : s}
                            </div>
                            {s < 3 && (
                                <div className={`w-8 h-px ${step > s ? "bg-[#2D5016]" : "bg-gray-200"}`}></div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="px-7 py-6">
                    {step === 1 && (
                        <div>
                            <h2 className="text-base font-bold text-gray-900 mb-1">
                                Restaurent profile
                            </h2>
                            <p className="text-xs text-gray-400 mb-5">
                                Tell us about your restaurent
                            </p>

                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                                Restaurent name *
                            </label>
                            <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                                <span className="mr-2">🍽️</span>
                                <input
                                    type="text"
                                    placeholder="e.g Gia Coffee Shop"
                                    value={restaurantName}
                                    onChange={(e) => setRestaurantName(e.target.value)}
                                    className="flex-1 outline-none text-sm bg-transparent"
                                />
                            </div>

                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                                Category *
                            </label>
                            <div className="flex items-center border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                                <span className="mr-2">🏷️</span>
                                <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="flex-1 outline-none text-sm bg-transparent">
                                    <option value="">Choose category</option>
                                    <option value="RESTO">Restaurant</option>
                                    <option value="HOTEL">Hotel</option>
                                    <option value="CAFE">Cafe</option>
                                    <option value="PUB">Pub</option>
                                </select>
                            </div>

                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                                Phone
                            </label>
                            <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                                <span className="mr-2">📞</span>
                                <input
                                    type="tel"
                                    placeholder="+250 788 000 000"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="flex-1 outline-none text-sm bg-transparent"
                                />
                            </div>

                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                                Address
                            </label>
                            <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                                <span className="mr-2">📍</span>
                                <input
                                    type="text"
                                    placeholder="Street, City"
                                    value={address}
                                    onChange={(e) =>setAddress(e.target.value)}
                                    className="flex-1 outline-none text-sm bg-transparent"
                                />
                            </div>                            
                        </div>
                    )}
                    {step === 2 && (
                        <div>
                            <h2 className="text-base font-bold text-gray-900 mb-1">
                                Restaurant image
                            </h2>
                            <p className="text-xs text-gray-400 mb-5">
                                Add a logo and cover photo
                            </p>
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                                Logo URL
                            </label>
                            <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                                <span className="mr-2">🖼️</span>
                                <input
                                type="text"
                                placeholder="https://..."
                                value={logoUrl}
                                onChange={(e) => setLogoUrl(e.target.value)}
                                className="flex-1 outline-none text-sm bg-transparent"
                                />
                            </div>
                            {logoUrl ? (
                                <img
                                src={logoUrl}
                                alt="Logo preview"
                                className="w-20 h-20 rounded-full object-cover mb-4 border border-gray-200"
                                />
                            ):(
                                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-3xl mb-4">
                                    🍽️
                                </div>
                            )}
                            <label className="text-xs  font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                                Cover image URL
                            </label>
                            <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                                <span className="mr-2">🖼️</span>
                                <input
                                type="text"
                                placeholder="https://..."
                                value={logoUrl}
                                onChange={(e) => setLogoUrl(e.target.value)}
                                className="flex-1 outline-none text-sm bg-transparent"
                                />
                            </div>
                            {coverUrl ? (
                                <img
                                src={coverUrl}
                                alt="Cover preview"
                                className="w-full h-24 rounded-xl object-cover mb-4 border border-gray-200"
                                />
                            ):(
                                <div className="w-full h-24 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm mb-4">
                                    Cover image preview
                                </div>
                            )}
                        </div>
                    )}
                    {
                        step === 3 && (
                            <div>
                                <h2 className="text-base font-bold text-gray-900 mb-1">
                                    Create your menu
                                </h2>
                                <p className="text-xs text-gray-400 mb-5">
                                    Add your first dish to get started
                                </p>
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                                    Dish name
                                </label>
                                <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                                    <span className="mr-2">🍴</span>
                                    <input 
                                        type="text"
                                        placeholder="e.g Tom Yummy"
                                        value={dishName}
                                        onChange={(e) => setDishName(e.target.value)}
                                        className="flex-1 outline-none text-sm bg-transparent"
                                    />
                                </div>

                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                                    Price
                                </label>
                                <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                                    <span className="mr-2">💵</span>
                                    <input 
                                        type="number"
                                        placeholder="0.00"
                                        value={dishPrice}
                                        onChange={(e) => setDishPrice(e.target.value)}
                                        className="flex-1 outline-none text-sm bg-transparent"
                                    />
                                </div>
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking wide mb-2 block">
                                    Category
                                </label>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {dishCategories.map((cat) => (
                                        <button
                                        key={cat}
                                        onClick={()=> setDishCategory(cat)}
                                        className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                                            dishCategory === cat
                                            ? "bg-[#F5C518] text-[#2D5016]"
                                            : "border border-gray-200 text-gray-500"
                                        }`}>
                                            {cat}
                                        </button>
                                    ))}
                                </div>                                
                            </div>
                        )
                    }

                    <div className="flex gap-3">
                        {step > 1 && (
                            <button
                            onClick={() => setStep(step - 1)}
                            className="flex-1 border border-gray-200 text-gray-500 font-semibold py-3 rounded-xl text-sm">
                                 ← Back
                            </button>
                        )}
                        {step < 3 ?(
                            <button
                            onClick={handleNext}
                            className="flex-1 bg-[#F5C518] text-[#2D5016] font-bold py-3 rounded-xl text-sm">
                                Next →
                            </button>

                        ):(
                            <button
                            onClick={handleFinish}
                            classNamae="flex-1 bg-[#2D5016] text-white font-bold py-3 rounded-xl text-sm">
                                Finish setup 🎉
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantSetupPage