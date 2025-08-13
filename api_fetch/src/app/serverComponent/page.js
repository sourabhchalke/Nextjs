
// Server Component
const ServerComponent = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  console.log("Response :", res);
  const json = await res.json();
  console.log("Json :", json);
  const posts = await json.posts;
  console.log("Posts :", posts);

  return (
    <div>
      <h2>Server Component</h2>
      <h3>Posts :</h3>
      {posts.map((item) => (
        <div key={item.id}>
          <h3>Title : {item.title}</h3>
          <p>{item.body}</p>
          <p>Tags : {item.tags.map(item=><span key={item.id}> #{item}</span>)}</p>
          <p key={item.id}><span>Views : {item.views}</span> || <span style={{color:"red"}} >Likes :{item.reactions.likes}</span></p>
        
        </div>
      ))}
    </div>
  );
};
export default ServerComponent;
