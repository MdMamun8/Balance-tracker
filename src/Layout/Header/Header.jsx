import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../Firebase/Firebase.config";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div className='flex flex-1 gap-20 items-center bg-slate-500 w-[68.2rem]'>
      <div className='logo'>
        <img
          className='w-12 rounded-full p-1'
          src='/src/Images/images.png'
          alt=''
        />
      </div>
      <nav className=' flex gap-10'>
        <NavLink
          className={
            "rounded-sm  px-2.5 text-[14px] font-semibold = shadow-sm  active:outline active:outline-2 active:outline-offset-2 active:outline-black"
          }
          to='/'>
          Home
        </NavLink>
        <NavLink
          className={
            "rounded-sm  px-2.5 text-[14px] font-semibold = shadow-sm  active:outline active:outline-2 active:outline-offset-2 active:outline-black"
          }
          to='/about'>
          About
        </NavLink>

        <NavLink
          className={
            "rounded-sm  px-2.5 text-[14px] font-semibold = shadow-sm  active:outline active:outline-2 active:outline-offset-2 active:outline-black"
          }
          to='/contact'>
          Contact
        </NavLink>
        <NavLink
          className={
            "rounded-sm  px-2.5 text-[14px] font-semibold = shadow-sm  active:outline active:outline-2 active:outline-offset-2 active:outline-black"
          }
          to='/users'>
          Users
        </NavLink>
        <NavLink
          className={
            "rounded-sm  px-2.5 text-[14px] font-semibold shadow-sm shadow-slate-400  active:outline active:outline-2 active:outline-offset-2 active:outline-black"
          }
          to='/login'>
          Log In
        </NavLink>
        <NavLink
          className={
            "rounded-sm  px-2.5 text-[14px] font-semibold = shadow-sm  active:outline active:outline-2 active:outline-offset-2 active:outline-black"
          }
          to='/registration'>
          Registration
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
