


import { useNavigate } from "react-router-dom";
import { User, Stethoscope } from "lucide-react";

export default function UserTypeSelection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center transition-all duration-500">
        <h1 className="text-3xl sm:text-4xl font-bold text-violet-700 mb-10">
          Welcome to DigiCare
        </h1>

        <div className="space-y-5">
          <button
            onClick={() => navigate("/patient-registration")}
            className="w-full flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-5 rounded-xl transition-transform transform hover:scale-105 shadow-md text-lg"
          >
            <User className="w-5 h-5" />
            I am a Patient
          </button>

          <button
            onClick={() => navigate("/doctor-registration")}
            className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-5 rounded-xl transition-transform transform hover:scale-105 shadow-md text-lg"
          >
            <Stethoscope className="w-5 h-5" />
            I am a Doctor
          </button>
        </div>
      </div>
    </div>
  );
}

