import React from 'react'
import NavBar from '../components/NavBar'
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
    }
  ]
  let filteredUsers = users
  if (res) {filteredUsers = users.filter((item) => item.titlePage.toLowerCase().includes(res))}

  return (
    <div className='flex flex-col justify-center items-center gap-10 mb-10'>
        <NavBar/>
        <div className='h-[10svh]'></div>
        <section>{res && <div className='text-2xl'>Hasil dari pencarian: <span className='font-bold'>"{res}"</span> ({filteredUsers.length})</div>}</section>
        {filteredUsers.map((item, index) => (
            <ArticleItems key={`article-${index}`} name={item.name} title={item.titlePage} subheading={item.subheading} uname={item.uname} slug={item.slug} img={item.img}/>
        ))}
    </div>
  )
}

export default HomePage