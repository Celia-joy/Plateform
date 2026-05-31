function NotificationsPage(){
    const notifications = [
        {
            id:1,
            title: "New order received",
            sub:"Order #Order16 from Tom Yummy",
            time:"2 min ago",
            read: false,
            color:"bg-[#F5C518]"
        },
        {
            id:2,
            title: "Payment confirmed",
            sub:"$500 from CREDO HOTEL",
            time:"1 hour ago",
            read: false,
            color:"bg-[#2D5016]"
        },
        {
            id:3,
            title: "Order #Order14 was delivered successfully",
            sub:"",
            time:"Yesterday",
            read: true,
            color:"bg-[#2D5016]"
        },
        {
            id:4,
            title: "New order received",
            sub:"New client GIA added to your list",
            time:"2 days ago",
            read: true,
            color:"bg-gray-300"
        }

    ]
    return (
        <div className="flex flex-col h-screen">
            <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-900">Notifications</h1>
                <button className="text-sm text-[#F5C518] font-semibold">
                    Mark all as read
                </button>
            </div>
            <div className="p-8 max-w-2xl">
                {notifications.map((notif)=>(
                    <div
                    key={notif.id}
                    className={`bg-white border border-gray-100 rounded-xl px-6 py-4 mb-3 flex items-start gap-4 ${
                        notif.read ? "opacity" : ""
                    }`}
                    >
                        <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${notif.color}`}></div>
                        <div className="flex-1">
                            <div className={`text-sm ${notif.read ? "text-gray-400 font-normal" : "text-gray-900 font-semibold"}`}>
                                {notif.title}
                            </div>
                            {notif.sub && (
                                <div className="text-xs text-gray-400 mt-1">{notif.sub}</div>
                            )}
                            <div className="text-xs text-gray-400 mt-1">{notif.time}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}
export default NotificationsPage