import React from 'react'
import { useSearchParams } from 'react-router-dom'
import ArticleItems from '../components/ArticleItems'

function HomePage() {
  const [searchParam,] = useSearchParams()
  const res = searchParam.get('result')
  const users = [
    { 
        id: 1,
        uname: '@bocilFF',
        img: '/pic1.jpg',
        slug: 'anywhere-everywhere',
        name: 'Freyjadour Falenas',
        titlePage: 'When a Word Becomes Inspiration to Move',
        subheading: 'Next Stop: Anywhere Everywhere',
    }, {
        id: 2,
        uname: '@MamangGanteng',
        name: 'Mamang Dokar',
        slug: "a-new-way-of-life",
        img: '/pic2.jpg',
        titlePage: 'Becoming A Boring Person',
        subheading: 'A New Way of Life to Celebrate Yourself',
    }, {
        id: 3,
        uname: '@LetTheWindLead',
        name: 'Jean Gunnhildr',
        slug: "become-a-whole-again",
        img: '/pic3.jpg',
        titlePage: 'When Someone Breaks Your Heart',
        subheading: 'Pick Up Your Pieces to Become A Whole Again',
    }, {
        id: 4,
        uname: '@TALLPERSON',
        name: 'Edward Elric',
        slug: 'dealing-with-regret',
        img: '/pic4.jpg',
        titlePage: 'Dealing with Past Actions',
        subheading: 'Regretting is a Sign That You Know You Can Do Much Better',
    }
  ]
  let filteredUsers = users
  if (res) {filteredUsers = users.filter((item) => item.titlePage.toLowerCase().includes(res))}

  return (
    <>
        <section>{res && <div className='text-2xl'>{filteredUsers.length} article(s) for <span className='font-bold'>"{res}"</span> </div>}</section>
        {filteredUsers.map((item, index) => (
            <ArticleItems key={`article-${index}`} name={item.name} title={item.titlePage} subheading={item.subheading} uname={item.uname} slug={item.slug} img={item.img}/>
        ))}
    </>
  )
}

export default HomePage