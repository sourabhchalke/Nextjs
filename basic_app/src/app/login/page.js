"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login=()=>{
    const router=useRouter();
    return(
        <div>
            <h2>Login</h2><br/>
            <Link href="/">Go To Home Page</Link>
            <button onClick={()=>router.push('/')}>Go To Home Page</button>
        </div>
    )
}
export default Login;