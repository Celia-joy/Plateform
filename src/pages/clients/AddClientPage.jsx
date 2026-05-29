import {useState} from "react"
import {useNavigate} from "react-router-dom"
function AddClientPage(){
    const navigate = useNavigate()
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [category, setCategory] = useState("")
    const [chefId, setChefId] = useState("")
    const [phone, setPhone] = useState("")
    const [representative, setRepresentative] = useState("")
    const [address, setAddress] = useState("")
    const [dateOfCreation, setDateOfCreation] = useState("")
    const [iban, setIban] = useState("")
    function handleSave(){
        if(!fullName || !email || !category){
            console.log("Please fill all requires fields")
            return
        }
        console.log("Client saved!", {fullName, email, category})
        navigate("/dashboard/clients")
    }
    return (
        <div className="flex flex-col h-screen">
            <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
                <h1>Add a New Client</h1>
                <div className="flex items-center gap-4">
                    <button
                    onClick={() => navigate("/dashboard/notifications")}
                    className="text-xl relative">
                         🔔                              
                    </button>
                </div>
            </div>

        </div>
    )
}
