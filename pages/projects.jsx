import React from 'react'
import Link from "next/link";
const Projects = ({proj}) => {
  return (
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",paddingTop:"30px",backgroundColor:"#596f94"}}>
        {proj.items.map((d)=>(
            <div key={d.id} style={{border:"1px solid black",display:"grid",justifyContent:"center",alignItems:"center",borderRadius:"10px"}}>
                <Link href={d.html_url}><h2>{d.name}</h2></Link>
                <p>{d.full_name}</p>
                <p>Star Count: {d.stargazers_count}</p>
                <p>Fork Count: {d.forks_count}</p>
                <h4>{d.language}</h4>
            </div>
        ))}
    </div>
  )
}

export async function getStaticProps(){
    let res = await fetch("https://api.github.com/search/repositories?q=user:Saurav903+fork:true&sort=updated&per_page=10&type=Repositories");
    let data2 = await res.json();
    return {
        props:{
            proj:data2,
        }
    }
}
export default Projects;