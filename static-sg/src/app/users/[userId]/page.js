
import getUsers from "../../../../services/getUsers";

export default async function UserDetail({ params }) {
  const { userId } =await  params;
  console.log("Id :", userId);

  const getUserList = getUsers();
  const user = await getUserList;
  const data = await user.users;
//   console.log("Data :",data);

  const userDetail = data[userId-1];
  console.log("User Detail :",userDetail);


  return (
    <div>
      <h3>User Details of :</h3>
      <h4>FirstName :{userDetail.firstName}</h4>
      <h4>LastName :{userDetail.lastName}</h4>
      <h4>Age :{userDetail.age}</h4>
      <h4>Gender :{userDetail.gender}</h4>
      <h4>Phone :{userDetail.phone}</h4>
      
    </div>
  );
}
