import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
            <div style={{width:"50%",margin:"auto"}}>
              <div key={data.id}>
                <img src="https://avatars.githubusercontent.com/u/112169989?v=4" alt="pro" style={{width:"80%",borderRadius:"50%"}}/>
                <h1 style={{textAlign:"center"}}>{data.name}</h1>
                <h2>{data.bio}</h2>
                <a href="https://drive.google.com/drive/folders/1ceg93Wkl9GSP0RPzUoXqcMnPSO3v7uIK?usp=share_link"><button style={{fontSize:"30px",padding:"5px",borderRadius:"10px",border:"none"}}>Resume</button></a>
                <h3>HTML | CSS | JavaScript | React | Nextjs | Chakra UI</h3>
                <h4>Education</h4>
                <p>Full Stack Web Developer - Masai School</p>
                <p>B.Tech in Automobile Engineering - MCKVIE</p>
              </div>
            </div>
        </div>
      </main>
    </>
  )
}

export async function getStaticProps(){
  let res = await fetch("https://api.github.com/users/Saurav903");
  let data1 = await res.json();
  return {
    props:{
      data:data1,
    }
  }
}
