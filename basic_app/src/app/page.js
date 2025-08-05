
import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.page}>
      <h2>Component</h2>
      <NewComp name={"Sachin"}/>
      <NewComp name={"Virat"}/>
      <NewComp name={"Dhoni"}/>
      <NewComp name={"Rohit"}/>
      <NewComp name={"Risahb"}/>
      <NewComp name={"Jadeja"}/>
    </div>
  );
}

export const NewComp=(props)=>{

  return(
    <>
      <h2>NewComp</h2>
      <h3>My Name is {props.name}</h3>
    </>
  )

  }
