import {useNavigate} from 'react-router-dom'
function OverviewPage() {
  const navigate = useNavigate()
  const clients = [
    {name:"E BIS", sales:"$1000", category:"RESTO", updatedAt:"Updated 1d ago"},
    {name:"CREDO", sales:"$10000", category:"HOTEL", updatedAt:"Updated 1h ago"},
    {name:"CAPUCCINO", sales:"$500", category:"CAFE", updatedAt:"Updated 2h ago"},
    {name:"CHINESE", sales:"$10000", category:"RESTO", updatedAt:"Updated 23h ago"},
    {name:"GIA", sales:"$5000", category:"CAFE", updatedAt:"Updated 1w ago"}
  ]
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Overview</h1>
        <button className="bg-[#F5C518] text-[#2D5016] font-bold text-sm px-4 py-2 rounded-lg">
          + Add a new client
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
      <div className="p-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">All Clients</h2>
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-4 px-6 py-3 border-b border-gray-100">
            <span className="text-xs text-gray-400">Client details</span>
            <span className="text-xs text-gray-400">Sales</span>
            <span className="text-xs text-gray-400">Detailed report</span>
            <span className="text-xs text-gray-400">Category</span>
          </div>
          {clients.map((client, i) => (
            <div key={i} className="grid grid-cols-4 px-6 py-4 border-b border-gray-50 items-center">
              <div>
                <div className="text-sm font-semibold text-gray-900">{client.name}</div>
                <div className="text-xs text-gray-400">{client.updatedAt}</div>
              </div>
              <div className="text-sm text-gray-900">{client.sales}</div>
              <div className="text-lg">😊</div>
              <div className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-md inline-block">
                {client.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OverviewPage