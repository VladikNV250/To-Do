import { ListsAndGroups, asideListMenu, groupMenu, taskMenu } from "@/assets/data";
import Sidebar from "@/components/Sidebar";
import DropdownMenu from "@/components/UI/DropdownMenu";
import { listMenu } from "@/assets/data";
import Icon from "@/components/UI/Icon";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className="min-h-screen flex-1 pt-10 px-[45px] bg-red-500" style={{transform: "translateZ(0)"}}>
      <header className="fixed top-0 left-0 w-full flex-between pt-10 px-[45px] pb-4 bg-red-500/50 backdrop-blur z-10" >
        <h1 className="text-3xl text-white font-medium">Math | NMT | Complited</h1>
        <section className="relative">
          <button className="size-7 flex-center rounded-md bg-transparent hover:bg-white/50">
            <Icon icon="dots" size="18" className="text-white" />
          </button>
          <DropdownMenu menu={listMenu} />
        </section>
        {/* <DropdownMenu menu={asideListMenu} /> */}
        {/* <DropdownMenu menu={groupMenu} /> */}
        {/* <DropdownMenu menu={taskMenu} /> */}
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
          <ul className="w-full flex flex-col space-y-0.5 cursor-default">
            <li className="w-full h-16 pl-5 pr-3 py-2 flex items-start justify-between bg-white/85 rounded-md hover:bg-white/90">
              <div className="flex items-start space-x-3">
                <button className="group cursor-default">
                  <Icon icon="circle" size="18" className="text-gray-600 group-hover:hidden"/>
                  <Icon icon="circle-checked" size="18" className="hidden text-gray-600 group-hover:block"/>
                </button>
                <div>
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
              <button className="group cursor-default">
                <Icon icon="star" size="18" className="text-gray-600 hover:text-red-400" />
              </button>
            </li>
            <li className="w-full h-16 pl-5 pr-3 py-2 flex items-start justify-between bg-white/85 rounded-md hover:bg-white/90">
              <div className="flex items-start space-x-3">
                <button className="group cursor-default">
                  <Icon icon="circle" size="18" className="text-gray-600 group-hover:hidden"/>
                  <Icon icon="circle-checked" size="18" className="hidden text-gray-600 group-hover:block"/>
                </button>
                <div>
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
              <button className="group cursor-default">
                <Icon icon="star" size="18" className="text-gray-600 hover:text-red-400" />
              </button>
            </li>
            <li className="w-full h-16 pl-5 pr-3 py-2 flex items-start justify-between bg-white/85 rounded-md hover:bg-white/90">
              <div className="flex items-start space-x-3">
                <button className="group cursor-default">
                  <Icon icon="circle" size="18" className="text-gray-600 group-hover:hidden"/>
                  <Icon icon="circle-checked" size="18" className="hidden text-gray-600 group-hover:block"/>
                </button>
                <div>
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
              <button className="group cursor-default">
                <Icon icon="star" size="18" className="text-gray-600 hover:text-red-400" />
              </button>
            </li>
          </ul>
        </figure>
      </section>
      <section className="fixed bottom-0 left-0 w-full pb-10 px-[45px] pt-4 bg-red-500/50 backdrop-blur z-10">
        <div className="relative w-full h-12 flex-between pl-3 pr-2.5 py-0.5">
          <button className="relative py-1.5 cursor-default z-10">
            <Icon icon="plus-lg" size="22" />
          </button>
          <input 
            type="text" 
            placeholder="Add a task"
            className={`
            absolute top-0 left-0 w-full h-full  
            text-[15px] pl-12 pr-32 py-1.5 outline-none border-none bg-white/75 rounded-md  
            placeholder:text-black focus:placeholder:invisible
            focus:bg-white/85
            `}
          />
          <div className="relative flex items-center h-full z-10">
            <button className="h-full px-2 rounded-md cursor-default hover:bg-white/90">
              <Icon icon="calendar" size="18" />
            </button>
            <button className="h-full px-2 rounded-md cursor-default hover:bg-white/90">
              <Icon icon="alarm" size="18" />
            </button>
            <button className="h-full px-2 rounded-md cursor-default hover:bg-white/90">
              <Icon icon="repeat-circle" size="18" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
