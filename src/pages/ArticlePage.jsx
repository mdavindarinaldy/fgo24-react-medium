import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ArticlePage() {
  const {id} = useParams()
  const [article, setArticle] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async() => {
        try {
            const res = await fetch('/Article.json')
            const data = await res.json()
            setArticle(data)
            setLoading(false)
        } catch(err) {
            setError(err.message)
            setLoading(false)
        }
    }
    fetchData()
  }, [])
  
  const found = article.find((element) => element.id === Number(id))
  if (loading) return <div className='h-svh flex flex-col justify-center items-center'>Loading...</div>
  if (error) return <div className='h-svh flex flex-col justify-center items-center'>{error}</div>

  if (found !== undefined) { return (
    <>
        <div className='flex flex-row justify-center items-center mb-10'>
            <div className='flex flex-col h-fit w-[60%] bg-white rounded-3xl gap-5 px-10 py-10'>
                <span className='text-4xl font-bold'>{found.titlePage}</span>
                <span className='text-gray-500 text-2xl font-semibold'>{found.subheading}</span>
                <div className='flex flex-row gap-2'>
                    <span>Written by: </span>
                    <span>{found.uname}</span>
                    <span>{found.name}</span>
                </div>
                <img src={found.img} alt="banner-photo" className='size-[30svw] self-center object-cover'/>
                <div className='flex flex-col gap-3 text-justify'>
                    {found.paragraph.map((item,index) => (
                        <p key={`paragraph-${index}`}>{item}</p>
                    ))}
                </div>
            </div>
        </div>
    </>
  ) }
}

export default ArticlePage