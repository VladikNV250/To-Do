import { ListsAndGroups, asideListMenu } from "@/assets/data";
import Icon from "@/components/UI/Icon";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import DropdownMenu from "./UI/DropdownMenu";
import { List } from "@/assets/List";
import { Group } from "@/assets/Group";
import GroupComponent from "./GroupComponent";
import ListComponent from "./ListComponent";

type Props = {
    navLists: List[],
    setNavLists: Function,
    lists: (List | Group)[],
    setLists: Function,
}

const Colors: {[key: string]: string[]} = 
{ //                [0] - for text,    [1] - for bg,    [2] - for themes
  blue:            ["text-blue-500",   "bg-blue-700",   "bg-gradient-to-b from-blue-700 to-blue-500"],
  purple:          ["text-purple-500", "bg-purple-500", "bg-gradient-to-b from-purple-500 to-purple-300"],
  red:             ["text-red-500",    "bg-red-700",    "bg-gradient-to-b from-red-700 to-red-500"],
  orange:          ["text-orange-500", "bg-orange-700", "bg-gradient-to-b from-orange-700 to-orange-500"],
  green:           ["text-green-500",  "bg-green-700",  "bg-gradient-to-b from-green-700 to-green-500"],
  cyan:            ["text-cyan-700",   "bg-cyan-700",   "bg-gradient-to-b from-cyan-700 to-cyan-500"],
  gray:            ["text-gray-600",   "bg-gray-700",   "bg-gradient-to-b from-gray-700 to-gray-500"],
  blue_inverted:   ["text-blue-500",   "bg-blue-700",   "bg-blue-100 border-2 !border-blue-700"],
  purple_inverted: ["text-purple-500", "bg-purple-700", "bg-purple-100 border-2 border-purple-700"],
  red_inverted:    ["text-red-500",    "bg-red-700",    "bg-red-100 border-2 border-red-700"],
  orange_inverted: ["text-orange-500", "bg-orange-700", "bg-orange-100 border-2 border-orange-700"],
  green_inverted:  ["text-green-500",  "bg-green-700",  "bg-green-100 border-2 border-green-700"],
  cyan_inverted:   ["text-cyan-500",   "bg-cyan-700",   "bg-cyan-100 border-2 border-cyan-700"],
  gray_inverted:   ["text-gray-500",   "bg-gray-700",   "bg-gray-100 border-2 border-gray-700"],
}

export default function Sidebar({navLists, setNavLists, lists, setLists}: Props) {
  return (
    <aside className="relative w-[300px] h-full min-h-screen bg-gray-100 px-1 pt-2 z-20">
        <section className="relative flex items-center space-x-4 mb-2 px-3">
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
        <ul>
            {navLists.map((list, key) => (
            <li key={key}  className="py-2.5 px-3 hover:bg-gray-200 flex-between cursor-default">
                <div className="flex items-start space-x-4">
                    <Icon icon={list.icon} size="18" className={Colors[list.color][0]} />
                    <p className="text-sm">{list.name}</p> 
                </div>
                <div className={clsx(
                    "size-4 bg-gray-300 text-[11px]/none rounded-full ", 
                    list.tasks.length === 0 && "hidden",
                    list.tasks.length !== 0 && "flex-center",
                )}> 
                    {list.tasks.length}
                </div> 
            </li>
            ))}
        </ul>
        <div className="w-full h-px bg-gray-200 my-2"></div> {/* divider */}
        {/* <DropdownMenu menu={asideListMenu} id="aside-list-menu" /> */}
        <ul className="overflow-y-auto">
            {lists.map((item, key) => (
            <>
            { item instanceof List ? <ListComponent list={item} key={key} />
            : item instanceof Group ? <GroupComponent group={item} key={key} />
            : null }
            </>
            ))}
        </ul>
        <section className="absolute bottom-0 left-0 w-full h-10 flex-between z-10 bg-inherit">
            <Link href={""} className="h-full flex items-center space-x-4 pl-2 flex-1 cursor-default hover:bg-gray-200 ">
                <Icon icon="plus-lg" size="18"/>
                <p className="text-sm">New list</p>
            </Link>
            <button className="grid place-items-center h-full w-10 cursor-default hover:bg-gray-200">
                <Icon icon="plus" size="14" className="grid-center mt-px"/>
                <Icon icon="group" size="18" className="grid-center"/>
            </button>
        </section>
    </aside>
  );
}