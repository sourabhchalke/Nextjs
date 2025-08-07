import Link from "next/link";

const LoginLayout=({children})=>{
    return (
        <div>
            <Link href="/login/loginTeacher">Teacher Login</Link>
            <Link href="/login/loginChildren">Children Login</Link>
            <h3>{children}</h3>
            <Link href="/login">Go back to Login</Link>
        </div>
    )
}
export default LoginLayout;