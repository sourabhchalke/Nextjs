import Link from "next/link";

const ChildrenList=()=>{

    const name=["ajay","vijay","jay","viru"];

    return(
        <div>
            <h2>Children List :</h2>
            <ul>
                <li>
                    <Link href={`/about/aboutChildren/childrenList/${name[0]}`}>Ajay</Link>
                </li>
                <li>
                    <Link href={`/about/aboutChildren/childrenList/${name[1]}`}>Vijay</Link>
                </li>
                <li>
                    <Link href={`/about/aboutChildren/childrenList/${name[2]}`}>Jay</Link>
                </li>
                <li>
                    <Link href={`/about/aboutChildren/childrenList/${name[3]}`}>Viru</Link>
                </li>
            </ul>
        </div>
    )
}
export default ChildrenList;