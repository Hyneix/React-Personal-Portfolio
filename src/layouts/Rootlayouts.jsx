import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 pb-28 font-sans text-neutral-900 lg:flex lg:items-center lg:justify-center lg:p-10">
      <div className="mx-auto flex w-full max-w-[1400px] gap-5 lg:h-[min(calc(100vh-5rem),780px)]">

        <div className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-3xl bg-[#04b4e0] shadow-2xl lg:flex-row">
          <Sidebar />

          <main className="-mt-6 min-w-0 flex-1 overflow-y-auto rounded-3xl bg-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mt-0 lg:-ml-10">
            <Outlet />
          </main>
        </div>

        <Navbar />
      </div>
    </div>
  );
}

export default RootLayout;