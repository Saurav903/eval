import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",height:"80px",backgroundColor:"#2d3748",width:"100%"}}>
        <div style={{display:"flex",justifyContent:"space-between",width:"40%"}}>
            <h1 ><Link style={{textDecoration:"none",color:"white"}} href="/">Saurav Kumar</Link></h1>
            <h1><Link style={{textDecoration:"none" ,color:"white"}} href="/projects">Projects</Link></h1>
            <h1><Link style={{textDecoration:"none",color:"white"}} href="/experience">Experience</Link></h1>
        </div>
        <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",width:"40%"}}>
            <img src="https://avatars.githubusercontent.com/u/112169989?v=4" alt="profile" style={{width:"50px",height:"50px",borderRadius:"50%"}}/>
        </div>
    </div>
  )
}

export default Navbar