
import Button from './button.js';
import style from './style.css';

// Server Component
const ServerComponent = async () => {
  const res = await fetch("https://dummyjson.com/posts");
//   console.log("Response :", res);
  const json = await res.json();
//   console.log("Json :", json);
  const posts = await json.posts;
//   console.log("Posts :", posts);

  return (
    <div className='serverComp'>
      <h2>Server Component</h2>
      <h3>Posts :</h3>
      {posts.map((item) => (
        <div key={item.id}>
          <h3>Title : {item.title}</h3>
          <p>{item.body}</p>
          <p>Tags : {item.tags.map(item=><span key={item}> #{item}</span>)}</p>
          <p key={item.id}><span>Views : {item.views}</span> || <span  style={{color:"green"}} >Likes :{item.reactions.likes}</span></p>
          {/* <p onClick={()=>alert("Dislikes")}>Dislikes : {item.reactions.dislikes}</p> */}
          {/* onClick event will not work directly in server component */}

        <Button dislikes={item.reactions.dislikes}/>

        </div>
      ))}
    </div>
  );
};
export default ServerComponent;
