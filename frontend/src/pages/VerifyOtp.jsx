import { useState } from "react";
import { useLocation } from "react-router-dom";


export default function VerifyOtp() {
    const location = useLocation();
    const [email, setEmail] = useState(location.state?.email || "");
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleVerify = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const res = await fetch("http://localhost:3000/api/auth/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otp }),
            });

            const data = await res.json();
            setMessage(data.message);

            if (res.ok) {
                setTimeout(() => {
                    window.location.href = "/login";
                }, 2000);
            }
        } catch (err) {
            console.error(err);
            setMessage("Internal Server Error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="card w-full max-w-md shadow-2xl bg-base-100 p-6">
                <h2 className="text-2xl font-bold text-center mb-4">Check your email to get verification code</h2>

                <form onSubmit={handleVerify} className="space-y-4">
                    <div className="form-control flex flex-col gap-1">
                        <label className="label">
                            <span className="label-text">Verification code</span>
                        </label>
                        <input  
                            type="text"
                            placeholder="It must be 6 digits"
                            className="input input-bordered"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
                    >
                        Xác thực
                    </button>
                </form>

                {message && (
                    <div className="alert alert-info mt-4">
                        <span>{message}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
