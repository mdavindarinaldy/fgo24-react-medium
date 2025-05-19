import React from 'react'
import { useNavigate } from 'react-router-dom'

function ArticleItems({name, title, subheading, uname, slug, img, ...props}) {
  let navigate = useNavigate()
  return (
    <article className='flex flex-col border-1 border-gray-400 rounded-3xl px-5 py-5 w-[80svw] hover:cursor-pointer' onClick={() => {navigate(`/article/${uname}/${slug}`)}} {...props}>
            <div className='flex flex-row gap-3 items-center justify-start px-2 py-2'>
                <img src="/circle-user.svg" alt="user-profile-photo"/>
                <span>{name}</span>
            </div>
            <div className='flex flex-row px-2 justify-between'>
                <div className='flex-1 flex flex-col gap-5 justify-evenly'>
                    <span className='text-4xl font-bold'>{title}</span>
                    <span className='text-gray-500 text-2xl font-semibold'>{subheading}</span>
                </div>
                <img src={img} alt="article-picture" className='size-[15svw] rounded-2xl'/>
            </div>
    </article>
  )
}

export default ArticleItems