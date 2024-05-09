"use client"
import React from 'react';
import Icon from './UI/Icon';
import TextareaAutosize from 'react-textarea-autosize';

export default function TaskSidebar() {
  return (
    <aside className='relative w-[350px] h-full min-h-screen bg-gray-50 px-3 pt-2 z-20 space-y-2.5'>
        <div className='w-full flex justify-end items-center mb-4 pr-2 pt-2'>
            <button className='text-gray-500'>
                <Icon icon="x-lg" size='14'/>
            </button>
        </div>
        <section className='tside-section p-3 pb-2 space-y-2'>
            <div className='flex-between'>
                <div className='flex flex-1 space-x-2'>
                    <button className='cursor-default'>
                        <Icon icon='circle' size='20' className='text-gray-600'/>
                    </button>
                    <h3 className='flex-1 text-xl font-medium pr-8'>Wordle Clone</h3>
                </div>
                <button className='cursor-default'>
                    <Icon icon='star' className='text-gray-600' />
                </button>
            </div>
            <button className='flex space-x-2 text-blue-700 cursor-default'>
                <Icon icon='plus-lg' size='18' />
                <span className='text-sm'>Add step</span>
            </button>
        </section>
        <section className='tside-section'>
            <button className='w-full flex items-center space-x-2 pt-3.5 pr-8 pb-3 pl-3 text-gray-600 cursor-default hover:bg-gray-100'>
                <Icon icon='sun' size='17' />
                <span className='text-[15px]'>Add to My Day</span>
            </button>
        </section>
        <section className='tside-section'>
            <button className='w-full flex items-center space-x-2 pt-3.5 pr-8 pb-3 pl-3 text-gray-600 cursor-default hover:bg-gray-100'>
                <Icon icon='alarm' size='17' />
                <span className='text-[15px]'>Remind me</span>
            </button>
            <div className='w-11/12 h-px bg-gray-200 mx-auto'></div> {/* divider */}
            <button className='w-full flex items-center space-x-2 pt-3.5 pr-8 pb-3 pl-3 text-gray-600 cursor-default hover:bg-gray-100'>
                <Icon icon='calendar-week' size='17' />
                <span className='text-[15px]'>Add due date</span>
            </button>
            <div className='w-11/12 h-px bg-gray-200 mx-auto'></div> {/* divider */}
            <button className='w-full flex items-center space-x-2 pt-3.5 pr-8 pb-3 pl-3 text-gray-600 cursor-default hover:bg-gray-100'>
                <Icon icon='double calendar-repeat' size='17' />
                <span className='text-[15px]'>Repeat</span>
            </button>
        </section>
        <section className='tside-section'>
            <button className='w-full flex items-center space-x-2 pt-3.5 pr-8 pb-3 pl-3 text-gray-600 cursor-default hover:bg-gray-100'>
                <Icon icon='person-add' size='17' />
                <span className='text-[15px]'>Assign to</span>
            </button>
        </section>
        <section className='tside-section'>
            <button className='w-full flex items-center space-x-2 pt-3.5 pr-8 pb-3 pl-3 text-gray-600 cursor-default hover:bg-gray-100'>
                <Icon icon='paperclip' size='17' className='rotate-45' />
                <span className='text-[15px]'>Add file</span>
            </button>
        </section>
        <section className='tside-section'>
            <TextareaAutosize minRows={2} placeholder='Add note' className='w-full min-h-full pt-3.5 pr-8 pb-6 pl-3 outline-none text-sm placeholder-gray-600 placeholder:text-[15px]'/>
            {/* <textarea name="" id="" placeholder='Add note' className='w-full h-full pt-3.5 pr-8 pb-3 pl-3 outline-none placeholder:text-gray-600'></textarea> */}
        </section>
    </aside>
  )
}
