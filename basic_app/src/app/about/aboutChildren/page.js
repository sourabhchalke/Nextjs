import Link from "next/link";

const aboutChildren=()=>{
    return(
        <div className="about-text">
            <h2>About Children</h2>
            <p>Welcome to children page. Which contain information about all children,such as student name,address,DOB and etc.</p>
            <Link href="/about/aboutChildren/childrenList">Go To Children List</Link>
            <hr/>
            <Link href="/about">Go to About Page</Link>
        </div>
    )
}
export default aboutChildren;