import { List } from '@/assets/List';
import React from 'react';
import Icon from './UI/Icon';
import clsx from 'clsx';

type Props = {
    readonly list: List,
    readonly key: number,
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

export default function ListComponent({list, key}: Props) {
  return (
    <li key={key} className="flex-between py-2.5 px-3 cursor-default hover:bg-gray-200">
        <div className="flex items-start space-x-4">
            <Icon icon="list" size="18" className={Colors[list.color][0] + " scale-x-125"} />
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
  )
}
