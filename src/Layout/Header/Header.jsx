import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className='flex flex-1 gap-20 items-center'>
      <div className='logo'>
        <img
          className='w-10 rounded-full'
          src='/src/Images/images.png'
          alt=''
        />
      </div>
      <nav className=' flex gap-10'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/registration'>Registration</NavLink>
      </nav>
    </div>
  );
};

export default Header;
