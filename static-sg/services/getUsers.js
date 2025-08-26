export default async function getUser(){
    const res=await fetch("https://dummyjson.com/users");
    return res.json();
}