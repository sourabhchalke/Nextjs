"use client"

import React from "react";
const Children=({params})=>{
    console.log(params);
    const data = React.use(params);
    return(
        <div>
           <h2>Cildren Details : </h2>
           <h3>Name : {data.children}</h3>
        </div>
    )
}
export default Children;