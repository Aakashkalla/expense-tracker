export default function Signup() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="w-full max-w-sm border rounded-lg p-6">
                <h1 className="text-2xl font-semibold mb-4">Create an account</h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border rounded-md px-3 py-2 mb-3"
                    />

                <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-md px-3 py-2 mb-4"
                    />

                <button className="w-full bg-sky-400 text-white py-2 rounded-md hover:bg-sky-500">
                Sign up
                </button>

                <p className="text-sm text-center text-gray-500 mt-4">
                Already have an account?{" "}
                <a href="/login" className="text-sky-500">
                Log in
                </a>
                </p>
            </div>
        </div>
  );
}

