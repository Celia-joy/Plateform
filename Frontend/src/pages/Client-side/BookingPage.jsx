import {useState} from "react"
import {useNavigate, useParams} from "react-router-dom"

function BookingPage(){
    const navigate = useNavigate()
    const {restaurantSlug} = useParams()
    const [selectedTable, setSelectedTable]= useState(null)
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [guests, setGuests] = useState("")

    const restaurents = [
        {
            slug: "gia-coffee-shop",
            name: "Gia Coffee Shop",
            category: "CAFE",
            emoji: "☕",
            description: "A cozy coffee shop in the heart of the city"
        },
        {
            slug: "credo-hotel",
            name: "Credo Hotel",
            category: "HOTEL",
            emoji: "🏨",
            description: "Luxury dining experience at Credo Hotel"
        },
        {
            slug:"capuccino-cafe",
            name:"Capuccino Cafe",
            category: "CAFE",
            emoji: "🍵",
            description: "The best capuccino in town"
        }
    ]

    const restaurent = restaurents.find(r => r.slug === restaurantSlug)

    const tables = [
        {id: 1, seats: 2, status: "Free"},
        {id: 2, seats: 4, status: "Occupied"},
        {id: 3, seats: 4, status: "Free"},
        {id: 4, seats: 6, status: "Reserved"},
        {id: 5, seats: 2, status: "Free"},
        {id: 6, seats: 8, status: "Free"}
    ]

    const tableStyles = {
        free: "bg-green-50 border-green-300 text-green-700 cursor-pointer hover:bg-green-100",
        occupied: "bg-red-50 border-red-300 text-red-700 cursor-not-allowed opacity-60",
        reserved: "bg-amber-50 border-amber-300 text-amber-700 cursor-not-allowed opacity-60"
    }

    function handleBooking(){
        if(!name || !date || !guests || !selectedTable){
            console.log("Please fill all fields and select a table")
            return
        }
        navigate("/booking-confirmed")
    }
    if(!restaurent){
        return (
            <div className="min-h-screen bg-[#2D5016] flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl p-8 text-center max-w-sm w-full">
                    <div className="text-5xl mb-4">🍽️</div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                            Restaurent not found
                    </h2>
                    <p className="text-sm text-gray-400">
                        The restaurant you're looking for doesn't exist on Plateform
                    </p>
                </div>
            </div>
        )
    }
    return (
        <div className="min-h-screen bg-[#FAFAF8]">
            <div className="bg-[#2D5016] px-8 py-6"> 
                <div className="text-2xl font-bold text-white">
                    <h1 className="text-2xl font-bold text-white">
                        Plate<span className="text-[#F5C518]">Form</span>
                    </h1>
                </div>
            </div>
            <div className="bg-white border-b border-gray-100 px-8 py-6">
                <div className="max-w-2xl mx-auto flex items-center gap-4">
                    <div className="text-5xl">{restaurent.emoji}</div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">{restaurent.name}</h2>
                        <p className="text-sm text-gray-400 mt-1">{restaurent.description}</p>
                        <span className="text-xs font-semibold bg-gray-100 text-gray-500 px-3 py-1 rounded-full mt-2 inline-block">
                            {restaurent.category}
                        </span>
                    </div>
                </div>
            </div>
            <div className="max-w-2xl mx-auto px-8 py-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Pick your table
                </h3>
                <div className="flex gap-6 mb-4">

                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-green-200 border border-green-400"></div>
                        <span className="text-xs text-gray-500">Reserved</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-red-200 border border-red-400"></div>
                        <span className="text-xs text-gray-500">Occupied</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-amber-200 border border-amber-400"></div>
                        <span className="text-xs text-gray-500">Reserved</span>
                    </div>

                </div>
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {tables.map((table) =>(
                        <div
                        key={table.id}
                        onClick={()=>{
                            if(table.status === "free") setSelectedTable(table)
                        }}
                        className={`border-2 rounded-xl p-4 text-center transition-all ${tableStyles[table.status]}${
                            selectedTable?.id === table.id
                            ? "ring-2 ring-[#F5C518] ring-offset-2"
                            :""
                        }`}>
                            <div className="text-lg font-bold">T{table.id}</div>
                            <div className="text-xs mt-1">{table.seats} seats</div>
                        </div>
                    ))}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Your details
                </h3>
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                        Full Name
                    </label>
                    <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4">
                        <span className="mr-2">👤</span>
                        <input
                        type="text"
                        placeholder="Your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="flex-1 outline-none text-sm bg-transparent" 
                        />
                    </div>

                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                        Date & Time
                    </label>
                    <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4">
                        <span className="mr-2">📅</span>
                        <input
                        type="datetime-local"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="flex-1 outline-none text-sm bg-transparent" 
                        />
                    </div>

                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                        Number of guests
                    </label>
                    <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4">
                        <span className="mr-2">👥</span>
                        <input
                        type="number"
                        placeholder="How many guests?"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="flex-1 outline-none text-sm bg-transparent" 
                        />
                    </div>

                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                        Selected table
                    </label>
                    <div className={`flex items-center border rounded-xl px-3 py-2 mb-6 ${
                        selectedTable ? "border-green-300 bg-green-50" : "border-gray-200"
                    }`}>
                        <span className="mr-2">🪑</span>
                        <span className="text-sm text-gray-500">
                            {selectedTable
                            ? `Table T${selectedTable.id} - ${selectedTable.seats} seats`
                            :" Select a table above first"}
                        </span>
                    </div>
                    <button
                    onClick={handleBooking}
                    className="w-full bg-[#F5C518] text-[#2D5016] font-bold py-3 rounded-xl text-sm">
                        Confirm booking
                    </button>
                </div>
            </div>
        </div>
    )

}
export default BookingPage