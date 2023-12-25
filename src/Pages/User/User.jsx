/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const User = ({
  user: {
    id,
    name,
    email,
    company: { name: companyName },
  },
}) => {
  return (
    <div className='w-[300px] rounded-md border p-5'>
      <img
        src='https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
        alt='Laptop'
        className='h-[200px] w-full rounded-md object-cover'
      />
      <div className='p-4'>
        <h1 className='text-lg font-semibold'>Name : {name}</h1>
        <p className='mt-3 text-sm text-gray-600'>
          Company Name : {companyName}
        </p>
        <p className='mt-3 text-sm text-gray-600'>
          E-mail : {email}
        </p>
        <Link to={`/users/${id}`}>
          <button
            type='button'
            className='mt-4 rounded-sm bg-black px-2.5 py-1 text-[14px] w-56 font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>
            User Details
          </button>
        </Link>
      </div>
    </div>
  );
};
export default User;
