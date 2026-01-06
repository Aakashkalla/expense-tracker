
export default function Home() {
  return (
    <>
    {/* Navbar */}
    <nav className="flex justify-between items-center mt-5 max-w-6xl mx-auto px-6">
    {/* Logo/Name Div */}
    <div className="ml-10 font-bold font-poppins">Budget Guardian</div>
    {/* Signup/login Div */}
    <div className="flex gap-4 mr-2">
      <button className="cursor-pointer rounded-md px-4 py-2 font-poppins">
      Login
      </button>
      <button className="bg-sky-400 px-4 py-2 text-white cursor-pointer rounded-md font-poppins hover:bg-sky-500">Signup</button>
    </div>
    </nav>

    {/* Hero Section */}
    <main className="flex flex-col items-center justify-center mt-24 gap-4 font-poppins text-center px-6">
      <div className="text-5xl font-semibold text-center">Take Control of Your Spending</div>
      <div><p className="max-w-xl text-center text-gray-600">Track your expenses,set your monthly budget, and know where you stand at a glance</p></div>
      <button className="bg-sky-400 px-4 py-2 text-white cursor-pointer rounded-md font-poppins hover:bg-sky-500">Get Started</button>
    </main>

    </>
  );
}
