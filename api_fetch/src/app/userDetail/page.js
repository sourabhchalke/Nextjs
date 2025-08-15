"use client";
import Script from "next/script";

export default function UserDetail(){
    return(
        <div>
            <Script src="/location.js" onLoad={()=>{alert("File Loaded")}} />
            <h2>Get user location</h2>
        </div>
    )
}