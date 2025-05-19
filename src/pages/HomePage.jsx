import React from 'react'
import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  let navigate = useNavigate()
  return (
    <div className='flex flex-col justify-center items-center gap-10 mb-10'>
        <NavBar/>
        <div className='h-[10svh]'></div>
        <article className='flex flex-col border-1 border-gray-400 rounded-3xl px-5 py-5 w-[80svw] hover:cursor-pointer' onClick={() => {navigate('/article/@bocilFF/inspiration-to-move')}}>
            <div className='flex flex-row gap-3 items-center justify-start px-2 py-2'>
                <img src="/circle-user.svg" alt="user-profile-photo"/>
                <span>Freyjadour Falenas</span>
            </div>
            <div className='flex flex-row px-2 justify-between'>
                <div className='flex-1 flex flex-col gap-5 justify-evenly'>
                    <span className='text-4xl font-bold'>When a Word Becomes Inspiration to Move</span>
                    <span className='text-gray-500 text-2xl font-semibold'>Next Stop: Anywhere Everywhere</span>
                </div>
                <img src="/pic1.jpg" alt="article-picture" className='size-[15svw] rounded-2xl'/>
            </div>
        </article>
        <article className='flex flex-col border-1 border-gray-400 rounded-3xl px-5 py-5 w-[80svw] hover:cursor-pointer' onClick={() => {navigate('/article/@MamangGanteng/becoming-a-boring-person')}}>
            <div className='flex flex-row gap-3 items-center justify-start px-2 py-2'>
                <img src="/circle-user.svg" alt="user-profile-photo"/>
                <span>Mamang Dokar</span>
            </div>
            <div className='flex flex-row px-2 justify-between'>
                <div className='flex-1 flex flex-col gap-5 justify-evenly'>
                    <span className='text-4xl font-bold'>Becoming A Boring Person</span>
                    <span className='text-gray-500 text-2xl font-semibold'>A New Way of Life to Celebrate Yourself</span>
                </div>
                <img src="/pic2.jpg" alt="article-picture" className='size-[15svw] rounded-2xl'/>
            </div>
        </article>
        <article className='flex flex-col border-1 border-gray-400 rounded-3xl px-5 py-5 w-[80svw] hover:cursor-pointer' onClick={() => {navigate('/article/@LetTheWindLead/When-Someone-Breaks-Your-Heart')}}>
            <div className='flex flex-row gap-3 items-center justify-start px-2 py-2'>
                <img src="/circle-user.svg" alt="user-profile-photo"/>
                <span>Jean Gunnhildr</span>
            </div>
            <div className='flex flex-row px-2 justify-between'>
                <div className='flex-1 flex flex-col gap-5 justify-evenly'>
                    <span className='text-4xl font-bold'>When Someone Breaks Your Heart</span>
                    <span className='text-gray-500 text-2xl font-semibold'>Pick Up Your Pieces to Become A Whole Again</span>
                </div>
                <img src="/pic3.jpg" alt="article-picture" className='size-[15svw] rounded-2xl'/>
            </div>
        </article>
    </div>
  )
}

export default HomePage