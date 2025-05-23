import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ArticleItems from '../components/ArticleItems'

function HomePage() {
  const [article, setArticle] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const res = searchParams.get('result')
  const sort = searchParams.get('sort') || 'asc';
  const currentPage = (parseInt(searchParams.get('page')) || 1)
  const itemPerPage = 5

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/Article.json')
        const data = await res.json()
        setArticle(data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  let filteredArticle = article
  if (res) {filteredArticle = article.filter((item) => item.titlePage.toLowerCase().includes(res.toLowerCase()))}

  filteredArticle = [...filteredArticle].sort((a, b) => {
    const titleA = a.titlePage.toLowerCase()
    const titleB = b.titlePage.toLowerCase()
    if (sort === 'asc') {
        if (titleA < titleB) {return -1}
        if (titleA > titleB) {return 1}
        return 0
    } else if (sort === 'desc') {
        if (titleA > titleB) {return -1}
        if (titleA < titleB) {return 1}
        return 0
    }
  })

  const totalPage = Math.ceil(filteredArticle.length / itemPerPage)
  let validPage
  if (currentPage < 1) {
    validPage = 1
  } else if (currentPage > totalPage) {
    validPage = totalPage
  } else {
    validPage = currentPage
  }

  const startIndex = (validPage - 1) * itemPerPage
  const endIndex = startIndex + itemPerPage
  const currentPageData = filteredArticle.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setSearchParams({ 
        result: res || '', 
        sort: sort || 'asc',
        page 
    })}

  const pages = [];
  for (let i = 1; i <= totalPage; i++) {pages.push(i)}

  if (loading) { return (<div className="h-svh flex flex-col justify-center items-center">Loading...</div>) }
  if (error) { return (<div className="h-svh flex flex-col justify-center items-center">{error}</div>) }

  return (
    <>
      <section>
        {res && (
          <div className="text-2xl">
            {filteredArticle.length} article(s) for{' '}
            <span className="font-bold">"{res}"</span>
          </div>
        )}
      </section>
      {currentPageData.map((item, index) => (
        <ArticleItems key={`article-${index}`} name={item.name} title={item.titlePage} subheading={item.subheading} uname={item.uname} id={item.id} slug={item.slug} img={item.img}/>
      ))}
      {totalPage > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4 mb-8">
          {pages.map((page) => (
            <button key={`page-${page}`} onClick={() => handlePageChange(page)} className={`px-4 py-2 rounded-md ${page === validPage ? 'bg-gray-700 text-white font-bold' : 'bg-gray-500 text-white hover:bg-gray-600'}`}>{page}</button>
          ))}
        </div>
      )}
    </>
  )
}

export default HomePage