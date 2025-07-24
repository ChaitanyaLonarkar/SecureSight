import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard, Cctv , MonitorCog, TriangleAlert, UsersRound, ChevronDown } from "lucide-react";
export default function Navbar() {
  return (
    <nav className="w-full text-white px-[20px] py-[22px] flex items-center justify-between  border-b-2 border-gray-800 bg-[#080808]">
      <div className="text-xl font-bold tracking-tight">
        <Image
          src="/logo.png"
          alt="Logo"
          width={140} 
          height={100} 
          className="inline-block"
        ></Image>
      </div>
      <div className="flex gap-10 justify-center font-semibold text-[13px] tracking-tight">
        <Link href="#" className="hover:text-gray-300 flex items-center gap-1.5 active:text-gray-800" >
            <LayoutDashboard size={17} color="yellow" />
          Dashboard
        </Link>
        <Link href="#" className="hover:text-gray-300 flex items-center gap-1.5">
        <Cctv size={17} />
          Cameras
        </Link>
        <Link href="#" className="hover:text-gray-300 flex items-center gap-1.5">
        <MonitorCog size={17} />
          Scene
        </Link>
        <Link href="#" className="hover:text-gray-300 flex items-center gap-1.5">
        <TriangleAlert size={17} />
          Incidents
        </Link>
        <Link href="#" className="hover:text-gray-300 flex items-center gap-1.5">
        <UsersRound size={17} />
          Users
        </Link>
      </div>
      <div className="profile flex items-center gap-1">
        <div>
          <Image
            src="/profile.png"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="ml-2 flex flex-col ">
          <span className="text-sm font-semibold">Mohammed Ajhas</span>
          <span className="text-xs ">ajhas@mandlac.com</span>
        </div>
        <button >
          <ChevronDown size={17} />
        </button>
      </div>
      <div className="absolute top-0 right-1/3 bg-yellow-400 w-[600px] h-[40px] blur-[129px]">
      </div>
    </nav>
  );
}
