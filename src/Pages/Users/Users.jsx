import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div className="grid grid-cols-3 gap-5 border-2 border-black mt-10">
      {users.map((user) => (
        <User key={user.id} user={user} />
       
      ))}
    </div>
  );
};

export default Users;
