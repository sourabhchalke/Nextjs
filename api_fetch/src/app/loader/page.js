

export default async function UserDetail(){

    const res = await fetch("https://dummyjson.com/users",{cache: "no-store"});
    const json = await res.json();
    const user=json.users;

    return(
        <div>
            <h2>User Details</h2>
            {
                user.map((item)=>(
                    <div key={item.id}>
                        <h3>Name : {item.firstName}</h3>
                    </div>
                ))
            }
        </div>
    )
}