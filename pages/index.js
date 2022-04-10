import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {PostCard,PostWidget,Categories} from '../components/'

const posts=[
  {title:'React Testing',except:'Learn React Testing'},
  {title:'React with Tailwind',except:'Learn React with Tailwind'}
];

export default function Home() {
  return (
    <div className="conatiner mx-auto px-10 mb-8 ">
      <Head>
        <title>CMS Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8 col-span-1">
      {posts.map((post,index) =>(
        <PostCard/>
      ))}
      </div>
    </div>

    <div className="lg:col-span-4 col-span-1">
        <div className="lg:sticky relative top-8">

        </div>
    </div>
     
    </div>
  )
}
