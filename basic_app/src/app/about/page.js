"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
const About=()=>{
    const router=useRouter();
    return(
        <div>
            <h2>About</h2><br/>

            <Link href="/about/aboutTeacher">Go To About Teacher</Link><br/>
            <Link href="/about/aboutChildren">Got To About Children</Link>

        <hr/>

            <Link href="/">Go To Home Page</Link><br/>
            <button onClick={()=>router.push('/')}>Go To Home Page</button><br/>

        </div>
    )
}

export default About;