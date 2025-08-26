import Link from 'next/link';
import getUsers from '../../../services/getUsers';

export default async function User(){

    const getUserList = getUsers();

    const user=await getUserList;

    const data= await user.users;

    // console.log("Data : ",data);

    return(
        <div>
            <h2>User List </h2>
            {
                data.map((user)=>(
                    <div key={user.id}>
                        <h3>FirstName : <Link href={`/users/${user.id}`}>{user.firstName}</Link></h3>
                    </div>
                ))
            }
        </div>
    )
}