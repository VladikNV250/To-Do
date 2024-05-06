import React from "react";
import Icon from "./Icon";
import { listOptionsMenu } from "@/assets/data";

export default function DropdownMenu() {
  const Colors: {[key: string]: string} = {
    blue: "bg-gradient-to-b from-blue-700 to-blue-500",
    purple: "bg-gradient-to-b from-purple-500 to-purple-300",
    red: "bg-gradient-to-b from-red-700 to-red-500",
    orange: "bg-gradient-to-b from-orange-700 to-orange-500",
    green: "bg-gradient-to-b from-green-700 to-green-500",
    cyan: "bg-gradient-to-b from-cyan-700 to-cyan-500",
    gray: " bg-gradient-to-b from-gray-700 to-gray-500",
    blue_inverted: "bg-blue-100 border-2 !border-blue-700",
    purple_inverted: "bg-purple-100 border-2 border-purple-700",
    red_inverted: "bg-red-100 border-2 border-red-700",
    orange_inverted: "bg-orange-100 border-2 border-orange-700",
    green_inverted: "bg-green-100 border-2 border-green-700",
    cyan_inverted: "bg-cyan-100 border-2 border-cyan-700",
    gray_inverted: "bg-gray-100 border-2 border-gray-700",
  }

  return (
    <nav className="absolute top-0 -left-96 w-72 py-2 space-y-4 bg-white *:text-gray-600 rounded-md shadow-xl shadow-black/20">
      {listOptionsMenu.map((categoryOption) => (
        <>
          {categoryOption.map((option, key) => (
            <>
              {option.type === "button" ? (
                <button className="flex items-start space-x-4 px-4 cursor-default" /*onClick={() => option.onclick}*/>
                  <Icon icon={`${option.icon}`} size="18" className={option.color} />
                  <p className={`text-sm ${option.color}`}>{option.name}</p>
                </button>
              ) : option.type === "nested-menu" ? (
                <nav className="relative flex-between px-4 cursor-default">
                    <div className="flex items-start space-x-4">
                        <Icon icon={`${option.icon}`} size="18" />
                        <p className="text-sm">{option.name}</p>
                    </div>
                    <Icon icon="chevron-right" />
                    <nav className="absolute top-0 -left-64 w-64 py-4 space-y-4 bg-white rounded-md shadow-xl shadow-black/20">
                        {option.options?.map(nestedOption => (
                        <button className="flex items-start space-x-4 px-4 cursor-default" /*onClick={() => option.onclick}*/>
                            <Icon icon={`${nestedOption.icon}`} size="18" className={option.color} />
                            <p className={`text-sm ${option.color}`}>{nestedOption.name}</p>
                        </button>
                        ))}
                    </nav>
                </nav>
              ) : option.type === "themes" ? (
                <figure className="px-4 space-y-2 cursor-default">
                    <figcaption className="text-sm">Theme</figcaption>
                    <ul className="w-full grid grid-cols-5 grid-rows gap-3.5">
                    {option.colors?.map((color) => (
                        <li className={`w-full h-[40px] ${Colors[color]}`}></li>
                    ))}
                    </ul>
                </figure>
              ) : null}
            </>
          ))}
        </>
      ))}
    </nav>
  );
}
