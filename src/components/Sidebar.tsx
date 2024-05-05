import { ListsAndGroups } from "@/assets/data";
import Icon from "@/components/UI/Icon";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {

  return (
    <aside className="fixed w-[300px] h-full bg-gray-100 px-1 pt-2 z-20">
        <section className="flex items-center space-x-4 mb-2 px-3">
            <div className="relative size-12 rounded-full bg-sky-600 grid place-content-center">
                {/* <Image 
                    src={""} alt=""
                    fill sizes="100%"
                    width={1} height={1}
                    quality={100}
                /> */}
                <p className="text-2xl/none text-white grid-center">V</p>
            </div>
            <div>
                <h4 className="text-base font-bold">Vlad .</h4>
                <h5 className="text-sm text-neutral-500">vladiknemichev@gmail.com</h5>
            </div>
        </section>
        <section className="w-full px-3 mb-6">
            <div className="w-full flex-between bg-white border border-gray-200 border-b-gray-500 rounded-md py-2 pl-3 pr-1">
                <input 
                  type="text"
                  className="w-full text-sm/none bg-white outline-none placeholder:text-gray-800" 
                  placeholder="Search"
                />
                <div className="flex space-x-1">
                    {/* <button
                      className="px-2 py-0.5 bg-transparent rounded cursor-default hover:bg-zinc-100"
                    >
                        <Icon icon="x-lg" className="rotate-90 text-gray-800" />
                    </button> */}
                    <button
                      className="px-2 py-0.5 bg-transparent rounded cursor-default hover:bg-zinc-100"
                    >
                        <Icon icon="search" size="13" className="rotate-90 text-gray-800"/>
                    </button>
                </div>
            </div>
        </section>
        <ul className="px-3 space-y-4">
            {[
            {title: "My Day",         icon: {name: "sun",    color: "text-gray-700"},  href: "/my-day",         counter: "0"},
            {title: "Important",      icon: {name: "star",   color: "text-red-700"},   href: "/important",      counter: "0"},
            {title: "Planned",        icon: {name: "plan",   color: "text-green-700"}, href: "/planned",        counter: "5"},
            {title: "Assigned to me", icon: {name: "person", color: "text-green-500"}, href: "/asiggned-to-me", counter: "0"},
            {title: "Tasks",          icon: {name: "house",  color: "text-blue-700"},  href: "/tasks",          counter: "0"},
            ].map((item, key) => (
            <li key={key}>
                <Link href={item.href} className="flex-between">
                    <div className="flex items-start space-x-4">
                        <Icon icon={item.icon.name} size="18" className={item.icon.color} />
                        <p className="text-sm">{item.title}</p> 
                    </div>
                    <div className={clsx(
                        "size-4 bg-gray-300 text-[11px]/none rounded-full ", 
                        item.counter === "0" && "hidden",
                        item.counter !== "0" && "flex-center",
                    )}> 
                        {item.counter}
                    </div> 
                </Link>
            </li>
            ))}
        </ul>
        <div className="w-full h-px bg-gray-200 my-4"></div> {/* divider */}
        <ul className="px-3 space-y-4">
            {ListsAndGroups.map((item, key) => (
            <>
            {item.type === "list" ?
            <li key={key}>
                <Link href={""} className="flex-between">
                    <div className="flex items-start space-x-4">
                        <Icon icon="list" size="18" className={item.color + " scale-x-125"} />
                        <p className="text-sm">{item.title}</p> 
                    </div>
                    <div className={clsx(
                        "size-4 bg-gray-300 text-[11px]/none rounded-full ", 
                        item.tasks?.length === 0 && "hidden",
                        item.tasks?.length !== 0 && "flex-center",
                    )}> 
                        {item.tasks?.length}
                    </div> 
                </Link>
            </li>
            :item.type === "group" ?
            <li key={key}>
                <section className="space-y-4">
                    <div className="flex-between">
                        <div className="flex items-start space-x-4">
                            <Icon icon="group" size="18" className={item.color} />
                            <p className="text-sm">{item.title}</p>
                        </div>
                        <Icon icon="chevron-down" size="14" />
                    </div>
                    <ul className="space-y-4 pl-8">
                        {item.lists?.map((list, key) => (
                        <li key={key}>
                            <Link href={""} className="flex-between">
                                <div className="flex items-center space-x-4">
                                    <Icon icon="list" size="18" className={list.color + " scale-x-125"} />
                                    <p className="text-sm">{list.title}</p> 
                                </div>
                                <div className={clsx(
                                    "size-4 bg-gray-300 text-[11px]/none rounded-full ", 
                                    list.tasks.length === 0 && "hidden",
                                    list.tasks.length !== 0 && "flex-center",
                                )}> 
                                    {list.tasks.length}
                                </div> 
                            </Link>
                        </li>
                        ))}
                    </ul>
                </section>
            </li>
            : null
            }
            </>
            ))}
        </ul>
        <section className="absolute bottom-2 left-0 w-full flex-between px-4">
            <Link href={""} className="flex items-start space-x-4">
                <Icon icon="plus-lg" size="18"/>
                <p className="text-sm">New list</p>
            </Link>
            <button className="relative">
                <Icon icon="plus" size="14" className="absolute top-[3px] left-1/2 -translate-x-1/2"/>
                <Icon icon="group" size="18" className=""/>
            </button>
        </section>
    </aside>
  );
}