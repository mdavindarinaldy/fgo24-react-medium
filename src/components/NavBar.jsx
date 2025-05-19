import React from 'react'

function NavBar() {
  return (
    <nav className='h-[10svh] w-svw bg-white flex flex-row justify-between items-center px-5 py-2 fixed top-0 shadow-lg'>
        <div className='flex flex-row gap-5 items-center justify-start w-fit h-fit'>
            <img src="/medium.png" alt="logo-medium" className='w-[10svw]'/>
            <form id='search' className='box-border px-2 py-2 border-1 border-gray-400 text-gray-400 flex items-center gap-5 rounded-2xl'>
                <button className='border-0 bg-transparent'>
                    <img src="/search.svg" alt="search-icon"/>
                </button>
                <input type='text' name='search' placeholder='Search' className='outline-0 border-0'/>
            </form>
        </div>
        <div className='flex flex-row gap-5 items-center'>
            <button className='border-0 bg-transparent flex flex-row gap-1 items-center'>
                <img src="/notebook-pen.svg" alt="write-icon" />
                <span className='text-sm font-semibold'>Write</span>
            </button>
            <button className='border-0 bg-transparent'>
                <img src="/bell.svg" alt="notification-icon" />
            </button>
            <button className='border-0 bg-transparent'>
                <img src="/circle-user.svg" alt="user-icon" />
            </button>
        </div>
    </nav>
  )
}

export default NavBar