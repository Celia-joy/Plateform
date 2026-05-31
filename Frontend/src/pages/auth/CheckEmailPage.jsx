import { useNavigate } from "react-router-dom"

function CheckEmailPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#2D5016] flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl overflow-hidden">

        <div className="bg-[#2D5016] px-8 pt-10 pb-8 text-center">
          <h1 className="text-2xl font-bold text-white">
            Plate<span className="text-[#F5C518]">Form</span>
          </h1>
        </div>

        <div className="px-8 py-10 flex flex-col items-center text-center">

          <div className="bg-yellow-50 rounded-full w-20 h-20 flex items-center justify-center mb-6">
            <span className="text-4xl">✉️</span>
          </div>

          <h2 className="text-2xl font-bold mb-4">Check your email</h2>

          <p className="text-gray-600 mb-8">
            We've sent a verification link to <br />
            <span className="font-semibold">yourname@gmail.com</span>
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full bg-[#F5C518] font-bold py-3 rounded-xl text-sm cursor-pointer mb-4"
          >
            Verify my email
          </button>

          <p className="text-gray-400 text-xs mb-1">Didn't receive it?</p>
          <button className="text-[#F5C518] text-xs font-semibold">
            Resend email
          </button>

        </div>      
      </div>
    </div>
  )
}

export default CheckEmailPage