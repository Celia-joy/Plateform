import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
function TableBookingPage(){
    const navigate = useNavigate()
    const [selectedTable, setSelectedTable] = useState(null)
    const [clientName, setClientName] = useState("")
    const [date, setDate] = useState("")
    const [guests, setGuests] = useState("")

    const tables = [
        {id: 1, seats: 4, status: "free" },
        {id: 2, seats: 2, status: "occupied" },
        {id: 3, seats: 6, status: "free" },
        {id: 4, seats: 4, status: "reserved" },
        {id: 5, seats: 2, status: "occupied" },
        {id: 6, seats: 8, status: "free" },
        {id: 7, seats: 4, status: "free" },
        {id: 8, seats: 6, status: "reserved" },
        {id: 9, seats: 4, status: "free" }
    ]
    const tableStyles ={
        free:"bg-green-50 border-green-300 text-green-700 hover:bg-green-100 cursor-pointer",
        occupied:"bg-red-50 border-red-300 text-red-700 cursor-not-allowed opacity-70",
        reserved:"bg-amber-50 border-amber-300 text-amber cursor-not-allowed opacity-70"
    }
    function handleConfirmBooking(){
        if(!clientName || !date || !guests || !selectedTable){
            console.log("Please fill all fields and select a table ")
            return
        }
        console.log("Booking confirmed!", {clientName, date, guests, table:selectedTable})
        navigate("/dashboard/order-confirmed")
    }
    
    return (
        <div className="flex flex-col h-screen">
            <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-900">Table Booking</h1>
                <div className="flex items-center gap-4">
                    <button
                    onClick={() => navigate("dashboard/notifications")}
                    className="text-xl hover:opacity-70 transition-opacity relative">
                        🔔
                        <span className="absolute -top-1 -right-1 w-4 h-4 font-bold text-[#2D5016] flex items-center justify-center">
                            2
                        </span>
                    </button>
                    <div className="w-8 h-8 bg-[#2D5016] rounded-full flex items-center justify-center text-white text-xs font-bold">
                        J
                    </div>
                    <button className="bg-[#F5C518] text-[#2D5016] font-bold text-sm px-4 py-2 rounded-lg">
                        + New booking
                    </button>
                </div>
            </div>
            <div className="p-8 flex gap-6">
                <div className="flex-1">
                    <div className="flex gap-6 mb-6">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded bg-green-200 border border-green-400"></div>
                            <span className="text-xs text-gray-500">Free</span>
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
                        {tables.map((table)=>(
                            <div
                            key={table.id}
                            onClick={() =>{
                                if(table.status === "free") setSelectedTable(table)
                            }}
                            className={`border-2 rounded-xl p-4 text-center transition-all ${tableStyles[table.status]} ${
                                selectedTable?.id === table.id
                                ? "ring-2 ring-[#F5C518] ring-offset-2"
                                : ""

                            }`}>
                                <div className="text-lg font-bold">T{table.id}</div>
                                <div className="text-xs mt-1">{table.seats}seats</div>
                                <div className="text-xs mt-1 capitalize">{table.status}</div>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-3 gap-4 max-w-sm">
                        <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-green-600">
                                {tables.filter(t => t.status === "free").length}
                            </div>
                            <div className="text-xs text-gray-400 mt-1">Free tables</div>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-red-500">
                                {tables.filter(t => t.status === "occupied").length}
                            </div>
                            <div className="text-xs text-gray-400 mt-1">Occupied</div>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-amber-500">
                                {tables.filter(t => t.status === "reserved").length}
                            </div>
                            <div className="text-xs text-gray-400 mt-1">Reserved</div>
                        </div>                       
                    </div>
                </div>
                <div className="w-64 flex-shrink-0 bg-white border border-gray-100 rounded-xl p-6">
                    <h2 className="text-sm font-bold text-gray-900 mb-1">Book a table</h2>
                    <p className="text-xs text-gray-400 mb-4">Fill in reservation details</p>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                        Client name
                    </label>
                    <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                        <span className="mr-2">👤</span>
                        <input
                            type="text"
                            placeholder="Full name" 
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            className="flex-1 outline-none text-sm bg-transparent"
                        />
                    </div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                        Date & time
                    </label>
                    <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                        <span className="mr-2">📅</span>
                        <input
                            type="datetime-local"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="flex-1 outline-none text-sm bg-transparent"
                        />
                    </div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                        Guests
                    </label>
                    <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-4 bg-white">
                        <span className="mr-2">👤</span>
                        <input
                            type="number"
                            placeholder="Number of guests" 
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="flex-1 outline-none text-sm bg-transparent"
                        />
                    </div>  
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                        Table
                    </label>
                    <div className={`flex items-center border rounded-xl px-3 py-2 mb-6 ${
                        selectedTable ? "border-green-300 bg-green-50" : "border-gray-200"
                    }`}>
                        <span className="mr-2">🪑</span>
                        <span className="text-sm text-gray-500">
                            {selectedTable
                            ? `T${selectedTable.id} — ${selectedTable.seats} seats`
                            : "Select a table from grid"}
                        </span>
                    </div>
                    <button
                    onClick={handleConfirmBooking}
                    className="w-full bg-[#F5C518] text-[#2D5016] font-bold py-3 rounded-xl text-sm">
                        Confirm booking
                    </button>          
                </div>
            </div>
        </div>
    )

}
export default TableBookingPage