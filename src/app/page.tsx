import Image from "next/image";
import Navbar from "./component/Navbar";
import DashboardPage from "./dashboard/page";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <DashboardPage/>
    </div>
  );
}
