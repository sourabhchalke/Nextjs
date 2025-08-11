"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  return (
    <div className={styles.page}>
      <h2>Component</h2>
      <NewComp name={"Sachin"}/>
      {/* <NewComp name={"Virat"}/> */}
      {/* <NewComp name={"Dhoni"}/>
      <NewComp name={"Rohit"}/>
      <NewComp name={"Risahb"}/>
      <NewComp name={"Jadeja"}/> */}
    </div>
  );
}

export const NewComp=(props)=>{

  const [value,setValue]=useState(1);
  const router=useRouter();

  return(
    <>
      <h2>NewComp</h2>
      <h3>My Name is {props.name}</h3>

      <button onClick={()=>setValue(value+1)}>Click</button>
      <h3>{value}</h3>

      {/* Link */}
      <h3>Link :</h3>
      <Link href="/login">Login</Link>
      <Link href="/about">About</Link>
      <br/>
      <br/>
      <br/>

      {/* Button */}
      <h2>Navigation</h2>
      <button onClick={()=>router.push("/login")}>To Login Page</button>
      <button onClick={()=>router.push("/about")}>To About Page</button>


    </>
  )

  }
