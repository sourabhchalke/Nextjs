import Link from "next/link";
import './about.css';

const AboutLayout=({children})=>{
    return(
        <div>
            <h2>Comman Layout for About</h2>
            <hr/>
            <ul className="ul-menu">
                <li>
                    <Link href="/about/aboutTeacher">About Teacher</Link>
                </li>
                <li>
                    <Link href="/about/aboutChildren">About Children</Link>
                </li>
            </ul>
            <h2>{children}</h2>
        </div>
    )
}
export default AboutLayout;