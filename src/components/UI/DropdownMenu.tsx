"use client"
import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import { Menu, MenuBtn, MenuThemes, NestedMenu } from "@/assets/data";
import clsx from "clsx";

type Props = {
  readonly menu: Menu[],
  readonly id: string,
  readonly position: string, // ex. "top-32 left-32"
  readonly isActive: boolean,
}

type Edge = "top" | "right" | "bottom" | "left";  

export default function DropdownMenu({menu, id, position = "top-0 left-0", isActive}: Props) {
  const Colors: {[key: string]: string} = 
  {
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
  const [edge, setEdge] = useState<Edge>("left"); 


  function getDistanceFromEdge(element: HTMLElement, edge: Edge): number {
    const rect = element.getBoundingClientRect();
    const viewportSize = {
        width: window.innerWidth || document.documentElement.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight
    };

    switch (edge) {
        case 'top':
            return rect.top;
        case 'bottom':
            return viewportSize.height - rect.bottom;
        case 'left':
            return rect.left;
        case 'right':
            return viewportSize.width - rect.right;
        default:
            throw new Error('Invalid edge specified.');
    }
  }

  useEffect(() => {
    const distanceFromEdge = getDistanceFromEdge(document.getElementById(id)!, "left"); // how far menu is from the edge of browser
    console.log(distanceFromEdge);
    if (distanceFromEdge > 256) setEdge("left"); // 256 - 16rem base width of the nested menu
    else setEdge("right");
    console.log(getDistanceFromEdge(document.getElementById(id)!, "right"))
  }, [])


  // checks whether the option is first in its category(array) and not at the top of the menu
  function checkOption(option: MenuBtn | NestedMenu | MenuThemes, index: number): boolean {
    return (index === 0 && option !== menu[0][0]);
  }

  function displayBtn(button: MenuBtn, index: number): React.JSX.Element {
    return (
      <button 
        key={index}
        className={clsx(
        "w-full flex items-start space-x-4 px-4 py-3 hover:bg-gray-100",
        "cursor-default first:rounded-t-md last:rounded-b-md",
        checkOption(button, index) && "border-t border-gray-200" 
      )} 
        /*onClick={() => button.onclick}*/
      >
        <Icon icon={`${button.icon}`} size="18" className={button.color} />
        <p className={`text-sm ${button.color}`}>{button.name}</p>
      </button>
    )
  }

  function displayNestedMenu(nested: NestedMenu, index: number): React.JSX.Element {
    return (
      <nav key={index} className={clsx(
        "group relative w-full flex-between px-4 py-3 hover:bg-gray-100",
        "cursor-default first:rounded-t-md last:rounded-b-md",
        checkOption(nested, index) && "border-t border-gray-200"
      )}>
          <div className="flex items-start space-x-4">
              <Icon icon={`${nested.icon}`} size="18" />
              <p className="text-sm">{nested.name}</p>
          </div>
          <Icon icon="chevron-right" />
          {/* "-left-64 | -right-64" because you need 100% of the width of the container itself, not its parent */}
          <nav className={clsx(
            "absolute top-0 w-64", 
            edge === "left" && "-left-64", edge === "right" && "-right-64",
            "bg-white rounded-md shadow-xl shadow-black/20",
            "overflow-hidden invisible group-hover:visible",
          )}> 
              {nested.options?.map(nestedOption => (
              <button 
                className="w-full flex items-start space-x-4 px-4 py-3 cursor-default hover:bg-gray-100" 
                /*onClick={() => nestedOption.onclick}*/
              >
                  <Icon icon={`${nestedOption.icon}`} size="18" className={nestedOption.color} />
                  <p className={`text-sm ${nestedOption.color}`}>{nestedOption.name}</p>
              </button>
              ))}
          </nav>
      </nav>
    )
  }

  function displayThemes(themes: MenuThemes, index: number): React.JSX.Element {
    return (
      <figure key={index} className={clsx(
        "mt-2 mb-4 px-4 space-y-2 cursor-default first:rounded-t-md last:rounded-b-md",
        checkOption(themes, index) && "border-t border-gray-200"
      )}>
          <figcaption className="text-sm">Theme</figcaption>
          <ul className="w-full grid grid-cols-5 grid-rows gap-3.5">
          {themes.colors?.map((color) => (
              <li className={`w-full h-[40px] ${Colors[color]}`}></li>
          ))}
          </ul>
      </figure>
    )
  }


  return (
    <nav id={id} className={clsx(
      "absolute", position,
      "w-72 bg-white rounded-md shadow-xl shadow-black/20",
      "*:text-gray-600",
      !isActive && "invisible",
    )} onClick={() => console.log('tap!')}>
      {menu.map((arrayOption) => (
        <>
          {arrayOption.map((option, index) => (
            <>
              {  
                 option.type  === "button" ?     displayBtn(option, index)
               : option.type === "nested-menu" ? displayNestedMenu(option, index) 
               : option.type === "themes" ?      displayThemes(option, index) 
               : null
              }
            </>
          ))}
        </>
      ))}
    </nav>
  );
}
