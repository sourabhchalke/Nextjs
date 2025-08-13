"use client"

const DislikeButton=(props)=>{

    const {dislikes}=props;

    const ClickHandler=()=>{
        alert(`Dislikes : ${dislikes}`);
    }

    return(
        <div>
            <button onClick={ClickHandler}>Dislikes</button>
        </div>
    )
}
export default DislikeButton;