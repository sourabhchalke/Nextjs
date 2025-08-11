
import { NextResponse } from "next/server";

const Middleware=(request)=>{
    console.log("Request :",request);
    // if(request.nextUrl.pathname!="/login"){
        return NextResponse.redirect(new URL("/login",request.url));
    // }
}

export const config={
    matcher:"/about/:path*",
    // matcher:["/about/:path*","/study/:path*"], for multiple routes

};

export default Middleware;