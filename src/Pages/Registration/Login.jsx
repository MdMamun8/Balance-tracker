/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className=' w-[1200px]'>
        <div className=' flex flex-col justify-center items-center  gap-5 w-2/5 my-6 mx-auto p-14 border-2 border-orange-300 h-[90vh]'>
          <div className='heading'>
            <h1>CREATE AN ACCOUNT</h1>
          </div>
          <div className='inputs'>
            <form className='' onSubmit={handleSubmit}>
              <div className=' block justify-center my-0 mx-auto'>
                <br></br>
                <label>
                  <input
                    className='w-96 h-14 rounded-lg border-2 border-orange-300 mb-5 p-5'
                    type='email'
                    placeholder='Your Mail'
                  />
                </label>
                <br></br>
                <label>
                  <input
                    className='w-96 h-14 rounded-lg border-2 border-orange-300 mb-5 p-5'
                    type='password'
                    placeholder='Your Password'
                  />
                </label>
              </div>
            </form>
            <button className='w-96 rounded-lg border-2 border-orange-300 hover:text-white hover:bg-orange-300 hover:border-white ease-in-out duration-500 h-8'>
              Log In
            </button>
            <div className=' mb-3 mt-3 text-black-300 text-center'>
              <h1 className=' mb-1'>or</h1>
              <h2 className=' uppercase text-2xl'>login with</h2>
            </div>
            <div className='w-86 h-0.5 bg-black'></div>
            <nav>
              <div className='grid grid-flow-col justify-center gap-5 mt-5 '>
                <button>
                  <FcGoogle size={40} />
                </button>
                <button>
                  <FaGithubSquare size={40} />
                </button>
                <button>
                  <FaSquareFacebook size={40} color='blue' />
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
