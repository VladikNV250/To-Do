import { ListsAndGroups } from "@/assets/data";
import Sidebar from "@/components/Sidebar";
import Icon from "@/components/UI/Icon";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className="min-h-screen min-w-screen pt-10 pr-[45px] pl-[345px] bg-red-500">
      <header className="fixed top-0 left-0 w-full flex-between pt-10 pr-[45px] pl-[345px] pb-4 bg-red-500/50 backdrop-blur z-10" >
        <h1 className="text-3xl text-white font-medium">Math | NMT | Complited</h1>
        <section className="relative">
          <button className="size-7 flex-center rounded-md bg-transparent hover:bg-white/50">
            <Icon icon="dots" size="18" className="text-white" />
          </button>
          <nav className="absolute top-0 -left-96 w-72 py-2 space-y-4 bg-white *:text-gray-600 rounded-md shadow-xl shadow-black/20 hidden"> {/* drop-down-menu */}
            <button className="flex items-start space-x-4 px-4 cursor-default">
              <Icon icon="input-cursor" size="18" />
              <p className="text-sm">Rename list</p>
            </button>
            <nav className="relative flex-between px-4 cursor-default">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <Icon icon="arrow-up" size="12" className="absolute top-[4px] left-1/2 -translate-x-1/2 -rotate-90"/>
                  <Icon icon="group" size="18" className=""/>
                </div>
                <p className="text-sm">Move list to ...</p>
              </div>
              <Icon icon="chevron-right" />
              <nav className="absolute top-0 -left-64 w-64 py-4 space-y-4 bg-white rounded-md shadow-xl shadow-black/20">
                <button className="flex items-start space-x-4 px-4 cursor-default">
                  <Icon icon="group" size="18" />
                  <p className="text-sm">Second group</p>
                </button>
              </nav>
            </nav>
            <button className="flex items-start space-x-4 px-4 cursor-default">
              <div className="relative">
                <Icon icon="arrow-up" size="12" className="absolute top-[4px] left-1/2 -translate-x-1/2 rotate-90"/>
                <Icon icon="group" size="18" className=""/>
              </div>
              <p className="text-sm">Remove from group</p>
            </button>
            <nav className="relative flex-between px-4 cursor-default">
              <div className="flex items-start space-x-4">
                <Icon icon="arrow-down-up" size="18" />
                <p className="text-sm">Sort by</p>
              </div>
              <Icon icon="chevron-right" />
              <nav className="absolute top-0 -left-64 w-64 py-4 space-y-4 bg-white rounded-md shadow-xl shadow-black/20">
                <button className="flex items-start space-x-4 px-4 cursor-default">
                  <Icon icon="star" size="18" />
                  <p className="text-sm">Importance</p>
                </button>
                <button className="flex items-start space-x-4 px-4 cursor-default">
                  <Icon icon="calendar-week" size="18" />
                  <p className="text-sm">Due date</p>
                </button>
                <button className="flex items-start space-x-4 px-4 cursor-default">
                  <Icon icon="sun" size="18" />
                  <p className="text-sm">Added to My Day</p>
                </button>
                <button className="flex items-start space-x-4 px-4 cursor-default">
                  <Icon icon="arrow-down-up" size="18" />
                  <p className="text-sm">Alphabetically</p>
                </button>
                <button className="flex items-start space-x-4 px-4 cursor-default">
                  <Icon icon="calendar-plus" size="18" />
                  <p className="text-sm">Creation date</p>
                </button>
              </nav>
            </nav>
            <figure className="px-4 space-y-2 cursor-default">
              <figcaption className="text-sm">Theme</figcaption>
              <ul className="w-full grid grid-cols-5 grid-rows gap-3.5">
                <li className="w-full h-[40px] bg-gradient-to-b from-blue-700 to-blue-500"></li>
                <li className="w-full h-[40px] bg-gradient-to-b from-purple-500 to-purple-300"></li>
                <li className="selected-theme w-full h-[40px] bg-gradient-to-b from-red-700 to-red-500"></li>
                <li className="w-full h-[40px] bg-gradient-to-b from-orange-700 to-orange-500"></li>
                <li className="w-full h-[40px] bg-gradient-to-b from-green-700 to-green-500"></li>
                <li className="w-full h-[40px] bg-gradient-to-b from-cyan-700 to-cyan-500"></li>
                <li className="w-full h-[40px] bg-gradient-to-b from-gray-700 to-gray-500"></li>
                <li className="w-full h-[40px] bg-blue-100 border-2 border-blue-700"></li>
                <li className="w-full h-[40px] bg-purple-100 border-2 border-purple-700"></li>
                <li className="w-full h-[40px] bg-red-100 border-2 border-red-700"></li>
                <li className="w-full h-[40px] bg-orange-100 border-2 border-orange-700"></li>
                <li className="w-full h-[40px] bg-green-100 border-2 border-green-700"></li>
                <li className="w-full h-[40px] bg-cyan-100 border-2 border-cyan-700"></li>
                <li className="w-full h-[40px] bg-gray-100 border-2 border-gray-700"></li>
              </ul>
            </figure>
            <button className="w-full flex items-start border-t border-gray-100 space-x-4 px-4 pt-4 pb-2 cursor-default">
              <Icon icon="trash" size="18" className="text-red-600" />
              <p className="text-sm text-red-600">Delete list</p>
            </button>
          </nav>
        </section>
      </header>
      <section className="pt-20">
        <figure className="space-y-2">
          <figcaption className="flex items-center space-x-0.5">
            <button className="w-max flex items-center py-1 px-1.5 rounded-md space-x-2 bg-white/65 hover:bg-white/90 cursor-default">
              <Icon icon="chevron-down" size="14" />
              <p className="text-sm">Completed</p>
              <p className="text-sm">56</p>
            </button>
            <button className="flex-center size-7 rounded-md bg-white/65 hover:bg-white/90 cursor-default">
              <Icon icon="x-lg"  />
            </button>
          </figcaption>
          <ul className="w-full flex flex-col space-y-0.5">
            <li className="w-full h-16 pl-5 pr-3 py-2 flex items-start justify-between bg-white/85 rounded-md">
              <div className="flex items-start space-x-3">
                <button>
                  <Icon icon="circle" size="18"/>
                </button>
                <div className="">
                  <p className="text-base">To make your bed</p>
                  <div className="flex items-center text-[13px] text-gray-600">
                    <p className="flex items-center space-x-2">
                      <Icon icon="sun" size="13" />
                      <span>My Day</span>
                    </p>
                    <Icon icon="dot" />
                    <p className="flex items-center space-x-2">
                      0 of 1
                    </p>
                    <Icon icon="dot" />
                    <p className={clsx(
                      "flex items-center space-x-2",
                      // "tommorow" && "text-inherit",
                      "today" && "text-blue-700",
                      // "yesterday" && "text-red-600",
                    )}>
                      <Icon icon="calendar" size="13"/>
                      <span>Today</span>
                      <Icon icon="repeat-circle" size="13" className="text-gray-600" />
                    </p>
                    <Icon icon="dot" />
                    <p className="flex items-center space-x-2">
                      <Icon icon="bell" size="13"/>
                      <span>Tommorow</span>
                    </p>
                    <Icon icon="dot" />
                    <p className="flex items-center space-x-2">
                      <Icon icon="paperclip" size="13" />
                    </p>
                    <p className="flex items-center space-x-2">
                      <Icon icon="note" size="13" />
                    </p>
                  </div>
                </div>
              </div>
              <button>
                <Icon icon="star" size="18" className="text-gray-600" />
              </button>
            </li>
            <li className="w-full h-16 pl-5 pr-3 py-2 flex items-start justify-between bg-white/85 rounded-md">
              <div className="flex items-start space-x-3">
                <button>
                  <Icon icon="circle" size="18"/>
                </button>
                <div className="">
                  <p className="text-base">Finish Todo</p>
                  <div className="flex items-center text-[13px] text-gray-600">
                    <p className={clsx(
                      "flex items-center space-x-2",
                      "tommorow" && "text-gray-600",
                      // "today" && "text-blue-700",
                      // "yesterday" && "text-red-600",
                    )}>
                      <Icon icon="calendar" size="13"/>
                      <span>Tommorow</span>
                    </p>
                    <Icon icon="dot" />
                    <p className="flex items-center space-x-2">
                      <Icon icon="paperclip" size="13" />
                    </p>
                  </div>
                </div>
              </div>
              <button>
                <Icon icon="star" size="18" className="text-gray-600" />
              </button>
            </li>
            <li className="w-full h-16 pl-5 pr-3 py-2 flex items-start justify-between bg-white/85 rounded-md">
              <div className="flex items-start space-x-3">
                <button>
                  <Icon icon="circle" size="18"/>
                </button>
                <div className="">
                  <p className="text-base">Finish school</p>
                  <div className="flex items-center text-[13px] text-gray-600">
                    <p className={clsx(
                      "flex items-center space-x-2",
                      // "tommorow" && "text-inherit",
                      // "today" && "text-blue-700",
                      "yesterday" && "text-red-600",
                    )}>
                      <Icon icon="calendar" size="13"/>
                      <span>Yesterday</span>
                    </p>
                    <Icon icon="dot" />
                    <p className="flex items-center space-x-2">
                      <Icon icon="note" size="13" />
                    </p>
                  </div>
                </div>
              </div>
              <button>
                <Icon icon="star" size="18" className="text-gray-600" />
              </button>
            </li>
          </ul>
        </figure>
      </section>
      <section className="fixed bottom-0 left-0 w-full pb-10 pr-[45px] pl-[345px] pt-4 bg-red-500/50 backdrop-blur z-10">
        <div className="w-full h-12 flex items-center pl-3 pr-2.5 py-2 bg-white/75 rounded-md">
          <button>
            <Icon icon="plus-lg" size="22" />
          </button>
          <input 
            type="text" 
            placeholder="Add a task"
            className="w-full bg-transparent text-[15px] ml-2.5 pr-2.5 outline-none border-none placeholder:text-black"
          />
          <div className="flex items-center space-x-3 ">
            <button>
              <Icon icon="calendar" size="18" />
            </button>
            <button>
              <Icon icon="alarm" size="18" />
            </button>
            <button>
              <Icon icon="repeat-circle" size="18" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
