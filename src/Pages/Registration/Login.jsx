/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navigate = useNavigate();
  const handleback = () => {
    navigate(-1);
  };
  const handlehome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className=''>
        <div className=' flex flex-col justify-center items-center  gap-5 w-[25rem] my-2 mx-auto p-14 border-2 border-orange-300 h-[30rem]'>
          <div className='inputs'>
            <form className='' onSubmit={handleSubmit}>
              <div className=' block justify-center my-0 mx-auto'>
                <br></br>
                <label>
                  <input
                    className='w-96 h-10 rounded-lg border-2 border-orange-300 mb-3 p-5'
                    type='email'
                    name='email'
                    placeholder='Your Mail'
                  />
                </label>
                <br></br>
                <label>
                  <input
                    className='w-96 h-10 rounded-lg border-2 border-orange-300 mb-3 p-5'
                    type='password'
                    name='password'
                    placeholder='Your Password'
                  />
                </label>
              </div>
              <button className='w-96 rounded-lg border-2 border-orange-300 hover:text-white hover:bg-orange-300 hover:border-white ease-in-out duration-500 h-8 mb-2'>
                Log In
              </button>
            </form>
            <small>
              Have not any account? <Link to='/registration'>Sign Up</Link>
            </small>{" "}
            <div className='mt-5 flex gap-3'>
              <button
                className='w-24 bg-slate-300 rounded-xl hover:bg-slate-400 ease-in-out duration-300'
                onClick={handleback}>
                Go back
              </button>
              <button
                className='w-24 bg-slate-300 rounded-xl hover:bg-slate-400 ease-in-out duration-300'
                onClick={handlehome}>
                Go Home
              </button>
            </div>
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
