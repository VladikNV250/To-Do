import { List } from '@/assets/List';
import clsx from 'clsx';
import React from 'react';

type Props = {
    list: List | null,
}

export default function TitleInput({list}: Props) {

  return (
    <input 
        type='text'
        defaultValue={list ? list.name : ""}
        className={clsx(
            'min-w-[100px] text-3xl text-white font-medium bg-transparent outline-none rounded px-2.5 py-1',
            'hover:bg-black/10 focus:bg-white focus:text-black focus:border-b focus:border-blue-700',
        )}
        // onInput={(event) => (event.target as HTMLInputElement).style.width = (((event.target as HTMLInputElement).value.length + 1) * 8) + "px"}
        onInput={(event) => (event.target as HTMLInputElement).style.width = (event.target as HTMLInputElement).value.length + "ch"}
    />
  )
}
