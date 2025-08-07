import Link from "next/link";

const aboutTeacher=()=>{
    return(
        <div className="about-text">
            <h2>About Teacher</h2>
             <p>Welcome to Teacher page. Which contain information about all Teacher,such as student name,address,DOB and etc.</p>
            <hr/>
            <Link href="/about">Go to About Page</Link>
        </div>
    )
}
export default aboutTeacher;