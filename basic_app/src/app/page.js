import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

 const NewComp=()=>{

  return(
    <>
      <h2>NewComp</h2>
    </>
  )

  }

  return (
    <div className={styles.page}>
      <h2>Component</h2>
      <NewComp/>
    </div>
  );
}
