"use client";
import Link from "next/link";
import './about.css';
import { usePathname } from "next/navigation";

const AboutLayout=({children})=>{
    const pathName=usePathname();
    console.log(pathName);
    return(
        <div>
            <h2>Comman Layout for About</h2>
            <hr/>
           {
            pathName!=="/about/aboutChildren"?
             <ul className="ul-menu">
                <li>
                    <Link href="/about/aboutTeacher">About Teacher</Link>
                </li>
                <li>
                    <Link href="/about/aboutChildren">About Children</Link>
                </li>
            </ul>:
            null
           }
            <h2>{children}</h2>
        </div>
    )
}
export default AboutLayout;