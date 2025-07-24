import {
  TriangleAlert,
  DoorOpen,
  Plus,
  UserRoundSearch,
  CheckCheck,
  Cctv,
  Clock,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
export default function VideoSection() {
  return (
    <>
      <div className=" flex gap-4  ">
        <div className="video-controll w-[57%] ">
          <video controls className="w-full ">
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="video-incidents w-[43%] h-full rounded bg-[#121212] relative p-5">
          <div className="w-full  flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="bg-red-900 rounded-full p-1.5 ">
                <TriangleAlert color="red" size={15} />
              </span>
              <h1 className="text-white  font-semibold">
                15 Unresolved Incidents
              </h1>
            </div>
            <div className="btns flex  ">
              <button className="bg-red-900 rounded-full p-1.5 ">
                <DoorOpen color="red" size={15} />
              </button>
              <button className="bg-pink-900 rounded-full p-1.5 ">
                <Plus color="pink" size={15} />
              </button>
              <button className="bg-blue-900 rounded-full p-1.5 ">
                <UserRoundSearch color="lightblue" size={15} />
              </button>
              <div className="flex justify-center items-center border-2 border-slate-600 rounded-full px-2 gap-1   ">
                <CheckCheck color="lightgreen" size={18} />
                <span className="text-[12px]">4 resolved incidents</span>
              </div>
            </div>
          </div>
          <div className="incidents-list mt-4 flex flex-col gap-3">
            <div className=" flex justify-between ">
              <div className="flex gap-2 items-center">
                <div className="thumbnail bg-amber-100 w-[135px] h-[78px] rounded-md">
                  {/* <Image
                                    src="/profile.png"
                                    alt="Profile"
                                    width={40}
                                    height={40}
                                    className="rounded-md"
                                  /> */}
                </div>
                <div className="desc">
                  <p className="text-[12px] font-bold mb-3 flex gap-1 items-center">
                    <span>
                      <DoorOpen size={16} color="orange" />
                    </span>
                    Unauthorized Access
                  </p>
                  <p className="text-[10px] flex gap-1 mb-1">
                    <span>
                      <Cctv size={14} />
                    </span>
                    Shop Floor Camera A
                  </p>
                  <p className="text-[11px] font-semibold flex gap-1">
                    <span>
                      <Clock size={14} />
                    </span>
                    14:35-14:37 on 7-Jul-2025
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center w-[100px]">
                <button className="text-yellow-300 text-[12px] font-bold flex items-center gap-2.5">
                  Resolve <ChevronRight size={15} />
                </button>
              </div>
            </div>
            <div className=" flex justify-between ">
              <div className="flex gap-2 items-center">
                <div className="thumbnail bg-amber-100 w-[135px] h-[78px] rounded-md">
                  {/* <Image
                                    src="/profile.png"
                                    alt="Profile"
                                    width={40}
                                    height={40}
                                    className="rounded-md"
                                  /> */}
                </div>
                <div className="desc">
                  <p className="text-[12px] font-bold mb-3 flex gap-1 items-center">
                    <span>
                      <DoorOpen size={16} color="orange" />
                    </span>
                    Unauthorized Access
                  </p>
                  <p className="text-[10px] flex gap-1 mb-1">
                    <span>
                      <Cctv size={14} />
                    </span>
                    Shop Floor Camera A
                  </p>
                  <p className="text-[11px] font-semibold flex gap-1">
                    <span>
                      <Clock size={14} />
                    </span>
                    14:35-14:37 on 7-Jul-2025
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center w-[100px]">
                <button className="text-yellow-300 text-[12px] font-bold flex items-center gap-2.5">
                  Resolve <ChevronRight size={15} />
                </button>
              </div>
            </div>
            <div className=" flex justify-between ">
              <div className="flex gap-2 items-center">
                <div className="thumbnail bg-amber-100 w-[135px] h-[78px] rounded-md">
                  {/* <Image
                                    src="/profile.png"
                                    alt="Profile"
                                    width={40}
                                    height={40}
                                    className="rounded-md"
                                  /> */}
                </div>
                <div className="desc">
                  <p className="text-[12px] font-bold mb-3 flex gap-1 items-center">
                    <span>
                      <DoorOpen size={16} color="orange" />
                    </span>
                    Unauthorized Access
                  </p>
                  <p className="text-[10px] flex gap-1 mb-1">
                    <span>
                      <Cctv size={14} />
                    </span>
                    Shop Floor Camera A
                  </p>
                  <p className="text-[11px] font-semibold flex gap-1">
                    <span>
                      <Clock size={14} />
                    </span>
                    14:35-14:37 on 7-Jul-2025
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center w-[100px]">
                <button className="cursor-pointer text-yellow-300 text-[12px] font-bold flex items-center gap-2.5">
                  Resolve <ChevronRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
